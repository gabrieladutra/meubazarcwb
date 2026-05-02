import { useEffect, useState } from 'react'
import { AdvancedMarker, Polyline, useMap } from '@vis.gl/react-google-maps'

export default function Rotas({ destino }) {
  const map = useMap()

  const [origem, setOrigem] = useState(null)
  const [rota, setRota] = useState([])
  const [destinoCoords, setDestinoCoords] = useState(null)

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

        console.log('Localização usuário:', localAtual)

        setOrigem(localAtual)
      },
      (error) => {
        console.error('Erro ao obter localização:', error)
      },
      {
        enableHighAccuracy: true
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

        console.log('Distância:', leg.distance.text)
        console.log('Duração:', leg.duration.text)
      } catch (error) {
        console.error('Erro ao calcular rota:', error)
      }
    }

    calcularRota()
  }, [origem, destino, map])

  return (
    <>
      {origem && <AdvancedMarker position={origem} />}

      {destinoCoords && <AdvancedMarker position={destinoCoords} />}

      {rota.length > 0 && <Polyline path={rota} />}
    </>
  )
}
