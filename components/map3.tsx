// components/MapComponent.js
// @ts-nocheck

import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const MapComponent = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={"pk.eyJ1IjoiYnJhbmRlbi1kdXBvbnQiLCJhIjoiY2x5Z21oZWZmMDE4eDJrbjM5N3Rlb3N0cCJ9.c2RlqXh58b3eYU_9pDq_1A"}
      onViewportChange={(viewport) => setViewport(viewport)}
      mapStyle="mapbox://styles/branden-dupont/ckt0h6w5800vb18qq9lniiuoc"
    >
      {/* Example Marker */}
      <Marker
        latitude={37.7577}
        longitude={-122.4376}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <div style={{ cursor: 'pointer' }} onClick={() => setSelectedMarker(true)}>
          <img src="/marker.png" alt="Marker" />
        </div>
      </Marker>

      {/* Example Popup */}
      {selectedMarker && (
        <Popup
          latitude={37.7577}
          longitude={-122.4376}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setSelectedMarker(null)}
        >
          <div>
            <h3>San Francisco</h3>
            <p>A wonderful city!</p>
          </div>
        </Popup>
      )}
    </ReactMapGL>
  );
};

export default MapComponent;
