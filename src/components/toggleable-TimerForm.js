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

    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({newTimerActive: false});
    }

    // handleSubmit = () => {
    //     var time = this.props.time || 0;
    //     this.props.createTimer({
    //         title: this.state.title,
    //         project: this.state.project,
    //         id: this.props.id,
    //         time: time
    //        }
    //     )
    //     this.props.onCancel();
    // }
    render() {
        
        if(!this.state.newTimerActive) {
            return(<button onClick={this.changeActiveStatus}>Create New Timer</button>);
        } else {
            return(<TimerForm onCancel={this.handleFormClose}
                              createTimer={this.props.createTimer}
                              onFormSubmit={this.handleFormSubmit}
                              />);
        }
    }
}