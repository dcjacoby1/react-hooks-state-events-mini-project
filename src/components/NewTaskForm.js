import React, {useState} from "react";




function NewTaskForm({categories, setFilteredTasks, filteredTasks}) {

  const [formData, setFormData] = useState({
    text: "",
    category: null
  })
  
  
  const handleSubmit = (event) => {
    event.preventDefault()
  
    // Create a new task object
    const newTask = {
      text: formData.text,
      category: formData.category
    };
    setFilteredTasks([...filteredTasks, newTask])
  
    // Reset the form inputs
    setFormData({ text: "", category: null })
  };


  const categoryOptions = categories.filter(category => category !== "All").map(category => <option key={category}>{category}</option>)
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text}
          onChange={ (event) => setFormData( {...formData, text: event.target.value} ) }/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category}
          onChange={ (event) => setFormData( {...formData, category: event.target.value} ) }>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
