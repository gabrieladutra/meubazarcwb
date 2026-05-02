import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import Rotas from './Rotas'

export default function Mapa({ origem, destino }) {
  if (!origem || !destino) {
    return <p>Carregando mapa...</p>
  }

  const origemFormatada = {
    lat: Number(origem.latitude),
    lng: Number(origem.longitude)
  }

  const destinoFormatado = {
    lat: Number(destino.latitude),
    lng: Number(destino.longitude)
  }

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        defaultCenter={origemFormatada}
        defaultZoom={15}
        style={{
          width: '100%',
          height: '400px'
        }}>
        <Marker position={origemFormatada} />
        <Marker position={destinoFormatado} />

        <Rotas origem={origemFormatada} destino={destinoFormatado} />
      </Map>
    </APIProvider>
  )
}
