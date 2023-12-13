import axios from 'axios';
import React, { useState, useEffect } from 'react';

import React from 'react'

const reminder = () => {

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
                let issues = [];
                for(let i = 0; i < test.length; i++){
                    let start_year = new Date(test[i][1]["updated_at"]).getFullYear();
                    let start_month = new Date(test[i][1]["updated_at"]).getMonth()+1;
                    let start_date = new Date(test[i][1]["updated_at"]).getDate();
                    let end_year = new Date(test[i][1]["dueDate"]).getFullYear();
                    let end_month = new Date(test[i][1]["dueDate"]).getMonth()+1;
                    let end_date = new Date(test[i][1]["dueDate"]).getDate();
                    // console.log(start_date);
                    tempData.push({ name: `${test[i][1]["taskName"]}`, startDate: `${start_date}/${start_month}/${start_year}`, endDate: `${end_date}/${end_month}/${end_year}`, issueName: `TMST-${test[i][1]['id']}`, issues: [`${test[i][1]["taskDescription"]}`] });
                } 
                setReminders(tempData);
            }
        });
    }, []);
  return (
    <div>reminder</div>
  )
}

export default reminder