import React from "react";
import styled from "styled-components";
import NewTaskInput from './NewTaskInput';

const ActiveTask = styled.div`
  font-weight: bold;
`;

const CompletedTask = styled.div`
  text-decoration: line-through;
`;

const Total = styled.div`
  padding-top: 10px;
`;

class Tasks extends React.Component {
  handleCreateNewTask = (title) => {
    this.props.addNewTask({title, done: false });
  }

  render() {
    const activeTasks = this.props.tasks.filter(task => !task.done)                                                       ;
    const completedTasks = this.props.tasks.filter(task => task.done);

    return (
      <div>
        <NewTaskInput onChange={this.handleCreateNewTask} />

        {activeTasks.map(task =>
          <ActiveTask key={task.id} onClick={() => this.props.completeTask(task.id)}                                     >
            {task.title}
          </ActiveTask>)
        }

        {completedTasks.map(task =>
          <CompletedTask key={task.id}>{task.title}</CompletedTask>
        )}

        <Total>Total tasks: {this.props.tasks.length}</Total>
      </div>
    );
  }
}

export default Tasks;
