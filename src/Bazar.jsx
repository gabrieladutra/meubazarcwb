import { useNavigate } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useParams } from 'react-router-dom'
import { bazares } from './bazares'
import { MoveLeft } from 'lucide-react'

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
    <div className='flex flex-col items-center gap-8 text-2xl'>
      <img
        src={bazar.img}
        alt={bazar.titulo}
        className='h-[250px] w-[250px] rounded-lg object-cover shadow-md'
      />

      <h2 className='text-3xl font-semibold text-red-400'>{bazar.titulo}</h2>

      <ul className='text-left text-xl'>
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

      <div className='w-full max-w-2xl'>
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
                className='h-[250px] w-full max-w-[400px] rounded-lg object-cover shadow-lg'
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

  return (
    <div className='flex min-h-screen flex-col items-center px-4 pt-5'>
      <div className='mb-6 flex w-full max-w-4xl justify-start'>
        <button
          onClick={() => navigate('/bazares')}
          className='flex h-11 cursor-pointer items-center gap-2 rounded-md bg-red-400 px-6 text-center text-white transition hover:bg-red-500'>
          <MoveLeft size={28} />
          Voltar
        </button>
      </div>
      <Informacoes bazar={bazar} />
    </div>
  )
}
