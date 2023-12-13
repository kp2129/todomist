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
import Search from './components/pages/Search';
import Reminder from './components/pages/reminder';



export default function App() {
  const [selectedPage, setSelectedPage] = useState('backlog');
  const navigate = useNavigate();

  const pages = {
    calendar: <Calendar />,
    backlog: <Backlog />,
    login: <Login />,
    search: <Search />,
  };

  function switchPage(pageName) {
    setSelectedPage(pageName);
  }



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
