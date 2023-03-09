import { Component } from 'react'

// 接收格式:
//
//  {
//      "updatatype":"set"/"add",            //   新資料 or 疊加
//      data:[                               //   [ [[時間, 緯度, 經度, 高度]...], ]
//          [                                //   第一筆
//           [64444 ,24.003, 121.123, 60],
//           [64445 ,24.003, 121.123, 61],
//           ...
//           [64446 ,24.003, 121.123, 62]
//          ],
//          [                                //   第二筆
//           [64444 ,24.003, 121.123, 60],
//           [64445 ,24.003, 121.123, 61],
//           ...
//           [64446 ,24.003, 121.123, 62]],
//          ]
//      ]
//  }

const labelcss = {
    display: 'inline-block',
    width: '150px',
    'text-align': 'right'
}

class WebSocket_com extends Component {
    constructor(props) {
        super(props)
        this.Connectws = this.Connectws.bind(this)
        this.Sendmsg = this.Sendmsg.bind(this)
    }
    Connectws() {
        this.ws = new WebSocket('ws://localhost:8765')
        this.ws.onopen = () => {
            console.log('ws connected')
            this.ws.send('Hello')
        }
        this.ws.onmessage = (e) => {
            // console.log(this.props.data)
            // console.log("RCV raw msg:", e.data)
            this.props.data(e.data)
        }
    }
    Sendmsg(msg) {
        // console.log("Send: ", this.Textvalue)
        this.ws.send(String(msg))
    }
    componentWillUnmount() {
        console.log('ws closed')
        this.Sendmsg('close')
    }
    render() {
        return (
            <div className="components" style={this.props.style}>
                <label style={labelcss}>Server IP : </label>
                <input onChange={(e) => { this.url = e.target.value }} placeholder="ws://host:port" defaultValue={"ws://localhost:8765"} />
                <button onClick={this.Connectws}>Connect</button>
                <button onClick={()=>{this.Sendmsg('close')}}>Close</button>
                <br></br>
                {/* <label style={labelcss}>Message : </label>
                <input onChange={this.Sendmsg(e.target.value) } defaultValue={"Hi!"} />
                <button onClick={this.Sendmsg}>Send</button> */}
                <label style={labelcss} ></label>
                <button onClick={() => { this.Sendmsg('start') }} style={{"margin-left":"172.6px"}}>Start</button>
                <button onClick={() => { this.Sendmsg('stop') }}>Stop</button>
            </div>
        )
    }
}
export default WebSocket_com