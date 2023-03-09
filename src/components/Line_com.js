import React from 'react';
import { Line } from '@ant-design/plots';

// var data = [
//   { year: '1991', value: 3 },
//   { year: '1992', value: 4 },
//   { year: '1993', value: 3.5 },
//   { year: '1994', value: 5 },
//   { year: '1995', value: 4.9 },
//   { year: '1996', value: 6 },
//   { year: '1997', value: 7 },
//   { year: '1998', value: 9 },
//   { year: '1999', value: 13 },
// ];
class Line_com extends React.Component {
  constructor(props) {
    super(props)
    // this.AddData = this.AddData.bind(this)
    // this.SetData = this.SetData.bind(this)
    this.state = {
      data:[],
      xField: 'time',
      yField: 'height',
      point: {
        size: 0,
      },
      animation: false
    }
  }
  static getDerivedStateFromProps(props, state) {
    try {
      if (props.data.line !== state.data.line) {
        if (props.data.updatetype === "set") {
          return {
            data: props.data.line
          }
        }
        else if (props.data.updatetype === "add") {
          let d = [...state.data,...props.data.line].sort((a,b)=>a.time>b.time?1:-1)
          return {
            data : d
          }
        }
      }
    } catch (e) {
      console.log(e)
    }
  }
  // AddData(data) {
  //   tmp.push(data)
  // }
  // SetData(data) {
  //   console.log(data)
  // }
  render() {
    return (
      <div className='Plot Line components' style={this.props.style}>
        <Line {...this.state} />
        {/* <button onClick={this.refreshdata.bind(this)}>CLick to Refresh</button>
        <button onClick={this.fetchdata.bind(this)}>Auto Refresh</button> */}
      </div>
    )
  }

}

export default Line_com;