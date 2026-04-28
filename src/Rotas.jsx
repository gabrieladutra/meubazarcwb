import { Polyline, useMap, useMapsLibrary } from '@vis.gl/react-google-maps'
import { useEffect, useState } from 'react'

function Rotas({ bazarLocation }) {
  const map = useMap()
  const routesLibrary = useMapsLibrary('routes')

  const [routePath, setRoutePath] = useState([])
  const [duration, setDuration] = useState(null)

  useEffect(() => {
    if (!map || !routesLibrary || !bazarLocation) return

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const result = await routesLibrary.Route.computeRoutes({
            origin: {
              location: {
                latLng: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude
                }
              }
            },
            destination: {
              location: {
                latLng: {
                  latitude: bazarLocation.lat,
                  longitude: bazarLocation.lng
                }
              }
            },
            travelMode: google.maps.TravelMode.WALKING,
            fields: ['routes.duration', 'routes.polyline']
          })

          if (result.routes?.length > 0) {
            const route = result.routes[0]

            setDuration(route.duration)

            const decodedPath = google.maps.geometry.encoding.decodePath(route.polyline.encodedPolyline)

            const path = decodedPath.map((point) => ({
              lat: point.lat(),
              lng: point.lng()
            }))

            setRoutePath(path)
          }
        } catch (error) {
          console.error('Erro ao calcular rota:', error)
        }
      },
      (error) => {
        console.error('Erro ao pegar geolocalização:', error)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    )
  }, [map, routesLibrary, bazarLocation])

  return (
    <>
      {routePath.length > 0 && <Polyline path={routePath} />}

      {duration && <div className='absolute top-2 left-2 rounded bg-white p-2 shadow'>Tempo a pé: {duration}</div>}
    </>
  )
}

export default Rotas
