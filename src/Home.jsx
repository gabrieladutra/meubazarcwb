import abibe from "./assets/abibe.jpg"
import perpetuo from "./assets/perpetuo.jpg"
import divino from "./assets/divino.jpeg"
import { useNavigate } from "react-router-dom"


export function Destaque({ img, titulo, descricao }) {
    return (
        <div className="h-80 w-64 border border-red-400 text-black p-2">
            <img src={img} alt={titulo} className="h-[200px] w-full object-cover" />
            <h3 className="text-red-400">{titulo}</h3>
            <p>{descricao}</p>
        </div>
    )
}

export default function Home() {
    const navigate = useNavigate()
    const destaque1 = {
        "titulo": "Bazar Abibe Isfer",
        "descricao": "Alameda Cabral, 275 - Centro, Curitiba - PR, 80410-210"
    }
    const destaque2 = {
        "titulo": "Bazar Perpétuo Socorro",
        "descricao": "Rua Ivo Leão, 220"
    }
    const destaque3 = {
        "titulo": "Bazar Divino Espírito Santo",
        "descricao": "R. Mateus Leme, 1855 - Bom Retiro, Curitiba - PR, 80520-174"
    }
    return (
        <>
            <div className="w-full h-screen flex flex-col">

                <div className="h-1/2 flex items-center justify-center">
                    <h1 className="text-4xl text-red-400 text-semibold">MEU BAZAR CWB</h1>
                </div>

                <div className="flex justify-center items-center text-2xl"><h2>Destaques</h2></div>
                <div  onClick={() => navigate("/bazar/")} className="h-1/3 w-full flex items-center justify-center gap-5 cursor-pointer">
                    <Destaque  img={abibe} titulo={destaque1.titulo} descricao={destaque1.descricao} />
                    <Destaque img={perpetuo} titulo={destaque2.titulo} descricao={destaque2.descricao} />
                    <Destaque img={divino} titulo={destaque3.titulo} descricao={destaque3.descricao} />
                </div>
                <div className="flex justify-center">
                    <button onClick={() => navigate("/bazares/")}
                    className="bg-red-400 text-white h-11 px-4 flex items-center gap-2 cursor-pointer mt-5 md:mb-8 md:mt-10 md:w-60 md:justify-center md:text-lg">
                    Veja Mais
                </button>

                </div>
                
            </div>
        </>
    )
}