import abasc from "./assets/abasc.png"
import { useNavigate } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from "react";
import { galeria } from "./galeria";

export function Informacoes({ bazar, img }) {
    return (
        <div className="text-2xl flex flex-col items-center gap-8">
            <img src={img} alt="" className="h-[250px] w-[250px] object-cover" />
            <h2 >{bazar.titulo}</h2>
            <ul className="text-xl">
                <li>Endereço: {bazar.endereco}</li>
                <li>Horários: {bazar.horarios}</li>
                <li>Contatos {bazar.contatos}</li>
            </ul>
            <div>Galeria de Fotos</div>
        </div>
    )
}
export default function Bazar() {
    const navigate = useNavigate()
    const [listaFotos, setListaDeFotos] = useState(galeria)

    const bazar = {
        titulo: "Bazar da Abasc",
        endereco: "Alameda Cabral 47",
        horarios: "Seg a sex das 9 s 17",
        contatos: "11977317756",
    }
    return (
        
        <div className="min-h-screen pt-5 pl-5 border border-red-400 w-1/2 flexjustify-center">
             <button onClick={() => navigate("/bazares/")}
                    className="bg-red-400 text-white h-11 px-4 flex items-center gap-2 cursor-pointer md:w-60 md:justify-center md:text-lg">
                    Voltar
                </button>
            <div>
                <Informacoes bazar={bazar} img={abasc}></Informacoes>
            </div>
            
        </div>

    )
}
