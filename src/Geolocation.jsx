import { useEffect, useState } from 'react'

export default function handler() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      },
      (error) => {
        console.error('Erro ao pegar localização:', error)
      }
    )
  }, [])

  return location
}
