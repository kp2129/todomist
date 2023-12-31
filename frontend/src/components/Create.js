import React, { useState } from 'react';
import '../style/Create.css'
import Cookies from 'js-cookie';


const Create = (props) => {

    const [tasks, setTasks] = useState([]);
    const bearerToken = Cookies.get('access_token');
    console.log(bearerToken);
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDueDate, setTaskDueDate] = useState('');
    const [status, setStatus] = useState('0');

    const addTask = () => {
      if (taskName.trim() !== '') {
        const newTask = {
          taskName: taskName,
          taskDescription: taskDescription,
          dueDate: taskDueDate,
          status: status,
        };
  
        setTasks([...tasks, newTask]);
        fetch('http://localhost:8000/api/createTask', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + bearerToken,
            },
            body: JSON.stringify(tasks),
          })
            .then(response => response.json())
            .then(result => {
              console.log(result);
              console.log("lets go")
            })
            .catch(error => {
              console.error('Error:', error);
            });
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
