import { useState } from "react"
import { bazares } from "./bazares.js"
import { Destaque } from "./Home"
import { useNavigate } from "react-router-dom"
import { Search, MoveLeft } from "lucide-react"

export default function Bazares() {
    const navigate = useNavigate()
    const [listaDeBazares, setListaDeBazares] = useState(bazares)

    function removeAccents(str) {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }

    return (
        <div className="min-h-screen pt-3 pl-5 flex flex-col gap-5  min-w-screen">

            <div className="flex items-center justify-between md:pr-10">
                <button
                    onClick={() => navigate("/")}
                    className="bg-red-400 text-white h-11 mpx-4 flex items-center gap-2 cursor-pointer w-60z md:justify-center md:text-lg sm:text-sm rounded"
                >
                    <MoveLeft size={28} />
                    Voltar
                </button>

                <h1 className="md:text-3xl sm:text-sm text-red-400 flex items-right flex-none">
                    Todos os Bazares
                </h1>
            </div>

            <div className="flex flex-row justify-center pt-5 focus:overflow-hidden ">

                <div>
                    <input
                        type="text"
                        placeholder="Pesquise"
                        className="h-10  w-64 md:w-100 border border-red-400 rounded-lg text-center focus:border-red-600 focus:outline-none pr-10 mr-3 hover:h-10"
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
                <div className="pt-2">
                    <Search
                        size={22}
                        color="#ff6467"
                    />
                </div>
            </div>

            <div className="flex flex-wrap gap-6 cursor-pointer mt-5 ml-10 focus:flex-none focus:fixed">
                {listaDeBazares.map((bazar) => (
                    <div
                        key={bazar.id}
                        onClick={() => navigate(`/bazar/${bazar.id}`)}
                        className="transition-transform duration-300 transform hover:-translate-y-2"
                    >
                        <Destaque
                            img={bazar.img}
                            titulo={bazar.titulo}
                            descricao={bazar.descricao}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}
