import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import Rotas from './Rotas'

export default function Mapa({ origem, destino }) {
  if (!origem || !destino) {
    return <p>Carregando mapa...</p>
  }

  return (
    <APIProvider apiKey={'AIzaSyD8HBqH4YmdiKH20eK-NnH9VNMisawXR6E'}>
      <Map
        defaultCenter={origem}
        defaultZoom={15}
        gestureHandling='greedy'
        fullscreenControl={false}
        style={{
          width: '100%',
          height: '400px'
        }}>
        <Marker position={origem} />
        <Marker position={destino} />

        <Rotas origem={origem} destino={destino} />
      </Map>
    </APIProvider>
  )
}
