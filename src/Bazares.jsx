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
        <div className="min-h-screen pt-3 pl-5 flex flex-col gap-5 focus:flex-none focus:fixed focus:overflow-hidden">

            <div className="flex items-center justify-between pr-10 ">
                <button
                    onClick={() => navigate("/")}
                    className="bg-red-400 text-white h-11 px-4 flex items-center gap-2 cursor-pointer md:w-60 md:justify-center md:text-lg rounded"
                >
                    <MoveLeft size={28} />
                    Voltar
                </button>

                <h1 className="text-3xl text-red-400 flex items-right flex-none">
                    Todos os Bazares
                </h1>
            </div>

            <div className="flex justify-center pt-5 focus:overflow-hidden">
                <div>

                    <input
                        type="text"
                        placeholder="Pesquise"
                        className="h-10 w-100 border border-red-400 rounded-lg text-center focus:border-red-600 focus:outline-none pr-10"
                        onChange={(event) => {

                            const valorBusca = removeAccents(event.target.value.toLowerCase())

                            const listaDeBazaresPesquisada = bazares.filter((bazar) => {
                                const titulo = removeAccents(bazar.titulo.toLowerCase())
                                return titulo.includes(valorBusca)
                            })

                            setListaDeBazares(listaDeBazaresPesquisada)
                        }}
                    />

                    <Search
                        size={20}
                        color="#ff6467"
                        className="absolute right-3 top-1/2 -translate-y-1/2"
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
