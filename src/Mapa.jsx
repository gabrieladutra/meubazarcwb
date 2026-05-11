import { APIProvider, Map } from '@vis.gl/react-google-maps'
import Rotas from './Rotas'

export default function Mapa({ bazar, apiKey }) {
  if (!bazar?.descricao) {
    return <p>Endereço não encontrado.</p>
  }

  return (
    <APIProvider apiKey={apiKey}>
      <Rotas destino={bazar.descricao} />
      <Map defaultZoom={18} defaultCenter={{ lat: -25.4284, lng: -49.2733 }} mapId='bazar-map' className='h-100 w-full rounded-lg'></Map>
    </APIProvider>
  )
}
