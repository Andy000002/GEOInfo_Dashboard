import React, { Component } from 'react';
import { Bar } from '@ant-design/plots';
import './components.css'
import JsonFileUpload from './JsonFileUpload';
import Websocket_com from './Websocket_com'

const data = [
  {
    year: '1951 年',
    value: 38,
  },
  {
    year: '1952 年',
    value: 52,
  },
  {
    year: '1956 年',
    value: 61,
  },
  {
    year: '1957 年',
    value: 145,
  },
  {
    year: '1958 年',
    value: 48,
  },
];

class Bar_com extends Component {
  constructor(props) {
    super(props)
    this.SetData = this.SetData.bind(this)
    this.state = {
      config: {
        data,
        xField: 'value',
        yField: 'year',
        seriesField: 'year',
        legend: {
          position: 'top-left',
        },
      }
    }
  }
  SetData(file) {
    // console.log(file[0])
    this.setState(prevState => ({
      config: {
        ...prevState.config,
        data: file
      }
    }))

  }

  GetReq() {
    fetch("http://localhost:5000/",{method:"GET"})
      .then(res => {res.json()}) /*把request json化*/
      .then(data => {
        console.log(data)
        /*接到request data後要做的事情*/
      })
      .catch((e) => {
        console.log(e)
        /*發生錯誤時要做的事情*/
      })
  }

  render() {
    return (
      <div>
        <div className='Plot Bar'><Bar {...this.state.config} /></div>
        {/* <JsonFileUpload AddData={this.SetData} /> */}
        {/* <button onClick={this.GetReq.bind(this)}> GET REQUEST </button> */}
        {/* <Websocket_com /> */}
      </div >
    )
  }
}

export default Bar_com;

