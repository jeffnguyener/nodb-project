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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE39ZonQrfvNN2tPzheV6jxsLjh8XBfaajarsT3HHmpL2pmOU4"></img>
                    <span>Family Vacation Checklist</span>
                    </div>

                </section>
            </header>
        )
    }
}

export default Header;