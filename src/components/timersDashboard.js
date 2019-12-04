import { Component } from 'react';
import React from 'react';
import * as uuid from "uuid";
import helpers from '../helpers.js'
import { EditableTimerList } from './editableTimerList';
import { ToggleableTimerForm } from './toggleable-TimerForm';

export class TimersDashboard extends Component {

    createTimer = (timer) => {                          
        const t = helpers.newTimer(timer);
        this.setState({
        timers: this.state.timers.concat(t),
    });
  };
    state = {
        timers: [
            {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: uuid.v4(),
                elapsed: 5456099,
                time: 0,
                runningSince: Date.now(),
                createTimer: this.createTimer
            }, 
            {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: uuid.v4(),
                elapsed: 1273998,
                time: 0,
                runningSince: null,
                createTimer: this.createTimer
            },
        ],
    };
    render() {
        return(

            <div>
                <EditableTimerList timers={this.state.timers}/>
                <ToggleableTimerForm isOpen={false}
                                     createTimer={this.createTimer}/>
            </div>
        );
    }
}