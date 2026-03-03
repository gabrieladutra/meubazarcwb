import { bazares } from "./bazares.js"
import { Destaque } from "./Home"
import { useNavigate } from "react-router-dom"

export default function Bazares() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen p-10">

            <button onClick={() => navigate("/")}
                className="bg-red-400 text-white h-11 px-4 flex items-center gap-2 cursor-pointer mt-5 md:mb-8 md:mt-10 md:w-60 md:justify-center md:text-lg">
                Voltar
            </button>
            <h1 className="text-3xl text-red-400 mb-10">
                Todos os Bazares
            </h1>

            <div className="flex flex-wrap gap-6">
                {bazares.map((bazar) => (
                    <Destaque
                        key={bazar.id}
                        img={bazar.img}
                        titulo={bazar.titulo}
                        descricao={bazar.descricao}
                    />
                ))}
            </div>

        </div>
    )
}