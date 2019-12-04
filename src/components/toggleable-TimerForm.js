import { Component } from 'react';
import React from 'react';
import { TimerForm } from './timerForm';

export class ToggleableTimerForm extends Component {
    state = {
        newTimerActive: false
    };

    changeActiveStatus = () => {
        this.setState({ newTimerActive: true});
    };

    handleFormClose = () => {
        this.setState({newTimerActive: false});
    };
    render() {
        
        if(!this.state.newTimerActive) {
            return(<button onClick={this.changeActiveStatus}>Create New Timer</button>);
        } else {
            return(<TimerForm onCancel={this.handleFormClose}
                              createTimer={this.props.createTimer}/>);
        }
    }
}