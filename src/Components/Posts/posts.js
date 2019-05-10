import React, { Component } from 'react';
import axios from 'axios';


import './Posts.css'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allCurrentEvents: [],
            editPost: ''

        }
    }

    componentDidMount() {
        this.handleGetEvents()
    }

    handleGetEvents = () => {
        axios.get(`./api/events`).then(res => {
            console.log(res);
            this.setState({
                allCurrentEvents: res.data
            })
        })
    }

    handleInput(val) {
        this.setState({ editPost: val })
    }

    handleUpdatedEvent() {
        let updateEvent = {
            title: this.state.editPost
        }
        axios.put(`.api/events`).then(res => {
            this.props.updateEvent(res.data)

        })
    }

    handleDeletedEvent = () => {
        // axios.delete(`./api/event/${t}`, updateEvent).then(res => {
            // this.props.deletedEvent(res.data)
        // })
    }

    render() {
        // console.log(this.state.allCurrentEvents)
        const currentEvents = this.state.allCurrentEvents.map((event) => {
            return (
                <div>
                    <li key={event.title}>{event.title}</li>
                    <input
                        onChange={(e) => this.handleInput(e.target.value)}
                        value={this.setState.editPost}
                        placeholder='Edit Post' />
                </div>

            )
        });

        return (
            <div>
                {currentEvents}
            </div>
        )
    }
}
export default Posts;