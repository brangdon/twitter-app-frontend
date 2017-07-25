import React, { Component } from 'react';
import Message from './Message'

class Timeline extends Component {

    constructor(){
        super();
    }

    render() {
        var followerMessages = this.props.followerMessages.reverse().map((elem, i) => {
            return <Message addFollower={this.props.addFollower} message={elem} key={i}/>
        });

        return (
            <div className="timeline">
                <h3>Timeline - posts of users which I follow</h3>
                <button onClick={this.props.getFollowerMessages}>Get follower messages</button>
                <h4>Follower messages: {this.props.followerMessages.length}</h4>

                {followerMessages}
            </div>
        );
    }
}

export default Timeline;
