import React from 'react'
import {useState, useEffect, useNavigate} from 'react'
import axios from 'axios'

export default function View() {
    const [todoData, setTodoData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('api.php').then((res) => {
            
            if(res.data.code === 0){
                alert("Error: "+ res.data.reason);
            }else{
                console.log(res.data.reason);
                setTodoData(res.data.reason);
            }
            
        });
    }, []);
  return (
    <>
        <div className='mainContainer'>
            <div className='taskContainer'>
                <p className='text-white'>{res.taskName} 
                <div className='aboutContainer'>
                    <span className='text-secondary'>({res.taskDescription})</span> 
                    <span className='text-secondary'>({res.dueDate})</span>
                    <span className='text-secondary'>({res.created_at})</span>
                    <span className='text-secondary'>({res.updated_at})</span>
                </div>
                </p>
            </div>
        </div>
    </>
  )
}
