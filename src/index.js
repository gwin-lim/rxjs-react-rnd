import React from 'react';
import FirstPerson from './components/FirstPerson';
import SecondPerson from './components/SecondPerson';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index path="/" element={<FirstPerson />} />
        <Route index path="/first-person" element={<FirstPerson />} />
        <Route path="/second-person" element={<SecondPerson />} />
      </Route>
    </Routes>
  </BrowserRouter>
);