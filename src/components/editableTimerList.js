import { Component } from 'react';
import React from 'react';
import { EditableTimer } from './editableTimer';

export class EditableTimerList extends Component {

    render() {
        const times = this.props.timers.map((timer) => (
            <EditableTimer
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince} 
                time={timer.time}
                edit={false}
                createTimer={timer.createTimer}/>
        ))
        return(
            <div>
                {times}    
            </div>
        );
        
    }
}