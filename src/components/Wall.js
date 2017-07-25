import React, {Component} from 'react';
import Message from './Message'
var axios = require('axios')

class Wall extends Component {

    constructor() {
        super();
    }

    render() {
        var messages = this.props.messages.reverse().map((elem, i) => {
            return <Message addFollower={this.props.addFollower} message={elem} key={i}/>
        });

        return (
            <div className="wall">
                <h3>Wall - view all posts</h3>
                <button onClick={this.props.getMessages}>Get messages</button>
                <h4>Messages: {this.props.messages.length}</h4>

                {messages}

            </div>
        );
    }
}

export default Wall;
