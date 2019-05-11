import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Post/Post'


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
        axios.delete(`/api/events/${id}`, {title: title})
        .then(res => {
            this.setState({
                allCurrentEvents: res.data
            })
        })
    }

    render() {
        // console.log(this.state.allCurrentEvents)
        const currentEvents = this.state.allCurrentEvents.map((event, i) => <Post event={event} handleUpdatedEvent={this.handleUpdatedEvent } />)
            
        return (
            <div>
                <h1>Current Vacations</h1>
                {currentEvents}
            </div>
        )
    }
}
export default Content;