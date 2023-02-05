import React from "react";
import ReactDOM from "react-dom";
import TasksContainer from './tasks/TasksContainer';

import { injectGlobal } from 'styled-components'

injectGlobal`
 body {
    margin: 16px;
    font-family: sans-serif;
  }
  
  button {
    cursor: pointer
  }
  
  div {
    padding: 4px
  }
`

function App() {
  return <TasksContainer />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
