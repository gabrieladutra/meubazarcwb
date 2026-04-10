import amigos from "./assets/amigos.png"
import nina from "./assets/nina.jpg"
import amizade from "./assets/amizade.jpeg"
import { useNavigate } from "react-router-dom"
import {Informacoes} from "./Bazar.jsx"

export function Destaque({onClick, img, titulo, descricao }) {
    return (
        <div onClick={onClick} className="w-full max-w-[300px] sm:w-68 px-2 shadow-xl/30 shadow-grey-100/30 ring-8 ring-red-400/10 rounded-lg focus:outline-4 transition-transform duration-300 transform hover:-translate-y-6 text-black p-2 flex flex-col items-center justify-center">
            <img src={img} alt={titulo} className="h-[200px] w-full object-cover" />
            <h3 className="text-red-400">{titulo}</h3>
            <p>{descricao}</p>
        </div>
    )
}

export default function Home() {
    const navigate = useNavigate()
    const destaque1 = {
        "titulo": "Bazar Desapega Amigos do HC",
        "descricao": "Avenida Agostinho Leão Junior, 336 - Alto da Glória"
    }
    const destaque2 = {
        "titulo": "Bazar da Amizade - Hospital Pequeno Cotolengo",
        "descricao": " Rua José Gonçalves Júnior, 140, Campo Comprido"
    }
    const destaque3 = {
        "titulo": "Bazar Nina APACN",
        "descricao": "R. Rua Ubaldino do Amaral, 22 - Alto da Glória"
    }
    return (
        <>
            <div className="w-full h-dvh flex flex-col">

                <div className="h-1/3 flex flex-col  items-center justify-center text-red-400">
                    <h1 className="text-4xl  text-semibold">MEU BAZAR CWB</h1>
                    <p>Lista Completa de Bazares em Curitiba </p>
                </div>
                 <div className="flex justify-center items-center text-2xl mt-0 pb-5 "><h2>Destaques</h2></div>
                <div className="w-full flex flex-col sm:flex-row flex-wrap items-center justify-center gap-5 pt-5">
                    <Destaque onClick={() => navigate("/bazar/1")} img={amigos} titulo={destaque1.titulo} descricao={destaque1.descricao} />
                    <Destaque onClick={() => navigate("/bazar/12")}img={amizade} titulo={destaque2.titulo} descricao={destaque2.descricao} />
                    <Destaque onClick={() => navigate("/bazar/24")}img={nina} titulo={destaque3.titulo} descricao={destaque3.descricao} />
                </div>
                <div className="flex justify-center">
                    <button onClick={() => navigate("/bazares/")}
                        className="bg-red-400 text-white h-11 px-4 flex items-center gap-2 cursor-pointer mt-5 md:mb-8 md:mt-10 md:w-60 md:justify-center md:text-lg mmt-5">
                        Veja Mais
                    </button>

                </div>
                <footer className="h-5 text-white flex text-center items-center"></footer>

            </div>
        </>
    )
}