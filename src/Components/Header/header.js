import React, { Component } from 'react';
// import axios from 'axios';

import logo from './images/family-vacation.png'

import './Header.css'

class Header extends Component {

    render() {

        return (
            <header className="Header-p">
                <section className="Header-content">

                    <div className="Co-name">
                    {logo}
                    <span>NLFA</span>
                    </div>

                </section>
            </header>
        )
    }
}

export default Header;