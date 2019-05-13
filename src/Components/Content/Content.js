import React, { Component } from 'react';
import axios from 'axios';
import Post from './Components/Post/Post'
import Compose from './Components/Compose/Compose'


import './Content.css'

class Content extends Component {
    constructor() {
        super()
        this.state = {
            allCurrentEvents: [],
        }
    }

    componentDidMount() {
        this.handleGetEvents()
    }

    handleGetEvents = () => {
        axios.get(`/api/events`).then(res => {
            // console.log(res);
            this.setState({
                allCurrentEvents: res.data
            })
        })
    }

    handleNewEvent = (title) => {
        axios.post(`/api/events`, { title: title }).then(res => {
            this.setState({
                allCurrentEvents: res.data
            })
        })
    }

    handleUpdatedEvent = (id, title) => {
        axios.put(`/api/event/${id}`, { title: title }).then(res => {
            console.log(res.data)
            this.setState({
                allCurrentEvents: res.data
            })
        })
            .catch(err => alert(err));
    }

    handleDeletedEvent = (id, title) => {
        axios.delete(`/api/events/${id}`, { title: title })
            .then(res => {
                console.log(res.data)
                this.setState({
                    allCurrentEvents: res.data
                })
            })
            .catch(err => alert(err));
    }

    render() {
        // console.log(this.state.allCurrentEvents)
        const currentEvents = this.state.allCurrentEvents.map((event) => <Post event={event} handleUpdatedEvent={this.handleUpdatedEvent} handleDeletedEvent={this.handleDeletedEvent} />)

        return (
            <div className="content">
                <br></br>
                <Compose handleNewEvent={this.handleNewEvent} />
                <h1>Current List</h1>
                <div className="content-body">
                    <div className="eventbox">
                        {currentEvents}
                    </div>
                </div>
            </div>
        )
    }
}
export default Content;