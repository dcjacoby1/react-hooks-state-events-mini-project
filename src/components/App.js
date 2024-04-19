import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //taskList hold current tasks set TaskList updates current tasks
  const [taskList, setTaskList] = useState(TASKS)
  // const [categories, setCategories] = useState(CATEGORIES)
  const [filteredTasks, setFilteredTasks] = useState(TASKS)

  // const [taskFormSubmit, onTaskFormSubmit] = useState({
  //   text: "",
  //   category: null
  // })



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filteredTasks={filteredTasks} setFilteredTasks={setFilteredTasks}/>
      <NewTaskForm categories={CATEGORIES} setFilteredTasks={setFilteredTasks} filteredTasks={filteredTasks}/>
      {/* passing down to TaskList all tasks + setter and getter function */}
      <TaskList filteredTasks={filteredTasks} taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
