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
        this.setState({
            input: ""
        })
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
                    placeholder='Edit Task Title' 
                    value={this.state.input} />
                <button onClick={this.savedInput}>Update</button>
                <button onClick={this.deleteInput}>Delete</button>
            </div>
        )
    }
}



export default Post;



