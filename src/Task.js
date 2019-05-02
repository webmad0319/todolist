import React from 'react';
import './Task.css';


class Task extends React.Component {

    render() {
        return (
            <div className={"task " + (this.props.done ? 'done' : null)}>
                <span>{this.props.idx}. </span>
                <input type="checkbox"></input>
                <span>{this.props.taskStr}</span>
                <span className="date">{this.props.creationTimestamp}</span>
                {/* <span></span> */}
                {/* <span>{this.props.done}</span> */}
            </div>
        )
    }
}

export default Task;
