import React, {Component} from 'react';
var axios = require('axios')

class Create_Message extends Component {

    constructor(props) {
        super(props);
        this.justSubmitted = this.justSubmitted.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);

        this.state = {
            content: '',
            loaded: false,
            name: ''
        }
    }

    justSubmitted(event) {
        event.preventDefault();
        var _this = this;

        var currentDate = new Date();

        if (this.state.content.length <= 140) {
            axios.post('/post-message', {
                userName: this.state.name,
                content: this.state.content,
                date: currentDate.toISOString(),
                hour: currentDate.getHours() + ":" + currentDate.getMinutes()
            })
                .then(function (response) {


                    if (!_this.state.loaded) {
                        _this.props.setName(response.data)

                        _this.setState({
                            loaded: true,
                            name: response.data
                        })
                    }
                    console.log('message user')
                    console.log(_this.state.name);
                    _this.props.getMessages()


                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            console.log('message extends 140 chars')
        }


        console.log('post message')
    }

    handleChangeContent(event) {
        this.setState({content: event.target.value});
    }


    render() {
        return (
            <div className="create-message">
                <h3>Create Message</h3>
                <input type="text" onChange={this.handleChangeContent} placeholder="content"/>
                <button onClick={this.justSubmitted}>Create message!</button>
            </div>
        );
    }
}

export default Create_Message;
