import "./App.css";


import React from "react";

import { useContext, useState } from "react";
import { myTaskData } from "./App";



function Stats() {


  const {globalTaskStore, setGlobalTaskStore} = useContext(myTaskData);

  


  return (
    <div className="stats-bar">
      <div className="stat-item">
        <h2>Total</h2>
        <span>{globalTaskStore.length}</span>
      </div>

      <div className="stat-item">
        <h2>Pending</h2>
        <span>
          {globalTaskStore.filter((task) => task["state"] === "pending").length}
        </span>
      </div>

      <div className="stat-item">
        <h2>In Progress</h2>
        <span>
          {globalTaskStore.filter((task) => task["state"] === "in progress").length}
        </span>
      </div>

      <div className="stat-item">
        <h2>Complete</h2>
        <span>
          {globalTaskStore.filter((task) => task["state"] === "complete").length}
        </span>
      </div>
    </div>
  );
}

export default Stats;
