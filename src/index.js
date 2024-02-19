import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Appv1 from './v1/App';
import Challenge from './challenge/Challenge';
import Challenge2 from './challenge2/Challenge2';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="v1/*" element={<Appv1 />} />
        <Route path="challenge/*" element={<Challenge />} />
        <Route path="challenge2/*" element={<Challenge2 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
