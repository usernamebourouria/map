import './App.css';
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
function App() {
  let position = [51, -0.9]
  let temper = null
  let rssi= null
  return (
    <div className="App">
      <MapContainer center={position} zoom={20} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
          <br />
           tempertaure : {temper}
           <br />
           rssi : {rssi}
           <br />
           ...
           <br />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
let DefaultIcon = L.icon({
  iconUrl: '/iconss.png',
  iconSize: [20, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;
export default App;
