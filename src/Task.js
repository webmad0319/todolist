import React from 'react';
import './Task.css';


class Task extends React.Component {

    setTaskStatus() {
        this.props.onTaskStatusChange(this.props.idx - 1)
    }

    render() {
        return (
            <div className={"task " + (this.props.done ? 'done' : null)}>
                <span>{this.props.idx}. </span>
                <input type="checkbox" onClick={() => this.setTaskStatus()}></input>
                <span>{this.props.taskStr}</span>
                <span className="date">{this.props.creationTimestamp}</span>
            </div>
        )
    }
}

export default Task;
