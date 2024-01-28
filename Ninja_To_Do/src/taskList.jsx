import "./App.css";

import React, { useContext } from "react";
import { myTaskData } from "./App";


function TaskItem({ task, index }) {
  const [start, setStart] = React.useState(true);
  const [inProgress, setInProgress] = React.useState(false);
  const [complete, setComplete] = React.useState(false);

  const { globalTaskStore, setGlobalTaskStore } = useContext(myTaskData);

  const handleStart = (index) => {
    globalTaskStore[index]["state"] = "in progress";
    setGlobalTaskStore([...globalTaskStore]);
    setStart(false);
    setInProgress(true);
  };

  const handleInProgress = (index) => {
    globalTaskStore[index]["state"] = "complete";
    setGlobalTaskStore([...globalTaskStore]);
    setInProgress(false);
  };


  const handleDelete = (index) => {

    const updatedList = globalTaskStore.filter((_,i) => i !== index);
    setGlobalTaskStore(updatedList);
  }

  return (
    <div className="task-item">


      <div className="taskinfo">
        <h2> Task: {task["taskname"]}</h2>
        <h3 style={{ textTransform: 'uppercase' }}> State: {task["state"]} </h3>
      </div>


      <div className="buttons">
        <button type="submit" onClick={() => handleDelete(index)}> 
         Delete </button>
        {start && (
          <button type="submit" onClick={() => handleStart(index)}>
            {" "}
            Start{" "}
          </button>
        )}
        {inProgress && (
          <button type="submit" onClick={() => handleInProgress(index)}>
            {" "}
            Done{" "}
          </button>
        )}
        

      </div>
    </div>
  );
}











function TaskList() {
  const { globalTaskStore, setGlobalTaskStore } = useContext(myTaskData);

  return (
    <div>
      {globalTaskStore.map((task, index) => (
        <TaskItem task={task} key={index} index={index} />
      ))}
    </div>
  );
}

export default TaskList;
