
import React from 'react';
import './style/index.css';
import View from "./components/View"
import Aside from './components/aside';

import Navbar from './components/navbar';
import Backlog from './components/pages/backlog';
import Calendar from './components/pages/Calendar';
import NotFound from './components/pages/NotFound';


export default function App() {
  return (
    <>

    <View />

      <Navbar />
      <main>
        <Aside />
        <Backlog />
      </main>

    </>
  );
}
