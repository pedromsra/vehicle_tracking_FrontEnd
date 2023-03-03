import React from 'react'
import { GoogleMap, LoadScript, Polyline, Marker } from '@react-google-maps/api';

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

    function MyComponent({path, location, center, zoom, markIcon}) {

    const options = {
        strokeColor: theme.COLORS.secondary,
        strokeOpacity: 0.8,
        strokeWeight: 5,
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        path: path,
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
        center={center}
        zoom={zoom}
        options={myOptions}
        >
        {path && path.map((pat, index) => <Polyline
            onLoad={onLoad}
            key={index}
            path={pat}
            options={options}
        />)}
        {location && location.map( (loc, index) => <Marker
                onLoad={onLoadMarker}
                key={index}
                position={loc}
                icon={markIcon}
        />)}
        <></>
        </GoogleMap>
    </LoadScript>
    )
}

export default React.memo(MyComponent)