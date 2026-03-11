import { useNavigate } from "react-router-dom"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { useState } from "react"
import { galeria } from "./galeria"
import { useParams } from "react-router-dom"
import { bazares } from "./bazares"
import { MoveLeft } from "lucide-react"

export function Informacoes({ bazar, img, fotos }) {

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
    <div className="text-2xl flex flex-col items-center gap-8">

      <img
        src={img}
        alt={bazar.titulo}
        className="h-[250px] w-[250px] object-cover rounded-lg shadow-md"
      />

      <h2 className="text-3xl text-red-400 font-semibold">
        {bazar.titulo}
      </h2>

      <ul className="text-xl text-center">
        <li><strong>Endereço:</strong> {bazar.descricao}</li>
        <li><strong>Horários:</strong> {bazar.horarios}</li>
        <li><strong>Contatos:</strong> {bazar.contatos}</li>
      </ul>

      <div className="w-full max-w-2xl">
        <h2 className="text-2xl mb-4 text-center">Galeria de Fotos</h2>

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
          containerClass="w-full"
          itemClass="px-2"
        >
          {fotos.map((foto, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={foto}
                alt={`foto-${index}`}
                className="h-[250px] w-full max-w-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>))}
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
    <div className="min-h-screen flex flex-col items-center pt-5 px-4">

      <div className="w-full max-w-4xl flex justify-start mb-6">
        <button
          onClick={() => navigate("/bazares")}
          className="bg-red-400 text-white h-11 px-6  gap-2 flex items-center cursor-pointer rounded-md hover:bg-red-500 transition text-center"
        >
          <MoveLeft size={28} />
          Voltar
        </button>
      </div>
      <Informacoes
        bazar={bazar}
        img={bazar.img}
        fotos={bazar.fotos}
      />

    </div>
  )
}