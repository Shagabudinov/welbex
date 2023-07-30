import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Background from './Background';
import "./Responsive.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Background />
  </React.StrictMode>
);

