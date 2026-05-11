import { useEffect, useState } from 'react'
import { CarFront, Bus, Footprints } from 'lucide-react'
import { AdvancedMarker, Polyline, useMap } from '@vis.gl/react-google-maps'

export default function Rotas({ destino }) {
  const map = useMap()

  const [origem, setOrigem] = useState(null)
  const [rota, setRota] = useState([])
  const [destinoCoords, setDestinoCoords] = useState(null)

  const [distancia, setDistancia] = useState('')
  const [tempoWalking, setTempoWalking] = useState('')
  const [tempoDriving, setTempoDriving] = useState('')
  const [tempoTransit, setTempoTransit] = useState('')

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error('Geolocalização não suportada')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setOrigem({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      },
      (error) => {
        console.error('Erro ao obter localização:', error)
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
      }
    )
  }, [])

  useEffect(() => {
    if (!origem || !destino || !map || !window.google) return

    async function calcularRotas() {
      try {
        const directionsService = new google.maps.DirectionsService()

        const [walking, driving, transit] = await Promise.all([
          directionsService.route({
            origin: origem,
            destination: destino,
            travelMode: google.maps.TravelMode.WALKING
          }),

          directionsService.route({
            origin: origem,
            destination: destino,
            travelMode: google.maps.TravelMode.DRIVING
          }),

          directionsService.route({
            origin: origem,
            destination: destino,
            travelMode: google.maps.TravelMode.TRANSIT
          })
        ])

        // rota exibida no mapa (walking)
        const rotaPath = walking.routes[0].overview_path.map((point) => ({
          lat: point.lat(),
          lng: point.lng()
        }))

        const destinoFinal = walking.routes[0].legs[0].end_location

        setDestinoCoords({
          lat: destinoFinal.lat(),
          lng: destinoFinal.lng()
        })

        setRota(rotaPath)

        map.fitBounds(walking.routes[0].bounds)

        // distância
        setDistancia(walking.routes[0].legs[0].distance.text)

        // tempos
        setTempoWalking(walking.routes[0].legs[0].duration.text)
        setTempoDriving(driving.routes[0].legs[0].duration.text)
        setTempoTransit(transit.routes[0].legs[0].duration.text)
      } catch (error) {
        console.error('Erro ao calcular rotas:', error)
      }
    }

    calcularRotas()
  }, [origem, destino, map])

  const trajetoApe = `https://www.google.com/maps/dir/?api=1&origin=${origem}&destination=${destino}&travelmode=walking`
  const trajetoCarro = `https://www.google.com/maps/dir/?api=1&origin=${origem}&destination=${destino}&travelmode=driving`
  const trajetoOnibus = `https://www.google.com/maps/dir/?api=1&origin=${origem}&destination=${destino}&travelmode=transit`

  return (
    <>
      {distancia && (
        <div className='flex flex-wrap items-center gap-4 sm:text-xs md:text-lg'>
          <button className='flex h-10 cursor-pointer items-center gap-2 rounded bg-red-400 px-4 text-white'>
            <strong>Distância:</strong> {distancia}
          </button>

          <button onClick={() => window.open(trajetoApe, '_blank')} className='flex h-10 cursor-pointer items-center gap-2 rounded bg-red-400 px-4 text-white'>
            <Footprints />
            {tempoWalking}
          </button>

          <button
            onClick={() => window.open(trajetoCarro, '_blank')}
            className='flex h-10 cursor-pointer items-center gap-2 rounded bg-red-400 px-4 text-white'>
            <CarFront />
            {tempoDriving}
          </button>

          <button
            onClick={() => window.open(trajetoOnibus, '_blank')}
            className='flex h-10 cursor-pointer items-center gap-2 rounded bg-red-400 px-4 text-white'>
            <Bus /> {tempoTransit}
          </button>
        </div>
      )}

      {origem && <AdvancedMarker position={origem} />}

      {destinoCoords && <AdvancedMarker position={destinoCoords} />}

      {rota.length > 0 && <Polyline path={rota} />}
    </>
  )
}
