import React from 'react';
import { Line } from '@ant-design/plots';

var data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];
class Line_com extends React.Component {
  constructor(props) {
    super(props)
    this.SetData = this.SetData.bind(this)
    this.AddData = this.AddData.bind(this)
    this.fakedata = {
      year: 2000,
      value: 10,
      auto: 0
    }
    this.state = {
      config: {
        data,
        xField: 'year',
        yField: 'value',
        point: {
          size: 5,
          shape: 'diamond',
        },
        animation: false
      }
    }
  }
  SetData(file) {
    console.log('...')
  }
  AddData(file) {
    console.log(file)
    let tmp = this.state.config.data
    tmp.push(file)
    this.setState(prevState => ({
      config: {
        ...prevState.config,
        data: tmp
      }
    }))
  }
  //fake button
  // refreshdata() {
  //   this.fakedata.year += 1;
  //   this.AddData({ year: String(this.fakedata.year), value: Math.round(Math.random() * 100) })
  // }

  // fetchdata() {
  //   if (this.fakedata.auto == 0) {
  //     this.fakedata.auto = 1
  //     this.SI = setInterval(
  //       () => {
  //         this.fakedata.year += 1;
  //         this.AddData({ year: String(this.fakedata.year), value: Math.round(Math.random() * 100) })
  //       }, 1)
  //   }
  //   else {
  //     clearInterval(this.SI)
  //     this.fakedata.auto = 0
  //   }
  // }
  //fakebutton

  render() {
    return (
      <div className='Plot Line' style={this.props.style}>
        <Line {...this.state.config} />
        {/* <button onClick={this.refreshdata.bind(this)}>CLick to Refresh</button>
        <button onClick={this.fetchdata.bind(this)}>Auto Refresh</button> */}
      </div>
    )
  }

}

export default Line_com;