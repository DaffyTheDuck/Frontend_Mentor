import React from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import customMarker from '../assets/icon-arrow.svg';

export default function Map(props) {


    const location =[props.lat, props.lng];

    // change the map view automatically
    const ChangeMapView = (props) => {
        const map = useMap();
        map.setView(props.coords, 23);
        return null;
    }

    return (
        <MapContainer center={location} zoom={23} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Circle center={location} radius={50} color="blue" fillColor="blue" fillOpacity={0.5} /> */}
            <Marker position={location}>
            </Marker>
            <ChangeMapView coords={location} />
        </MapContainer>
    )
}
