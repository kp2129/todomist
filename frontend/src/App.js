import React, { useState } from 'react';
import './style/index.css';
import Aside from './components/aside';
import Navbar from './components/navbar';
import Login from './components/pages/Login';
import Backlog from './components/pages/backlog';
import Calendar from './components/pages/Calendar';
import NotFound from './components/pages/NotFound';
import View from './components/View';

export default function App() {
  const [selectedPage, setSelectedPage] = useState('backlog');

  const pages = {
    calendar: <Calendar />,
    backlog: <Backlog />,
    login: <Login />,
  };

  function switchPage(pageName) {
    setSelectedPage(pageName);
  }

  return (
    <>
      <View />
      <Navbar switchPage={switchPage} />

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
