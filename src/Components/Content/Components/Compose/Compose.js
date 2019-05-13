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

    render() {
        return (
            <div>
                <input
                    onChange={this.handleNewInput}
                    placeholder='Enter New Task'
                    value={this.state.input} />
                <button onClick={this.handleSavedNewInput}>New Task</button>
            </div>
        );
    }
}


export default Compose;