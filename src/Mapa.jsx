import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import { useEffect, useState } from 'react'

export default function Mapa({ apiKey, position }) {
  const [userLocation, setUserLocation] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          })
        },
        (error) => {
          console.log('Erro ao pegar localização:', error)
        }
      )
    }
  }, [])

  return (
    <APIProvider apiKey={apiKey}>
      <div className='h-75 w-full overflow-hidden rounded-lg'>
        <Map defaultCenter={position} defaultZoom={14} />
      </div>
    </APIProvider>
  )
}
