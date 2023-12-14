import React, { useState } from 'react';
import '../../../src/style/Create.css';


const Create = (props) => {
    const [tasks, setTasks] = useState([]);
    
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDueDate, setTaskDueDate] = useState('');

    const addTask = () => {
      if (taskName.trim() !== '') {
        const newTask = {
          name: taskName,
          description: taskDescription,
        };
  
        setTasks([...tasks, newTask]);
  
        setTaskName('');
        setTaskDescription('');
      }
    }

return (

    <dialog open={props.open}>

    <div>
      <h1 className='title'>Create Issue</h1>

      <div>
        <label htmlFor="taskName">Issue Name:</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder='Input text here...'
        />
      </div>
      <div>
        <label htmlFor="taskDescription">Issue Description:</label>
        <input
          type="text"
          id="taskDescription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder='Input text here...'
        />
      </div>
      <div>
        <label htmlFor="taskDueDate">Issue Due Date:</label>
        <input
          type="date"
          id="taskDueDate"
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
        />
      </div>
      <button className='taskCreate' onClick={addTask}>Add Issue</button>
    </div>
    </dialog>
  );
};

export default Create;
