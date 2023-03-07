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
    Center: [22.997094, 120.213153],
    Zoom: 15,
    LineOptions: {
        color: '#FF0033'
    }
}
//Polyline範例
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
    }
    render() {
        return (

            <div id='map'style={{
                position:'absolute',
                width:500,
                height:500,
                top:0,
                left:0,
                zIndex:10000
            }} >
                <MapContainer
                    center={config.Center}
                    zoom={config.Zoom}
                    scrollWheelZoom={true}
                    style={{ width: 500, height: 500 }}
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
                    <Polyline pathOptions={config.LineOptions} positions={demo} />
                </MapContainer>
            </div>
        )
    }
}
export default Map_com