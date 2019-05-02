import React from 'react';
import Task from './Task';
import moment from "moment"
import "./TodoList.css"

class TaskCreator {
    constructor(taskStr) {
        this.taskStr = taskStr;
        this.creationTimestamp = moment(new Date()).format("DD/MM/YYYY hh:mm")
        this.done = false
    }
}

class TodoList extends React.Component {

    state = {
        tasks: [
            new TaskCreator("Ir a la compra"),
            new TaskCreator("Ir al peluquero"),
            new TaskCreator("Ir al peluquero"),
            new TaskCreator("Dar cariño a mi hijo adolescente")
        ]
    }

    render() {
        return (
            <div className="todo-list">
                <form>
                    <h1>Todo list App ({this.state.tasks.length})</h1>
                    <input type="text"></input>
                    <input type="button" value="Add new task"></input>
                </form>
                <ul className="not-done-tasks">
                    {
                        this.state.tasks.map((task, idx) => {
                            return (
                                <li key={idx}>
                                    <Task idx={idx + 1} taskStr={task.taskStr} creationTimestamp={task.creationTimestamp} done={task.done} />
                                </li>)
                        })
                    }
                </ul>
                {/* <ul className="done-tasks">
                    <li><Task taskStr="test1" creationTimestamp={new Date().toString()} done={true} /></li>
                    <li><Task taskStr="test1" creationTimestamp={new Date().toString()} done={true} /></li>
                    <li><Task taskStr="test1" creationTimestamp={new Date().toString()} done={true} /></li>
                    <li><Task taskStr="test1" creationTimestamp={new Date().toString()} done={true} /></li>
                </ul> */}
            </div>
        )
    }
}

export default TodoList;
