import { useEffect } from 'react'
import { useMap } from '@vis.gl/react-google-maps'

export default function Rotas({ origem, destino }) {
  const map = useMap()

  useEffect(() => {
    if (!map || !origem || !destino) return

    async function calcularRota() {
      try {
        const directionsService = new google.maps.DirectionsService()

        const directionsRenderer = new google.maps.DirectionsRenderer({
          suppressMarkers: true
        })

        directionsRenderer.setMap(map)

        const resultado = await directionsService.route({
          origin: origem,
          destination: destino,
          travelMode: google.maps.TravelMode.WALKING
        })

        directionsRenderer.setDirections(resultado)

        const rota = resultado.routes[0].legs[0]

        console.log('Distância:', rota.distance.text)
        console.log('Duração:', rota.duration.text)
      } catch (error) {
        console.error('Erro ao calcular rota:', error)
      }
    }

    calcularRota()
  }, [map, origem, destino])

  return null
}
