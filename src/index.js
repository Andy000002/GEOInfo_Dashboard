import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Line_com from './components/Line_com';
import Map_com from './components/Map_com';
import WebSocket_com from './components/Websocket_com';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  getdata(data) {
    this.setState({ data: data })
  }
  render() {
    return (
      <React.StrictMode>
        <div id='container' style={{ position: 'relative', display: "inline-block", margin: 30 }}>
          <div id="map_div" style={{ height: 500, width: 500,margin:"30px"}}>
            <Map_com style={{ width: 500, height: 500 }} data={this.state.data} />
          </div>
          {/* <Line_com style={{ position: "relative", width: 500, height: 500, float: "left", "background-color": "rgb(30, 30, 30)" }} /> */}
          <WebSocket_com style={{ height: 500, width: 500, color: "#fafafa"}} data={this.getdata.bind(this)} />
        </div>
      </React.StrictMode>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

