import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import { useEffect, useState } from 'react'
import Rotas from './Rotas'

export default function Mapa({ apiKey, bazar }) {
  const [userLocation, setUserLocation] = useState(null)

  useEffect(() => {
    if (!navigator.geolocation) return

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      },
      (error) => {
        console.error(error)
      }
    )
  }, [])

  if (!userLocation) {
    return <p>Carregando mapa...</p>
  }

  const bazarLocation = {
    lat: bazar.lat,
    lng: bazar.lng
  }

  return (
    <APIProvider apiKey={apiKey} libraries={['routes', 'geometry']}>
      <div className='relative h-[300px] w-full overflow-hidden rounded-lg'>
        <Map defaultCenter={userLocation} defaultZoom={14}>
          <Marker position={userLocation} />
          <Marker position={bazarLocation} />
          <Rotas bazarLocation={bazarLocation} />
        </Map>
      </div>
    </APIProvider>
  )
}
