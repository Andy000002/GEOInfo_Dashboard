import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Line_com from './components/Line_com';
import Bar_com from './components/Bar_com';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Line_com />
    <Bar_com />
  </React.StrictMode>
);

