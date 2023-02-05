import React from "react";
import Tasks from './Tasks';

class TasksContainer extends React.Component {
  state = {
    tasks: [
      { id: 10, title: "Wash dishes", done: false },
      { id: 11, title: "Read book", done: false },
      { id: 12, title: "Get some sleep", done: true }
    ]
  };

  handleAddTask = (newTask) => {
    this.setState({
      tasks: [...this.state.tasks, {
        ...newTask,
        id: new Date().getTime()
      }]
    });
  };

  handleCompleteTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId)  {
          return {
            ...task,
            done: true
          }
        }
        return task;
      })
    });
  };

  render() {
    return (
      <Tasks
        tasks={this.state.tasks}
        addNewTask={this.handleAddTask}
        completeTask={this.handleCompleteTask}
      />
    );
  }
}

export default TasksContainer;
