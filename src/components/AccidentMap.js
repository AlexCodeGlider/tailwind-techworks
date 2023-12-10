import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import data from '../assets/data/accident_map.json';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './AccidentMap.css';

function GliderAviationSafety() {
    const defaultIcon = L.icon({
        iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', // URL of the generic location icon
        iconSize: [15, 15],
    });

    return (
        <MapContainer 
            center={[39.50, -98.35]} 
            zoom={4} 
            style={{ height: "100vh", width: "100%" }}
            whenCreated={mapInstance => mapInstance.invalidateSize()}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map((item, index) => (
                item.cm_Latitude && item.cm_Longitude && (
                    <Marker key={index} position={[item.cm_Latitude, item.cm_Longitude]} icon={defaultIcon}>
                        <Popup>
                            {item.cm_highestInjury}
                        </Popup>
                    </Marker>
                )
            ))}
        </MapContainer>
    );
}

export default GliderAviationSafety;