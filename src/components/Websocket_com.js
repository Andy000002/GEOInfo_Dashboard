import { Component } from 'react'

class WebSocket_com extends Component {
    constructor(props) {
        super(props)
        this.Connectws = this.Connectws.bind(this)
        this.Sendmsg = this.Sendmsg.bind(this)
    }
    Connectws() {
        this.ws = new WebSocket('ws://localhost:8765')
        this.ws.onopen = () => {
            console.log('connected ws')
            this.ws.send('Hello')
        }
        this.ws.onmessage = (e) => {
            const msg = JSON.parse(e.data)
            console.log("RCV msg:",msg)
        }
    }
    Sendmsg(){
        console.log(this.Textvalue)
        this.ws.send(String(this.Textvalue))
    }
    componentWillUnmount() {
        console.log('closed ws')
        this.ws.close()
    }
    render() {
        return (
            <>
            <button onClick={this.Connectws}>Connect</button>
            <input  onChange={(e)=>{this.Textvalue = e.target.value}} />
            <button onClick={this.Sendmsg}>Send</button>
            </>
        )
    }
}
export default WebSocket_com