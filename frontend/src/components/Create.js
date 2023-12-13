import React, { useState } from 'react';


const Create = () => {
    // State to manage tasks
    const [tasks, setTasks] = useState([]);
    
    // State for form input values
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
  
    // Function to handle task submission
    const addTask = () => {
      if (taskName.trim() !== '') {
        // Create a new task object
        const newTask = {
          id: tasks.length + 1,
          name: taskName,
          description: taskDescription,
        };
  
        // Update tasks state with the new task
        setTasks([...tasks, newTask]);
  
        // Clear form input values
        setTaskName('');
        setTaskDescription('');
      }
    }

return (
    <dialog >
    <div>
      <h1>Create Sprint</h1>

      <div>
        <label htmlFor="taskName">Sprint Name:</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="taskDescription">Task Description:</label>
        <input
          type="text"
          id="taskDescription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <button onClick={addTask}>Add Task</button>
    </div>
    </dialog>
  );
};

export default Create;
