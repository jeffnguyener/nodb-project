import React, { Component } from 'react';
// import axios from 'axios';


import './Compose.css';

class Compose extends Component{
    
    render(){
        return(
            <div>
            <button onClick={this.compose}>New Vacation</button>
            </div>
        );
    }
}


export default Compose;