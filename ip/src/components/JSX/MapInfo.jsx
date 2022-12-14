import React from 'react';
import '../SCSS/MapInfo.scss';
import { MapContainer, TileLayer, useMap, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "../../assets/icon-location.svg"
import {Icon} from 'leaflet'



export default function MapInfo(props) {
    const lat = props.ipInfo.location.lat;
    const lng = props.ipInfo.location.lng;
    // change the map view to the location
    const ChangeView = ({ center, zoom }) => {
        const map = useMap();
        map.setView(center, zoom);
        return null;
    }
    // console.log(lat, lng);
    return (
        <div className='map'>
            <MapContainer center={[lat, lng]} zoom={20} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lng]} icon={new Icon({iconUrl: markerIconPng, iconSize: [40, 50], iconAnchor: [12, 41]})} />
                <ChangeView center={[lat, lng]} zoom={20} />
            </MapContainer>
        </div>
    )
}
