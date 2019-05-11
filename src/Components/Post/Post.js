import React, { Component } from 'react';

class Post extends Component {
    constructor() {
        super()
        this.state = {
            input: ""
        }
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    savedInput = () => {
        const { id } = this.props.event
        const { input } = this.state
        this.props.handleUpdatedEvent(id, input);
    }

    deleteInput = () => {
        const { id } = this.props.event
        const { input } = this.state
        this.props.handleDeletedEvent(id, input);
    }

    render() {
        // console.log(this.deleteInput)
        return (
            <div>
                <li>{this.props.event.title}</li>
                <input
                    onChange={this.handleInput}
                    placeholder='Edit Post' />
                <button onClick={this.savedInput}>Edit</button>
                <button onClick={this.deleteInput}>Delete</button>
            </div>
        )
    }
}



export default Post;



