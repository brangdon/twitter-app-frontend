import React, {Component} from 'react';

class Message extends Component {
    constructor(props) {
        super(props);

        this.followUser = this.followUser.bind(this);
    }

    followUser(){
        this.props.addFollower(this.props.message.userName)
    }

    render() {
        return (
            <div className="message">
                <p>Posted by: <a onClick={this.followUser}>{this.props.message.userName}</a></p>
                <p>Content: {this.props.message.content}</p>
                <p>Date: {this.props.message.date.substring(0, 10)} at: {this.props.message.hour}</p>
            </div>
        );
    }
}

export default Message;
