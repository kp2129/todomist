import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function View() {
    // const [todoData, setTodoData] = useState([]);
    // // const navigate = useNavigate();
    // useEffect(() => {
    //     axios.get('api.php').then((res) => {
    //         if(res.data.code === 0){
    //             alert("Error: "+ res.data.reason);
    //         }else{
    //             console.log(res.data.reason);
    //             setTodoData(res.data.reason);
    //         }
            
    //     });
    // }, []);
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">

            </div>
        </>
    )
}