import { useEffect, useState } from 'react'
import { AdvancedMarker, Polyline, useMap } from '@vis.gl/react-google-maps'

export default function Rotas({ destino }) {
  const map = useMap()

  const [origem, setOrigem] = useState(null)
  const [rota, setRota] = useState([])
  const [destinoCoords, setDestinoCoords] = useState(null)
  const [distancia, setDistancia] = useState('')
  const [duracao, setDuracao] = useState('')

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error('Geolocalização não suportada')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const localAtual = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }

        console.log('Precisão (metros):', position.coords.accuracy)
        console.log('Localização:', localAtual)

        setOrigem(localAtual)
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
    if (!origem || !destino || !map) return

    async function calcularRota() {
      try {
        const directionsService = new google.maps.DirectionsService()

        const resultado = await directionsService.route({
          origin: origem,
          destination: destino,
          travelMode: google.maps.TravelMode.WALKING
        })

        const leg = resultado.routes[0].legs[0]

        const rotaPath = resultado.routes[0].overview_path.map((point) => ({
          lat: point.lat(),
          lng: point.lng()
        }))

        const destinoFinal = leg.end_location

        setDestinoCoords({
          lat: destinoFinal.lat(),
          lng: destinoFinal.lng()
        })

        setRota(rotaPath)

        map.fitBounds(resultado.routes[0].bounds)

        setDistancia(leg.distance.text)
        setDuracao(leg.duration.text)
      } catch (error) {
        console.error('Erro ao calcular rota:', error)
      }
    }

    calcularRota()
  }, [origem, destino, map])

  return (
    <>
      {distancia && (
        <div className='absolute top-2 left-2 z-10 rounded-lg bg-white p-3 shadow-md'>
          <p>
            <strong>Distância:</strong> {distancia}
          </p>

          <p>
            <strong>Tempo:</strong> {duracao}
          </p>
        </div>
      )}

      {origem && <AdvancedMarker position={origem} />}

      {destinoCoords && <AdvancedMarker position={destinoCoords} />}

      {rota.length > 0 && <Polyline path={rota} />}
    </>
  )
}
