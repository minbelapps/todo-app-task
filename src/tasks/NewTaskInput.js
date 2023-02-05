import React from "react";
import styled from "styled-components";

const AddNewTaskButton =  styled.button``;

class NewTaskInput extends React.Component {
  state = {
    inputValue: ''
  };

  handleCreateNew = () => {
    this.props.onChange(this.state.inputValue);
    this.setState({
      inputValue: ''
    })
  }

  handleInputChange = (changeEvent) => {
    this.setState({
      inputValue: changeEvent.target.value
    })
  }

  render() {
    const disabled = this.state.inputValue.trim().length === 0;

    return (
      <div>
        <AddNewTaskButton disabled={disabled} onClick={this.handleCreateNew}>
          Add new task
        </AddNewTaskButton>

        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          type="text"
        />
      </div>
    )
  }
}

export default NewTaskInput;
