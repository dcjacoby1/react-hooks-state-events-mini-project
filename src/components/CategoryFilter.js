import React, {useState} from "react"
import { TASKS } from "../data";

function CategoryFilter({categories, filteredTasks, setFilteredTasks}) {
  const [selectedCategory, setSelectedCategory] = useState(null)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => 
      <button key={category}
      className={selectedCategory === category ? "selected" : ""}
      onClick={() => {
        setSelectedCategory(category)
        if (category === "All") {
          setFilteredTasks(TASKS)
          console.log(TASKS)
        } else{
          const filteredTaskList = TASKS.filter(task => task.category === category)
          setFilteredTasks(filteredTaskList)
          console.log(filteredTasks)
        }
        }}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
