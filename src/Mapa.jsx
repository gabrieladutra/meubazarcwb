import { APIProvider, Map, Marker, useMapsLibrary, useMap } from '@vis.gl/react-google-maps'
import { useEffect, useState } from 'react'

export function getRoutes() {
  const map = useMap()
  const routesLibrary = useMapsLibrary('routes')
  const [routes, setRoutes] = useState(null)

  useEffect(() => {
    if (!routesLibrary || !map) return

    setRoutes(new routesLibrary.DirectionsService())
  }, [routesLibrary, map])

  return routes
}

export default function Mapa({ apiKey }) {
  const center = {
    lat: 0,
    lng: 0
  }
  const [userLocation, setUserLocation] = useState(center)

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log('Erro de geolocation')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }

        setUserLocation(pos)
      },
      (error) => {
        console.log('Erro ao pegar localização:', error)
      },
      {}
    )
  }, [])

  return (
    <APIProvider apiKey={apiKey}>
      <div className='h-[300px] w-full overflow-hidden rounded-lg'>
        <Map defaultCenter={userLocation} defaultZoom={17}>
          <Marker position={userLocation} />
        </Map>
      </div>
    </APIProvider>
  )
}
