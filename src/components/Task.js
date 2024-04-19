import React from "react";

function Task({ filteredTask, text, category, taskList, setTaskList}) {
  
  function handleClick(){
    const deletedTasks = taskList.filter(t => t.id !== filteredTask.id)
    setTaskList(deletedTasks)
    
    

  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
