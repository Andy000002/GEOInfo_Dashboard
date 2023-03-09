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
      rawdata: [],
      map: [],
      time: [],
      height: [],
      line:[],
      updatetype: "add"
    }
  }
  ParseData(rawdata) {
    try {
      let parseddata = JSON.parse(rawdata)
      let map = [], time = [], height = [], line = []
      parseddata.data.forEach(element => {
        let map_el = [], time_el = [], height_el = []
        element.forEach(element => {
          time_el.push(element[0])
          map_el.push([element[1], element[2]])
          height_el.push(element[3])
          line.push({time:element[0],height:element[3]})
        })
        map.push(map_el)
        time.push(time_el)
        height.push(height)
      });
      this.setState({
        rawdata: rawdata,
        map: map,
        time: time,
        height: height,
        line:line,
        updatetype: parseddata.updatetype
      },)
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <React.StrictMode>
        <div id='container' style={{ position: 'relative', display: "inline-block", margin: 30 }}>
          <div id="map_div" style={{ height: 500, width: 500, margin: "0px",float:"left" }}>
            <Map_com data={this.state} style={{ width: 500, height: 500 }} />
          </div>
          <Line_com data={this.state} style={{ position: "relative", width: 500, height: 500, float: "left", "background-color": "rgb(30, 30, 30)" }} />
          <WebSocket_com style={{ height: 500, width: 500, color: "#fafafa" }} data={this.ParseData.bind(this)} />
        </div>
      </React.StrictMode>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

