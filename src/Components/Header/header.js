import React, { Component } from 'react';

import './Header.css'

class Header extends Component {

    render() {

        return (
            <header className="Header-p">
                <section className="Header-content">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE39ZonQrfvNN2tPzheV6jxsLjh8XBfaajarsT3HHmpL2pmOU4"></img>
                    </div>
                    <span className="family">Checklist</span>
                </section>
            </header>
        )
    }
}

export default Header;