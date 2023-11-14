import React from 'react';
import './style/index.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Sidebar />
      </main>
    </>
  );
}
