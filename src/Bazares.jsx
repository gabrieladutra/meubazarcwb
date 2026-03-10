import { useState } from "react"
import { bazares } from "./bazares.js"
import { Destaque } from "./Home"
import { useNavigate } from "react-router-dom"
import { Search, MoveLeft } from "lucide-react"

export default function Bazares() {
    const navigate = useNavigate()
    const [listaDeBazares, setListaDeBazares] = useState(bazares)

    return (
        <div className="min-h-screen pt-3 pl-5 flex flex-col gap-5">

            <div className="flex flex-row gap-20">
                <button onClick={() => navigate("/")}
                    className="bg-red-400 text-white h-11  flex items-center gap-2 cursor-pointer md:w-60 md:justify-center md:text-lg">
                        <MoveLeft size={28}/>
                    Voltar
                </button>
                <h1 className="text-3xl text-red-400 ml-120">
                    Todos os Bazares
                </h1>
            </div>

            <div className="flex flex-row justify-center pt-5">
                <input type="text" placeholder="Pesquise" className="h-10 w-100 border border-red-400 rounded-lg flex text-center focus:border-red-600 focus:outline-none" onChange={(event) => {
                    console.log("Evento: ", event.target.value)
                    const listaDeBazaresPesquisada = bazares.filter((bazar) => {
                        function removeAccents(str) {
                            return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                        }
                        return (bazar.titulo.includes(event.target.value) || bazar.titulo.toUpperCase().includes(event.target.value) || bazar.titulo.toLowerCase().includes(event.target.value) || bazar.titulo.includes(removeAccents(event.target.value)))
                    })
                    setListaDeBazares(listaDeBazaresPesquisada)
                    console.log(listaDeBazaresPesquisada)
                }}>

                </input>
                <Search size={28} color="#ff6467" />
            </div>

            <div className="flex flex-wrap gap-6 cursor-pointer mt-5 ml-10" onClick={() => navigate("/bazar/")}>
                {listaDeBazares.map((bazar) => (
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