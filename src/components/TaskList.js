import React from "react";
import Task from "./Task"

function TaskList({filteredTasks, taskList, setTaskList}) {
  //maps the tasklist to breakdown each individual task
  //breaks each task down by key, task, task.text, task.category, setter and getter
  const mappedTasks = filteredTasks.map(task => <Task key={task.id} task={task} text ={task.text} category={task.category} taskList={taskList} setTaskList={setTaskList}/>)
  return (
    <div className="tasks">
      {mappedTasks}
    </div>
  );
}

export default TaskList;
