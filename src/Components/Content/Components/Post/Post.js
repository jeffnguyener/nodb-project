import React, { Component } from 'react';

class Post extends Component {
    constructor() {
        super()
        this.state = {
            input: "",
            edit: false
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

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    render() {
        return (
            //onclick toggles between checked boxes and grays out buttons
            <div> 
                <li><input type="checkbox" onClick={this.toggleEdit}></input>{this.props.event.title}</li>
                <input
                    onChange={this.handleInput}
                    placeholder='Edit Task Title'
                    value={this.state.input}
                    disabled={this.state.edit}
                />
                <button onClick={this.savedInput} disabled={this.state.edit}>Update</button>
                <button onClick={this.deleteInput} disabled={this.state.edit}>Delete</button>
            </div>
        )
    }
}



export default Post;



