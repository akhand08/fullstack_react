import "./App.css";

import { useContext, createContext, useState } from "react";

import NavBar from "./navbar.jsx";
import TaskForm from "./taskForm.jsx";
import Stats from "./stats.jsx";
import TaskList from "./taskList.jsx";

export const myTaskData = createContext({
  globalTaskStore: [],
  setGlobalTaskStore: () => {},
});

function Ninja({ children }) {
  const [globalTaskStore, setGlobalTaskStore] = useState([]);

  return (
    <myTaskData.Provider value={{ globalTaskStore, setGlobalTaskStore }}>
      <section>
        <div className="header">
          <NavBar />
        </div>
        <div className="main">
          <div className="left">
            <TaskForm />
          </div>
          <div className="right">
            <div className="upper">
              <Stats />
            </div>
            <div className="lower">
              <TaskList />
            </div>
          </div>
        </div>
      </section>
    </myTaskData.Provider>
  );
}

export default Ninja;




























