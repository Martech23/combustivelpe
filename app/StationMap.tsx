import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

type Point = { name: string; city: string; neighborhood: string; prices: Record<string, number> };
const coordinates: Record<string, [number, number]> = { "Posto Boa Viagem": [-8.119, -34.9], "Posto Avenida Norte": [-8.035, -34.895], "Posto Casa Forte": [-8.034, -34.924], "Posto Olinda": [-7.987, -34.842], "Posto Piedade": [-8.165, -34.917], "Posto Caruaru": [-8.278, -35.973] };
function Recenter({ position }: { position: [number, number] | null }) { const map = useMap(); useEffect(() => { if (position) map.setView(position, 13); }, [map, position]); return null; }
export default function StationMap({ stations, fuel, position }: { stations: Point[]; fuel: string; position: [number, number] | null }) {
  return <MapContainer center={[-8.06, -34.91]} zoom={10} scrollWheelZoom={false} className="map-container"><TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/><Recenter position={position}/>{stations.map(s => <CircleMarker key={s.name} center={coordinates[s.name]} radius={9} pathOptions={{ color: "#fff", weight: 3, fillColor: "#ed633f", fillOpacity: 1 }}><Popup><strong>{s.name}</strong><br/>{s.neighborhood}, {s.city}<br/>{fuel}: R$ {s.prices[fuel].toFixed(2).replace(".", ",")}<br/><small>Local e preço de exemplo</small></Popup></CircleMarker>)}{position && <CircleMarker center={position} radius={9} pathOptions={{ color: "white", weight: 3, fillColor: "#2672d9", fillOpacity: 1 }}><Popup>Sua localização aproximada</Popup></CircleMarker>}</MapContainer>;
}
