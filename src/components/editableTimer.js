import { Component } from 'react';
import React from 'react';
import { Timer } from './timer';
import { TimerForm } from './timerForm'

export class EditableTimer extends Component {
    state = {
        editForm: false
    }
    render() {
        
        if (this.state.editForm) {
            return(<TimerForm edit={this.props.edit}
                                id={this.props.id}
                                title={this.props.title}
                                project={this.props.project}
                                createTimer={this.props.createTimer}/>);
        } else {
            return(<Timer   key={this.props.id}
                            id={this.props.id}
                            title={this.props.title}
                            project={this.props.project}
                            elapsed={this.props.elapsed}
                            runningSince={this.props.runningSince} 
                            time={this.props.time}
                            edit={this.props.edit}
                            />);
        }
    }
}