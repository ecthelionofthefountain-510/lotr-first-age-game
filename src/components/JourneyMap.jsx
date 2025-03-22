// src/components/JourneyMap.jsx

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { characterRoutes } from '../data/characterRoutes';

const characterThumbnails = {
  Beren: "/assets/miniatures/beren-mini.png",
  Túrin: "/assets/miniatures/turin-mini.png",
  Fingolfin: "/assets/miniatures/fingolfin-mini.png",
  Ecthelion: "/assets/miniatures/ecthelion-mini.png",
  Tuor: "/assets/miniatures/tuor-mini.png",
  Azaghal: "/assets/miniatures/azaghal-mini.png",
  Húrin: "/assets/miniatures/hurin-mini.png",
  Eönwë: "/assets/miniatures/eonwe-mini.png",
  Lúthien: "/assets/miniatures/luthien-mini.png",
  Thingol: "/assets/miniatures/thingol-mini.png",
  Fëanor: "/assets/miniatures/feanor-mini.png",
  Melian: "/assets/miniatures/melian-mini.png",
};

const JourneyMap = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [currentRoute, setCurrentRoute] = useState(null);
  const characters = Object.keys(characterRoutes);

  useEffect(() => {
    if (!mapRef.current || map) return;
  
    const ardaImg = new Image();
    ardaImg.src = '/arda.jpeg'; // Bilden ska ligga i /public
  
    ardaImg.onload = () => {
      const width = ardaImg.width;
      const height = ardaImg.height;
  
      const imageBounds = [[0, 0], [1600, 3000]];
  
      const leafletMap = L.map(mapRef.current, {
        crs: L.CRS.Simple,
        minZoom: -1,
        maxZoom: 2,
        zoomControl: true,
      });
  
      L.imageOverlay('/arda.jpeg', imageBounds).addTo(leafletMap);
      leafletMap.fitBounds(imageBounds);
      setMap(leafletMap);
  
      leafletMap.on('click', function (e) {
        const { lat, lng } = e.latlng;
        console.log(`Clicked at: [${lat.toFixed(1)}, ${lng.toFixed(1)}]`);
      });
    };
  }, []);

  const showRoute = (character) => {
    if (!map) return;

    if (currentRoute) {
      map.removeLayer(currentRoute.polyline);
      currentRoute.markers.forEach(marker => map.removeLayer(marker));
    }

    const routeData = characterRoutes[character];
    const { path, color } = routeData;

    const drawnCoords = [];
    const markers = [];
    let step = 0;

    const drawNextStep = () => {
      if (step >= path.length) return;

      const { coords, name } = path[step];
      drawnCoords.push(coords);

      const polyline = L.polyline(drawnCoords, {
        color: color || 'red',
        weight: 4,
      }).addTo(map);

      const circle = L.circleMarker(coords, {
        radius: 6,
        color: color || 'red',
        fillColor: color || 'red',
        fillOpacity: 0.8,
      }).addTo(map);

      if (name) {
        circle.bindPopup(name).openPopup();
      }

      markers.push(circle);
      if (currentRoute) {
        map.removeLayer(currentRoute.polyline);
      }
      setCurrentRoute({ polyline, markers });

      step++;
      setTimeout(drawNextStep, 1000);
    };

    drawNextStep();
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '220px', padding: '1rem', background: '#1a1a1a' }}>
        <h1 style={{ color: 'white' }}>Characters</h1>
        {characters.map((char) => (
          <button
            key={char}
            onClick={() => showRoute(char)}
            style={{
              display: 'flex',
              // justifyContent: 'space-evenly',
              alignItems: 'center',
              margin: '0.5rem 0',
              background: 'none',
              border: '1px solid #d4af37',
              borderRadius: '20px',
              cursor: 'pointer',
              padding: '0.5rem',
              width: '100%',
              textAlign: 'left',
            }}
          >
            <img
              src={characterThumbnails[char]}
              alt={char}
              style={{
                width: '30px',
                height: '30px',
                objectFit: 'cover',
                borderRadius: '50%',
                marginRight: '0.5rem',
                border: '1px solid #ccc'
              }}
            />
            <span style={{ fontSize: '1rem', color: '#fff' }}>
              {char.charAt(0).toUpperCase() + char.slice(1)}
            </span>
          </button>
        ))}
      </div>
      <div
        ref={mapRef}
        style={{ width: '100%', height: '100vh', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default JourneyMap;
