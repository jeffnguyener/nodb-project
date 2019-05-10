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
        
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <li>{this.props.event.title}</li>
                <input
                    onChange={this.handleInput}
                    placeholder='Edit Post' />
                <button onClick={this.savedInput}>Save</button>
            </div>
        )
    }
}



export default Post;



