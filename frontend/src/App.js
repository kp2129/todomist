import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/index.css';
import Create from './components/Create';
import Aside from './components/aside';
import Navbar from './components/navbar';
import Login from './components/pages/Login';
import Backlog from './components/pages/backlog';
import Calendar from './components/pages/Calendar';
import NotFound from './components/pages/NotFound';
import View from './components/View';
import { useNavigate } from 'react-router-dom';
import Reminder from './components/pages/reminder';


export default function App() {
  const [selectedPage, setSelectedPage] = useState('backlog');
  const navigate = useNavigate();

  const pages = {
    calendar: <Calendar />,
    backlog: <Backlog />,
    login: <Login />,
  };

  function switchPage(pageName) {
    setSelectedPage(pageName);
  }

  // useEffect(() => {
  //   axios.post('').then((res) => {
  //       if(res.data.code === 0){
  //           navigate('/login');
  //       }else{

  //       }
  //   });

    
// }, []);

  return (
    <>
      <View />
      <Navbar switchPage={switchPage} />
      <Create />
      <Reminder/>
      <main className={selectedPage === 'login' ? 'Flex-center' : ''}>
        {selectedPage !== 'login' && <Aside switchPage={switchPage} />}
        {selectedPage in pages ? (
          pages[selectedPage]
        ) : (
          <NotFound />
        )}
      </main>
    </>
  );
}
