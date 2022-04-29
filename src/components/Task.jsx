import React from "react";
import { CgClose, CgInfo, GiConfirmed } from "react-icons/cg";
import { icons } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import "../style/Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const navigate = useNavigate();

  const handleTaskDetailsClick = () =>{
    navigate(`/${task.title}`)
  }

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "50px solid chartreuse", transition: "all 0.2s ease"} : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button className="see-task-details-button"  onClick={handleTaskDetailsClick}>
          <CgInfo/>
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
