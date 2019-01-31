import React from 'react';
import Home from './Home.jsx'
import Search from './Search.jsx'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            view: 'home',
            inputBarText: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.changeView = this.changeView.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        const textInput = {};
        textInput[e.target.name] = e.target.value;
        this.setState(textInput);
    }

    changeView() {
        if (this.state.view === 'home') {
            this.setState({
                view: 'search'
            })
        } else {
            this.setState({
                view: 'home'
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.view === 'home'
                    ? <Home changeView={this.changeView} handleChange={this.handleChange} inputBarText={this.state.inputBarText}/>
                    : <Search changeView={this.changeView} handleChange={this.handleChange} inputBarText={this.state.inputBarText}/>
                }
            </div>
        )
    }
}

