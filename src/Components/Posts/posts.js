import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Post/Post'


import './Posts.css'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allCurrentEvents: [],
        }
    }

    componentDidMount() {
        this.handleGetEvents()
    }

    handleGetEvents = () => {
        axios.get(`/api/events`).then(res => {
            console.log(res);
            this.setState({
                allCurrentEvents: res.data
            })
        })
    }

    handleUpdatedEvent = (id, title) => {
        axios.put(`/api/event/${id}`, { title: title }).then(res => {
            this.setState({
                allCurrentEvents: res.data
            })
        })
    }

    handleDeletedEvent = (id, title) => {
        axios.delete(`/api/events/${id}`, {title})
        .then(res => {
            this.setState({
                allCurrentEvents: res.data
            })
        })
    }

    render() {
        // console.log(this.state.allCurrentEvents)
        const currentEvents = this.state.allCurrentEvents.map((event) => <Post event={event} handleUpdatedEvent={this.handleUpdatedEvent} />);
        

        return (
            <div>
                <h1>Posts</h1>
                {currentEvents}
            </div>
        )
    }
}
export default Posts;