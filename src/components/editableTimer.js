import { Component } from 'react';
import React from 'react';
import { Timer } from './timer';
import { TimerForm } from './timerForm'

export class EditableTimer extends Component {
    state = {
        editForm: false
    }
    handleEditClick = () => {
        this.openForm();
      };
      
      handleFormClose = () => {
        this.closeForm();
      };
      
      handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
      };
      
      closeForm = () => {
        this.setState({ editForm: false });
      };
      
      openForm = () => {
        this.setState({ editForm: true });
      };

      deleteTimer = () => {
            this.props.deleteTimer(this.props.id);
      }
      
    render() {
        
        if (this.state.editForm) {
            return(<TimerForm edit={this.props.edit}
                                id={this.props.id}
                                title={this.props.title}
                                project={this.props.project}
                                createTimer={this.props.createTimer}
                                onFormSubmit={this.handleSubmit}
                                onCancel={this.handleFormClose}
                                />);
        } else {
            return(<Timer   key={this.props.id}
                            id={this.props.id}
                            title={this.props.title}
                            project={this.props.project}
                            elapsed={this.props.elapsed}
                            runningSince={this.props.runningSince} 
                            time={this.props.time}
                            edit={this.props.edit}
                            onEditClick={this.handleEditClick}
                            updateGlobalTime={this.props.updateGlobalTime}
                            deleteTimer={this.deleteTimer}
                            />);
        }
    }
}