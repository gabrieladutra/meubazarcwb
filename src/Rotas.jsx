import { Polyline, useMap, useMapsLibrary } from '@vis.gl/react-google-maps'
import { useEffect, useState } from 'react'

function Rotas({ bazarLocation }) {
  const map = useMap()
  const routesLibrary = useMapsLibrary('routes')
  const geometryLibrary = useMapsLibrary('geometry')

  const [routePath, setRoutePath] = useState([])
  const [duration, setDuration] = useState(null)

  useEffect(() => {
    if (!map || !routesLibrary || !geometryLibrary || !bazarLocation) return

    const routeService = new routesLibrary.Route()

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const result = await routeService.computeRoutes({
            origin: {
              location: {
                latLng: {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                }
              }
            },
            destination: {
              location: {
                latLng: {
                  lat: bazarLocation.lat,
                  lng: bazarLocation.lng
                }
              }
            },
            travelMode: 'WALK',
            fields: ['routes.duration', 'routes.polyline.encodedPolyline']
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
      }
    )
  }, [map, routesLibrary, geometryLibrary, bazarLocation])

  return (
    <>
      {routePath.length > 0 && <Polyline path={routePath} />}

      {duration && <div className='absolute top-2 left-2 rounded bg-white p-2 shadow'>Tempo a pé: {duration}</div>}
    </>
  )
}

export default Rotas
