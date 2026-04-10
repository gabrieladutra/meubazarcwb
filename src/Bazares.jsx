import { useState } from 'react'
import { bazares } from './bazares.js'
import { Destaque } from './Home'
import { useNavigate } from 'react-router-dom'
import { Search, MoveLeft } from 'lucide-react'

export default function Bazares() {
  const navigate = useNavigate()
  const [listaDeBazares, setListaDeBazares] = useState(bazares)

  function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  return (
    <div className='flex min-h-screen min-w-screen flex-col gap-5 pt-3 pl-5'>
      <div className='flex items-center justify-between md:pr-10'>
        <button
          onClick={() => navigate('/')}
          className='mpx-4 w-60z flex h-11 cursor-pointer items-center gap-2 rounded bg-red-400 text-white sm:text-sm md:justify-center md:text-lg'>
          <MoveLeft size={28} />
          Voltar
        </button>

        <h1 className='items-right flex flex-none text-red-400 sm:text-sm md:text-3xl'>
          Todos os Bazares
        </h1>
      </div>

      <div className='flex flex-row justify-center pt-5 focus:overflow-hidden'>
        <div>
          <input
            type='text'
            placeholder='Pesquise'
            className='mr-3 h-10 w-64 rounded-lg border border-red-400 pr-10 text-center hover:h-10 focus:border-red-600 focus:outline-none md:w-100'
            onChange={(event) => {
              const valorBusca = removeAccents(event.target.value.toLowerCase())

              const listaDeBazaresPesquisada = bazares.filter((bazar) => {
                const titulo = removeAccents(bazar.titulo.toLowerCase())
                return titulo.includes(valorBusca)
              })

              setListaDeBazares(listaDeBazaresPesquisada)
            }}
          />
        </div>
        <div className='pt-2'>
          <Search size={22} color='#ff6467' />
        </div>
      </div>

      <div className='mt-5 ml-10 flex cursor-pointer flex-wrap gap-6 focus:fixed focus:flex-none'>
        {listaDeBazares.map((bazar) => (
          <div
            key={bazar.id}
            onClick={() => navigate(`/bazar/${bazar.id}`)}
            className='transform transition-transform duration-300 hover:-translate-y-2'>
            <Destaque img={bazar.img} titulo={bazar.titulo} descricao={bazar.descricao} />
          </div>
        ))}
      </div>
    </div>
  )
}
