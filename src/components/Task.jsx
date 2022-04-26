import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import "../style/Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button className="see-task-details-button">
          <CgInfo />
        </button>
        <button
          className="remote-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
  // return <div className="task-container">{task.title}</div>;
};

export default Task;
