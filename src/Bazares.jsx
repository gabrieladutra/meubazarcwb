import { useState } from "react"
import { bazares } from "./bazares.js"
import { Destaque } from "./Home"
import { useNavigate } from "react-router-dom"

export default function Bazares() {
    const navigate = useNavigate()
    const [listaDeBazares, setListaDeBazares] = useState(bazares)

    return (
        <div className="min-h-screen pt-5 pl-5">

            <div>
                <button onClick={() => navigate("/")}
                    className="bg-red-400 text-white h-11 px-4 flex items-center gap-2 cursor-pointer md:w-60 md:justify-center md:text-lg">
                    Voltar
                </button>
                <h1 className="text-3xl text-red-400">
                    Todos os Bazares
                </h1>
            </div>

            <div>
                <input type="text" className="h-10 w-20" onChange={(event) => {
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
            </div>

            <div className="flex flex-wrap gap-6 cursor-pointer" onClick={() => navigate("/bazar/")}>
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