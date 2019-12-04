import { Component } from 'react';
import React from 'react';

export class TimerForm extends Component {
    state = {
        title: this.props.title || '',
        project: this.props.project || ''
     };
     handleTitleChange = (e) => {
        this.setState({title: e.target.value})
     };
     handleProjectChange = (e) => {
        this.setState({project: e.target.value})
     };
     handleSubmit = () => {
         this.props.createTimer({
             title: this.state.title,
             project: this.state.project,
             id: this.props.id
            }
         )
         this.props.onCancel();
     }
    render() {
        return(
            <div>
                <h1>Edit or Create Timer</h1>
                <label>Title: </label><input 
                                            value={this.state.title}
                                            onChange={this.handleTitleChange}></input>
                <label>Project: </label><input 
                                            value={this.state.project}
                                            onChange={this.handleProjectChange}></input>
                <button onClick={this.handleSubmit}>Submit</button>
                <button onClick={this.props.onCancel}>Cancel</button>
            </div>
            
        );
    }
}