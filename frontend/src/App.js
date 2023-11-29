
import React, { useState } from 'react';
import './style/index.css';
import Aside from './components/aside';
import Navbar from './components/navbar';
import Backlog from './components/pages/backlog';
import Calendar from './components/pages/Calendar';
import NotFound from './components/pages/NotFound';
import View from './components/View';

export default function App() {
  const [selectedPage, setSelectedPage] = useState('backlog');

  const pages = {
    calendar: <Calendar />,
    backlog: <Backlog />,
  };

  function switchPage(pageName){
    setSelectedPage(pageName);
  }

  return (
    <>

      <View />


      <Navbar />
      <main>
        <Aside switchPage={switchPage}/>
        {(selectedPage in pages) ? 
          pages[selectedPage]
        : 
          <NotFound />
        }
        
      </main>

    </>
  );
}
