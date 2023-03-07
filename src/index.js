import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Line_com from './components/Line_com';
import Bar_com from './components/Bar_com';
import Map_com from './components/Map_com';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id='container' style={{position:'relative',width:500,height:500}}>
      {/* <Line_com />
    <Bar_com /> */}
      <Map_com />
      <Line_com style={{left:"510px",position:"absolute",width:"300px",height:"300px"}} />
    </div>
  </React.StrictMode>
);

