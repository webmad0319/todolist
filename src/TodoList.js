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
            new TaskCreator("Ir a Ironhack")
        ],
        newTaskText: ""
    }

    addNewTask() {
        if (this.state.newTaskText.trim().length === 0) return;

        const tasksWithNewTask = [...this.state.tasks]
        tasksWithNewTask.push(new TaskCreator(this.state.newTaskText))
        this.setState({
            ...this.state,
            tasks: tasksWithNewTask,
            newTaskText: ""
        })
    }

    onNewTaskInputChange(e) {
        this.setState({
            ...this.state,
            newTaskText: e.target.value
        })
    }

    setStatusAsDone(taskIndex) {
        const allTasks = [...this.state.tasks]
        allTasks[taskIndex].done = !allTasks[taskIndex].done

        this.setState({
            ...this.state,
            tasks: allTasks
        })
    }

    render() {
        return (
            <div className="todo-list">
                <form>
                    <h1>Todo list App ({this.state.tasks.length})</h1>
                    <input type="text" placeholder="Add a new task" value={this.state.newTaskText} onChange={(e) => this.onNewTaskInputChange(e)}></input>
                    <input type="button" value="Add new task" onClick={() => this.addNewTask()}></input>
                </form>
                <section className="not-done-tasks">
                    <h3>To do items ({this.state.tasks.filter(task=>task.done === false).length})</h3>
                    <ul>
                        {
                            this.state.tasks.map((task, idx) => {
                                return (
                                    <li key={idx}>
                                        <Task onTaskStatusChange={(taskIndex) => this.setStatusAsDone(taskIndex)} idx={idx + 1} taskStr={task.taskStr} creationTimestamp={task.creationTimestamp} done={task.done} />
                                    </li>)
                            })
                        }
                    </ul>
                </section>
            </div>
        )
    }
}

export default TodoList;
