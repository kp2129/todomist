import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './style/scrollbars.css';
import App from './App';
import './style/scrollbars.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from './components/pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route index element={<App />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </HashRouter>
    
);