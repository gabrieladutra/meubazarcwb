import amigos from './assets/amigos.png'
import nina from './assets/nina.jpg'
import amizade from './assets/amizade.jpeg'
import { useNavigate } from 'react-router-dom'

export function Destaque({ onClick, img, titulo, descricao }) {
  return (
    <div
      onClick={onClick}
      className='shadow-grey-100/30 flex h-80 w-full max-w-75 min-w-75 flex-col items-center justify-center rounded-xl bg-white p-2 text-black shadow-xl/30 shadow-md ring-2 ring-red-400/10 transition-transform duration-300 hover:-translate-y-2 sm:w-67.5 md:min-w-70'>
      <img src={img} alt={titulo} className='h-50 w-full rounded-md bg-white object-contain' />
      <h3 className='line-clamp-2 text-center text-red-400'>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const destaque1 = {
    titulo: 'Bazar Desapega Amigos do HC',
    descricao: 'Avenida Agostinho Leão Junior, 336 - Alto da Glória'
  }
  const destaque2 = {
    titulo: 'Bazar da Amizade - Hospital Pequeno Cotolengo',
    descricao: ' Rua José Gonçalves Júnior, 140, Campo Comprido'
  }
  const destaque3 = {
    titulo: 'Bazar Nina APACN',
    descricao: 'R. Rua Ubaldino do Amaral, 22 - Alto da Glória'
  }
  return (
    <>
      <div className='flex h-dvh w-full flex-col'>
        <div className='flex h-1/3 flex-col items-center justify-between text-red-400 md:justify-center'>
          <h1 className='text-semibold mt-2 text-4xl md:mt-0'>MEU BAZAR CWB</h1>
          <p>Lista Completa de Bazares em Curitiba </p>
        </div>
        <div className='mt-2 flex items-center justify-center pb-5 text-2xl md:mt-0'>
          <h2>Destaques</h2>
        </div>
        <div className='flex w-full flex-col flex-wrap items-center justify-center gap-5 pt-5 sm:flex-row'>
          <Destaque onClick={() => navigate('/bazar/1')} img={amigos} titulo={destaque1.titulo} descricao={destaque1.descricao} />
          <Destaque onClick={() => navigate('/bazar/12')} img={amizade} titulo={destaque2.titulo} descricao={destaque2.descricao} />
          <Destaque onClick={() => navigate('/bazar/24')} img={nina} titulo={destaque3.titulo} descricao={destaque3.descricao} />
        </div>
        <div className='flex justify-center'>
          <button
            onClick={() => navigate('/bazares/')}
            className='mt-5 flex h-11 cursor-pointer items-center gap-2 bg-red-400 px-4 text-white md:mt-10 md:mb-8 md:w-60 md:justify-center md:text-lg'>
            Veja Mais
          </button>
        </div>
        <footer className='flex h-5 items-center text-center text-white'></footer>
      </div>
    </>
  )
}
