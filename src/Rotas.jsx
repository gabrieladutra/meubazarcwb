import { Polyline } from '@vis.gl/react-google-maps'
import { useEffect, useState } from 'react'

function Rotas({ userLocation, bazarLocation }) {
  const [routePath, setRoutePath] = useState([])
  const [duration, setDuration] = useState(null)

  useEffect(() => {
    async function calcularRota() {
      try {
        const directionsService = new google.maps.DirectionsService()

        const result = await directionsService.route({
          origin: userLocation,
          destination: bazarLocation,
          travelMode: google.maps.TravelMode.WALKING
        })

        if (result.routes?.length > 0) {
          const route = result.routes[0]

          setDuration(route.legs[0].duration.text)

          const path = route.overview_path.map((point) => ({
            lat: point.lat(),
            lng: point.lng()
          }))

          setRoutePath(path)
        }
      } catch (error) {
        console.error('Erro ao calcular rota:', error)
      }
    }

    if (userLocation && bazarLocation) {
      calcularRota()
    }
  }, [userLocation, bazarLocation])

  return (
    <>
      {routePath.length > 0 && <Polyline path={routePath} />}

      {duration && <div className='absolute top-2 left-2 rounded bg-white p-2 shadow'>Tempo a pé: {duration}</div>}
    </>
  )
}

export default Rotas
