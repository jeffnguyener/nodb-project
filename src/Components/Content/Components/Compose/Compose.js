import React, { Component } from 'react';

class Compose extends Component {
    constructor() {
        super()
        this.state = {
            input: ""
        }
    }

    handleNewInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleSavedNewInput = () => {
        this.props.handleNewEvent(this.state.input);
        this.setState({
            input: ""
        })
    }

                    //Where inserted compose new task button

    render() {
        return (
            <div>
                <input
                    onChange={this.handleNewInput}
                    placeholder='New Event'
                    value={this.state.input} />
                <button onClick={this.handleSavedNewInput}>New Task</button>
            </div>
        );
    }
}


export default Compose;