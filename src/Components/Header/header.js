import React, { Component } from 'react';
// import axios from 'axios';

// import logo from './img/beach-vacation.png'

import './Header.css'

class Header extends Component {

    render() {

        return (
            <section className="Header-p">
                <section className="Header-content">

                    <div className="Co-name">
                    (logo)
                    <span>NLFA</span>
                    </div>

                    <div className="Header-searchbar"></div>

                </section>
            </section>
        )
    }
}

export default Header;