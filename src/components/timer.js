import { Component } from 'react';
import React from 'react';

export class Timer extends Component {
    state = {
        timerTime: this.props.time,
        timerOn: false
    }

    timedCount = () => {
            if(this.state.timerOn) {
                // this.state.timerTime = this.state.timerTime + 1;
                var time = this.state.timerTime + 1;
                this.setState({timerTime: time});
                this.props.updateGlobalTime(this.props.id, time);
                console.log(this.state.timerTime);
                setTimeout(this.timedCount, 1000);
            } else {
                clearTimeout();
            }
        }

        startOrStopTimer = () => {
            if(!this.state.timerOn) {
                // this.state.timerOn = true;
                this.setState({timerOn: true});
                setTimeout(this.timedCount, 1000);
            } else {
                // this.state.timerOn = false;
                this.setState({timerOn: false});
            }
        }
    render() {
        
        
        
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.project}</h3>
                <h1>{this.state.timerTime}</h1>
                {/*why does startOrStopTimer get called when its startOrStopTimer() without a click*/}
                <button onClick={this.startOrStopTimer}>Start/Stop</button>
                <button onClick={this.props.onEditClick}>Edit</button>
                <button onClick={this.props.deleteTimer}>Delete</button>
            </div>
            
        );
    }
}