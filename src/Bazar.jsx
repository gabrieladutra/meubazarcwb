import { useNavigate } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useParams } from 'react-router-dom'
import { bazares } from './bazares'
import { MoveLeft } from 'lucide-react'
import { APIProvider, Map } from '@vis.gl/react-google-maps'

export function Mapa({ key, position }) {
  return (
    <APIProvider apiKey={key}>
      <div style={{ height: '100vh', width: '100%' }}>
        <Map defaultCenter={position} defaultZoom={13} />
      </div>
    </APIProvider>
  )
}
export function Informacoes({ bazar }) {
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
    <div className='flex max-w-80 flex-col items-center gap-2 overflow-hidden text-sm md:max-w-xl md:gap-8 md:text-2xl'>
      <img
        src={bazar.img}
        alt={bazar.titulo}
        className='h-62.5 w-62.5 rounded-lg bg-white object-contain shadow-md'
      />

      <h2 className='text-sm font-semibold text-red-400 md:text-3xl'>{bazar.titulo}</h2>

      <ul className='pl-4 text-left text-sm text-wrap md:pl-0 md:text-xl'>
        <li>
          <strong>Endereço:</strong> {bazar.descricao}
        </li>
        <li>
          <strong>Horários:</strong> {bazar.horarios}
        </li>
        <li>
          <strong>Contatos:</strong> {bazar.contatos}
        </li>
      </ul>
      <button
        onClick={() => window.open(bazar.saibaMais, '_blank')}
        className='cursor-pointer rounded-md border-red-400 px-4 py-1 text-base text-red-400 transition hover:border-2'>
        Saiba Mais
      </button>

      <div className='w-full sm:max-w-80 md:max-w-2xl'>
        <h2 className='mb-4 text-center text-2xl'>Galeria de Fotos</h2>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          swipeable={true}
          draggable={true}
          showDots={true}
          containerClass='w-full'
          itemClass='px-2'>
          {bazar.fotos?.map((foto, index) => (
            <div key={index} className='flex justify-center'>
              <img
                src={foto}
                alt={`foto-${index}`}
                className='h-[250px] w-full max-w-[400px] rounded-lg bg-white object-contain shadow-lg'
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default function Bazar() {
  const navigate = useNavigate()
  const parametros = useParams()

  const idConvertido = Number(parametros.id)

  const bazar = bazares.find(function (bazarAtual) {
    return bazarAtual.id === idConvertido
  })

  if (!bazar) {
    return <h1>Bazar não encontrado</h1>
  }

  const position = { lat: -25.4284, lng: -49.2733 }
  const key = 'AIzaSyBLIlHjPWXQcffy0GLm8TCmXd2aFeB8tXI'

  return (
    <div className='flex min-h-screen flex-col items-center px-4 pt-5'>
      <div className='md:max-h-md max-h-sm mb-6 flex w-full justify-start md:max-w-2xl'>
        <button
          onClick={() => navigate('/bazares')}
          className='ml-10 flex h-11 cursor-pointer items-center gap-2 rounded-md bg-red-400 px-6 text-center text-white transition hover:bg-red-500 md:ml-0'>
          <MoveLeft size={28} />
          Voltar
        </button>
      </div>
      <Informacoes bazar={bazar} />
      <Mapa key={key} />
    </div>
  )
}
