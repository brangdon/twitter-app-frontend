import React, {Component} from 'react';
import Timeline from './components/Timeline'
import Create_Message from "./components/Create_Message";
import Wall from './components/Wall'
import Info from './components/Info'
// import {BrowserRouter, Route} from 'react-router-dom'
var axios = require('axios')

class App extends Component {

    constructor() {
        super();
        this.setName = this.setName.bind(this);
        this.getMessages = this.getMessages.bind(this);
        this.getFollowerMessages = this.getFollowerMessages.bind(this);
        this.addFollower = this.addFollower.bind(this);

        this.state = {
            name: 'annon',
            messages: [],
            followerMessages: []
        }
    }

    componentDidMount() {

        var _this = this;
        this.serverRequest =
            axios
                .get("/messages")
                .then(function (result) {

                    if (result) {
                        _this.setState({
                            messages: result.data
                        });
                    }

                })
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    setName(name) {
        this.setState({
            name: name
        })
    }

    getMessages() {
        var _this = this;
        this.serverRequest =
            axios
                .get("/messages")
                .then(function (result) {

                    if (result) {
                        _this.setState({
                            messages: result.data
                        });
                    }
                })
    }

    getFollowerMessages() {
        var _this = this;
        this.serverRequest =
            axios
                .get("/follower-messages/"+this.state.name)
                .then(function (result) {

                    if (result) {
                        _this.setState({
                            followerMessages: result.data
                        });
                        console.log('get follower messages')
                    }
                })
    }

    addFollower(following) {
        if (this.state.name != following && this.state.name != 'annon') {
            var _this = this;
            console.log('following: ' + following)

            axios.post('/add-follower', {
                follower: this.state.name,
                following: following
            })
                .then(function (response) {

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    render() {
        return (<div className="container">
            <div>
                <Info name={this.state.name}/>
            </div>
            <div>
                <Create_Message setName={this.setName} getMessages={this.getMessages}/>
            </div>
            <div>
                <Wall getMessages={this.getMessages} messages={this.state.messages} addFollower={this.addFollower}/>
            </div>
            <div>
                <Timeline getFollowerMessages={this.getFollowerMessages} followerMessages={this.state.followerMessages} addFollower={this.addFollower}/>
            </div>
        </div>);
    }
}

export default App;
