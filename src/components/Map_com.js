import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup,
    Polyline
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Component } from 'react';
import { demo } from './result'

//地圖參數
const config = {
    Center: [22.9969, 120.2135],
    Zoom: 15,
    LineOptions: {
        color: '#FF0033'
    }
}
// Polyline example
const multiPolyline = [
    [
        [24.78239285977, 121.0259281332],
        [22.998, 120.212],
        [22.999, 120.213],
    ],
    [
        [22.993, 120.200],
        [22.992, 120.210],
        [22.991, 120.215],
    ],
]

class Map_com extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            map: [],
            height: [],
            time: []
        }
        this.SetData = this.SetData.bind(this)
        this.AddData = this.AddData.bind(this)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        nextProps = JSON.parse(nextProps.data)
        console.log(nextProps)
        if (nextProps.data !== this.state.data && nextProps.data !== []) {
            if (nextProps.updatetype === "set") {
                this.SetData(nextProps.data)
            }
            else if (nextProps.updatetype === "add") {
                this.AddData(nextProps.data)
            }
        }
    }
    SetData(data) {
        console.log('123')
    }

    AddData(data) {
        let map = this.state.map, height = this.state.height, time = this.state.time
        data.forEach(element => {
            time.push(element[0])
            map.push([element[1].toFixed(4), element[2].toFixed(4)])
            height.push(element[3])
        });
        this.setState({ data: data, map: map, time: time, height: height })
        console.log("last pos : ",this.state.map[this.state.map.length - 1])
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