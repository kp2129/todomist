import React from 'react';
import './style/index.css';
import Aside from './components/aside';
import Navbar from './components/navbar';



export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Aside />
      </main>
    </>
  );
}
