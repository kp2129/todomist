import axios from 'axios';
import React, { useState, useEffect } from 'react';

// import React from 'react'

const Reminder = () => {

    const [reminders, setReminders] = useState([]);

    // let sprintsData = [0, 1];
    // let sprintsData = [];

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/get').then((res) => {
            if(res.data.code === 0){
                alert("Error: "+ res.data.reason);
            }else{
                let test = Object.entries(res.data);
                let tempData = [];
                for(let i = 0; i < test.length; i++){
                    let current_year = new Date().getFullYear();
                    let current_month = new Date().getMonth()+1;
                    let current_date = new Date().getDate();
                    let end_year = new Date(test[i][1]["dueDate"]).getFullYear();
                    let end_month = new Date(test[i][1]["dueDate"]).getMonth()+1;
                    let end_date = new Date(test[i][1]["dueDate"]).getDate();
                    // console.log(start_date);
                    if(end_date - current_date >= 0 && end_month - current_month === 0 && end_year - current_year === 0){
                        tempData.push({ name: `${test[i][1]["taskName"]}`, endDate: `${end_date}/${end_month}/${end_year}`, days: end_date-current_date});
                    }
                } 
                setReminders(tempData);
            }
        });
    }, []);
  return (
    <>
        {reminders.map((sprint) => (
            <h3 className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded font-bold text-xl'>{sprint.name} is due on {sprint.endDate} in {sprint.days} days.</h3>
            // <p>is due on</p> 
        ))}
    </>
  )
}

export default Reminder