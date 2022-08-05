import React, { useReducer, useRef } from "react";

// Init state
const initState = {
  task: "",
  tasks: [],
};

// Define action
const SET_TASK = "set_task";
const ADD_TASK = "add_task";
const DEL_TASK = 'del_task'

const setTask = (payload) => {
  return {
    type: SET_TASK,
    payload,
  };
};

const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

const delTask = payload => {
    return {
        type: DEL_TASK,
        payload
    }
}

// Reducer
const reducer = (state, action) => {
  console.log("action: ", action);
  console.log("prevState ", state);
  let newState;
  switch (action.type) {
    case SET_TASK:
      newState = {
        ...state,
        task: action.payload,
      };
      break;
    case ADD_TASK:
      newState = {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      break;
    case DEL_TASK:
      const newTasks = [...state.tasks]
      newTasks.splice(action.payload, 1)
      newState = {
        ...state,
        tasks: newTasks
      }
        break
    default:
      throw new Error("Invalid action");
  }

  console.log("newState ", newState);
  return newState;
};

function ToDo() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { task, tasks } = state;
  const inputRef = useRef();

  const handleAddTask = () => {
    dispatch(addTask(task));
    dispatch(setTask(""));
    inputRef.current.focus();
  };


  return (
    <>
      <h3>To Do App</h3>
      <input
        ref={inputRef}
        value={task}
        placeholder="Enter task ..."
        onChange={(e) => dispatch(setTask(e.target.value))}
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task} <span onClick={() => dispatch(delTask(index))}>&times;</span></li>
        ))}
      </ul>
    </>
  );
}

export default ToDo;
