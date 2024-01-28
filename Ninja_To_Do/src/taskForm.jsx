import "./App.css";

import { React } from "react";
import { useContext, useState } from "react";
import { myTaskData } from "./App";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");

  const {globalTaskStore, setGlobalTaskStore} = useContext(myTaskData);

  const handleTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const handleDeadline = (event) => {
    setDeadline(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setGlobalTaskStore([
      ...globalTaskStore,
      {
        taskname: taskName,
        deadline: deadline,
        state: "pending",
        key: globalTaskStore.length + 1,
      },
    ]);

    setTaskName("");
    setDeadline("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="taskname"> Task Name </label>
          <input
            type="text"
            id="taskname"
            placeholder="Enter Your Task Name"
            value={taskName}
            onChange={handleTaskName}
          ></input>
        </div>

        <div className="form-item">
          <label htmlFor="deadline"> Deadline </label>
          <input
            type="datetime-local"
            id="deadline"
            value={deadline}
            onChange={handleDeadline}
          ></input>
        </div>

        <div className="form-item form-button">
          <button type="submit" id="add-button">
            {" "}
            Add This Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
