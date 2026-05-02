import { APIProvider, Map } from '@vis.gl/react-google-maps'
import Rotas from './Rotas'

export default function Mapa({ bazar, apiKey }) {
  if (!bazar?.descricao) {
    return <p>Endereço não encontrado.</p>
  }

  return (
    <APIProvider apiKey={apiKey}>
      <Map defaultZoom={18} defaultCenter={{ lat: -25.4284, lng: -49.2733 }} mapId='bazar-map' className='h-[400px] w-full rounded-lg'>
        <Rotas destino={bazar.descricao} />
      </Map>
    </APIProvider>
  )
}
