import { useNavigate, useParams } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { bazares } from './bazares'
import { MoveLeft } from 'lucide-react'
import Mapa from './Mapa'

export function Informacoes({ bazar, apiKey }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
    }
  }

  return (
    <div className='flex max-w-80 flex-col items-center gap-2 text-sm md:max-w-7xl md:gap-8 md:text-2xl'>
      <img src={bazar.img} alt={bazar.titulo} className='h-64 w-64 rounded-lg bg-white object-contain shadow-md' />

      <h2 className='max-w-md text-sm font-semibold text-red-400 md:text-2xl'>{bazar.titulo}</h2>

      <ul className='max-w-md pl-4 text-left text-sm md:text-xl'>
        <li>
          <strong>Endereço:</strong> {bazar.descricao}
        </li>

        <li className='wrap-break-words leading-relaxed'>
          <strong>Horários:</strong> {bazar.horarios}
        </li>

        <li>
          <strong>Contatos:</strong> {bazar.contatos}
        </li>
      </ul>

      <button
        onClick={() => window.open(bazar.saibaMais, '_blank', 'noopener,noreferrer')}
        className='cursor-pointer rounded-md border-red-400 px-4 py-1 text-base text-red-400 transition hover:border-2'>
        Saiba Mais
      </button>

      <div className='w-full sm:max-w-80 md:max-w-2xl'>
        <h2 className='mb-2 text-center text-2xl'>Galeria de Fotos</h2>

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          transitionDuration={500}
          swipeable
          draggable
          showDots
          containerClass='w-full'
          itemClass='px-2'>
          {bazar.fotos?.map((foto, index) => (
            <div key={foto} className='flex justify-center'>
              <img src={foto} alt={`foto-${index}`} className='h-62.5 w-full max-w-100 rounded-lg bg-white object-contain shadow-lg' />
            </div>
          ))}
        </Carousel>
      </div>

      <div className='mt-2 min-h-100 w-full'>
        <Mapa bazar={bazar} apiKey={apiKey} />
      </div>
    </div>
  )
}

export default function Bazar() {
  const navigate = useNavigate()
  const { id } = useParams()

  const bazar = bazares.find((b) => b.id === Number(id))

  // API do DEPLOY
  //const apiKey = 'AIzaSyCIg9VmxBetV38F3Xg-g7s0lh3J359MRlI'

  const apiKey = 'AIzaSyD8HBqH4YmdiKH20eK-NnH9VNMisawXR6E'

  if (!bazar) {
    return <h1>Bazar não encontrado</h1>
  }

  return (
    <div className='flex min-h-screen flex-col items-center px-4 pt-5'>
      <div className='mb-6 flex w-full justify-center md:max-w-2xl md:justify-start'>
        <button
          onClick={() => navigate('/bazares')}
          className='ml-0 flex h-11 cursor-pointer items-center gap-2 rounded-md bg-red-400 px-6 text-white transition hover:bg-red-500 md:ml-10'>
          <MoveLeft size={28} />
          Voltar
        </button>
      </div>

      <Informacoes bazar={bazar} apiKey={apiKey} />
    </div>
  )
}
