import React, {Component} from 'react';

class Create_Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        }
    }

    render() {
        return (
            <div className="info">
                <h3>Info</h3>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default Create_Message;
