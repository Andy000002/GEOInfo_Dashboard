import {
    MapContainer,
    TileLayer,
    Polyline
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Component } from 'react';

//地圖參數
const config = {
    Center: [24.8082, 120.9832],
    Zoom: 15,
    LineOptions: {
        color: '#FF0033'
    }
}

class Map_com extends Component {
    constructor(props) {
        super(props)
        this.state = {
            map: [],
            time: []
        }
        this.SetData = this.SetData.bind(this)
        this.AddData = this.AddData.bind(this)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {// Props onchange
        try {
            if (nextProps.data.updatetype === "set") {
                this.SetData(nextProps.data)
            }
            else if (nextProps.data.updatetype === "add") {
                this.AddData(nextProps.data)
            }
        } catch (e) {
            console.log(e)
        }


    }
    SetData(data) {
        try {
            this.setState({ map: [data.map], time: data.time })
            console.log(this.state.map[0])
        } catch (e) {
            console.log(e)
        }

    }

    AddData(data) {
        try {
            this.setState({
                map: [
                    ...this.state.map,
                    data.map
                ], time: [
                    ...this.state.time,
                    data.time]
            })
            // console.log(this.state.map)
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div id='map' className='components' style={{
                position: 'absolute',
                // width: 500,
                // height: 500,
                // top: '15px',
                // left: '15px',
                zIndex: 10000
            }} >
                <MapContainer
                    // center={config.Center}
                    center={this.state.map.length === 0 ? config.Center : this.state.map[-1]}
                    zoom={config.Zoom}
                    scrollWheelZoom={true}
                    style={this.props.style}
                >
                    <TileLayer
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {/* <Marker position={[22.997094, 120.213153]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker> */}
                    <Polyline pathOptions={config.LineOptions} positions={[this.state.map]} />
                </MapContainer>
            </div>
        )
    }
}
export default Map_com