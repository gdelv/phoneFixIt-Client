import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

function Map(props) {
    // console.log("these are the props",props);
    
        return (
                <GoogleMap 
                    defaultZoom={18} 
                    defaultCenter={{ lat: Number(props.latitude), lng: Number(props.longitude) }} 
                />
        )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
// map wont take my process.env variable to hide API key
export default function MapContainer(props) {
    // console.log("other props",props);
    
    return (
        <div>
   {/* { console.log(process.env.REACT_APP_GOOGLE_KEY)} */}
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyD63dGGtUjYEShHODqZyH8PPvJppU_TN-4&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: "300px"}} />}
                containerElement={<div style={{ height: "300px"}} />}
                mapElement={<div style={{ height: "300px"}} />}
                latitude={props.latitude}
                longitude={props.longitude}
            />
        </div>
    )
}

