import React, { Component } from 'react';

export class Menu extends React.Component {
    render() {
        return (<nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
                <li><a href="/">Wall</a></li>
                <li><a href="/timeline">Timeline</a></li>
                <li><a href="/create-message">Create message</a></li>
            </ul>

        </nav>);
    }
}

export default Menu;
