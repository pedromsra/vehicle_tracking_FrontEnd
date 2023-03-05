import React from 'react'
import { GoogleMap, LoadScript, Polyline, Marker } from '@react-google-maps/api';
import { getCenter, getPathLength } from "geolib";

import theme from "../../styles/theme"

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: "2rem"
};

const onLoad = (polyline) => {
    console.log('polyline: ', polyline)
};

const onLoadMarker = (marker) => {
    console.log('marker: ', marker)
};

function MyComponent({paths, pathsColor, markersInit, markersFinal, zoom, markersInitIcon, markersFinalIcon}) {
    let centerContainer = []
    let zoomMaxContainer = {lat: -90, lng: -180}
    let zoomMinContainer = {lat: 90, lng: 180}
    let zoomContainer
    
    paths && paths.forEach(path => {
        path.forEach(pat => {
            centerContainer.push(pat)
            if(pat.lat < zoomMinContainer.lat){
                zoomMinContainer.lat = pat.lat
            }
            if(pat.lat > zoomMaxContainer.lat){
                zoomMaxContainer.lat = pat.lat
            }
            if(pat.lng < zoomMinContainer.lng){
                zoomMinContainer.lng = pat.lng
            }
            if(pat.lng > zoomMaxContainer.lng){
                zoomMaxContainer.lng = pat.lng
            }
        })
    })

    markersInit && markersInit.forEach(mark => {
        centerContainer.push(mark)
        if(mark.lat < zoomMinContainer.lat){
            zoomMinContainer.lat = mark.lat
        }
        if(mark.lat > zoomMaxContainer.lat){
            zoomMaxContainer.lat = mark.lat
        }
        if(mark.lng < zoomMinContainer.lng){
            zoomMinContainer.lng = mark.lng
        }
        if(mark.lng > zoomMaxContainer.lng){
            zoomMaxContainer.lng = mark.lng
        }
    })

    zoomContainer = [zoomMaxContainer, zoomMinContainer]

    const myZoom = 40075/getPathLength(zoomContainer)

    var GLOBE_WIDTH = 256; // a constant in Google's map projection
    var west = zoomMinContainer.lng;
    var east = zoomMaxContainer.lng;
    var angle = east - west;
    if (angle < 0) {
        angle += 360;
    }
    var calczoom = (Math.log(((725+1008)/2) * 360 / angle / GLOBE_WIDTH) / Math.LN2)-3;

    const myCalculatedCenter = getCenter(centerContainer)
    const myCenter = {lat: myCalculatedCenter.latitude, lng: myCalculatedCenter.longitude}

    const options = {
        strokeColor: pathsColor ? pathsColor : theme.COLORS.secondary,
        strokeOpacity: 0.8,
        strokeWeight: 5,
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        zIndex: 1
    };

    const myOptions = {
        disableDefaultUI: true,
    }


    return (
    <LoadScript
        googleMapsApiKey="AIzaSyBq0hGuUOIkahRznQojlHs2V_kCLaobxJ0"
    >
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={myCenter}
        zoom={calczoom}
        options={myOptions}
        >
        {paths && paths.map((path, index) => <Polyline
            onLoad={onLoad}
            key={index}
            path={path}
            options={options}
        />)}
        {markersInit && markersInit.map( (mark, index) => <Marker
                onLoad={onLoadMarker}
                key={index}
                position={mark}
                icon={markersInitIcon}
        />)}
        {markersFinal && markersFinal.map( (mark, index) => <Marker
                onLoad={onLoadMarker}
                key={index}
                position={mark}
                icon={markersFinalIcon}
        />)}
        <></>
        </GoogleMap>
    </LoadScript>
    )
}

export default React.memo(MyComponent)