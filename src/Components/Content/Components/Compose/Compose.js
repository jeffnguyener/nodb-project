import React, { Component } from 'react';

import './Compose.css';


class Compose extends Component{
    constructor(){
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
  

    render(){
        return(
            <div>
                
            <input 
                onChange={this.handleNewInput}
                placeholder='New Event'
                value={this.state.input} />
            <button onClick={this.handleSavedNewInput}>New Vacation</button>
            </div>
        );
    }
}


export default Compose;