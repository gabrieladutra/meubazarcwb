import ceai from './assets/ceai.jpg'
import abasc from './assets/abasc.jpg'
import adfp from './assets/adfp.png'
import acridas from './assets/acridas.jpg'
import apae from './assets/apae.jpg'
import afece from './assets/afece.png'
import amizade from './assets/amizade.jpeg'
import caritas from './assets/caritas.jpg'
import ceefa from './assets/ceefa.png'
import cabide from './assets/cabide.jpg'
import divino from './assets/divino.jpg'
import guardalupe from './assets/guardalupe.png'
import hc from './assets/hc.png'
import maos from './assets/maos.jpeg'
import perpetuo from './assets/perpetuo.png'
import renal from './assets/renal.jpg'
import santissimo from './assets/santissimo.jpg'
import socorro from './assets/socorro1.jpg'
import provopar from './assets/provopar.jpg'
import solidario from './assets/solidario.jpg'
import nina from './assets/nina.jpg'
import moises from './assets/moises.png'
import alcance from './assets/alcance.jpeg'
import saoroque from './assets/saoroque.jpeg'

function carregarGaleria(pasta) {
  const todasImagens = import.meta.glob('./carrossel/**/*.{png,jpg,jpeg}', {
    eager: true
  })

  const fotos = Object.entries(todasImagens)
    .filter(function ([caminho]) {
      return caminho.includes('/carrossel/' + pasta + '/')
    })
    .map(function ([, imagem]) {
      return imagem.default
    })

  return fotos
}

export const bazares = [
  {
    id: 1,
    titulo: 'Bazar Desapega Amigos do HC',
    descricao: 'Avenida Agostinho Leão Junior, 336, Alto da Glória, Curitiba, PR, Brasil',
    img: hc,
    horarios: 'De segunda á sexta-feira, das 9h às 17h.',
    contatos: '(41) 98713-6516',
    saibaMais: 'https://www.amigosdohc.org.br/loja-2/',
    fotos: carregarGaleria('hc'),
    lat: -25.4216863,
    lng: -49.261734
  },
  {
    id: 2,
    titulo: 'Bazar Perpétuo Socorro',
    descricao: 'Rua Ivo Leão, 220, Alto da Glória, Curitiba, PR, Brasil',
    img: perpetuo,
    horarios: 'Ás quartas-feiras, das 8h às 17h ',
    contatos: '(41) 3253-2031',
    saibaMais: 'https://www.perpetuosocorro.org.br/pagina/bazar',
    fotos: carregarGaleria('perpetuo'),
    lat: -25.4194442,
    lng: -49.2625332
  },
  {
    id: 3,
    titulo: 'Bazar Divino Espírito Santo',
    descricao: 'Rua Mateus Leme, 1855, Bom Retiro, Curitiba, PR, Brasil',
    img: divino,
    horarios: 'Aos sábados das 8h às 12h',
    contatos: '(41) 3121-1754',
    saibaMais: 'https://www.facebook.com/pdescuritiba/',
    fotos: carregarGaleria('divino'),
    lat: -25.4110563,
    lng: -49.2719837
  },
  {
    id: 4,
    titulo: 'Bazar da Cáritas',
    descricao: 'Avenida Marechal Floriano Peixoto, 8520, Boqueirão, Curitiba, PR, Brasil',
    img: caritas,
    horarios: 'Datas esporádicas',
    contatos: '(41) 3039-7869',
    saibaMais: 'https://www.instagram.com/caritaspr/',
    fotos: carregarGaleria('caritas'),
    lat: -25.5006509,
    lng: -49.2383283
  },
  {
    id: 5,
    titulo: 'Bazar Solidário Acridas',
    descricao: 'Rua Eduardo Geronasso, 1782, Bacacheri, Curitiba, PR, Brasil',
    img: acridas,
    horarios: 'Segunda á sexta-feira',
    contatos: '(41) 98835-5238',
    saibaMais: 'https://www.instagram.com/acridasoficial/',
    fotos: carregarGaleria('acridas'),
    lat: -25.3875366,
    lng: -49.2314107
  },
  {
    id: 6,
    titulo: 'Bazar Santuário Nossa Sra. de Guadalupe',
    descricao: 'Praça Senador Correia, 128, Centro, Curitiba, PR, Brasil',
    img: guardalupe,
    horarios: 'Segunda á sexta-feira',
    contatos: '(41) 3233-4884',
    saibaMais: 'https://santuarioguadalupe.com.br/',
    fotos: carregarGaleria('guardalupe'),
    lat: -25.4323965,
    lng: -49.2644023
  },
  {
    id: 7,
    titulo: 'Bazar do Santíssimo',
    descricao: 'Rua Leôncio Correia, 381, Água Verde, Curitiba, PR, Brasil',
    img: santissimo,
    horarios: 'Terças e quintas',
    contatos: '(41) 9324-2556',
    saibaMais: 'https://www.instagram.com/bazardosantissimo/',
    fotos: carregarGaleria('santissimo'),
    lat: -25.4518,
    lng: -49.29378
  },
  {
    id: 8,
    titulo: 'Bazar AFECE',
    descricao: 'Rua Paulo Turkiewicz, 316, Tarumã, Curitiba, PR, Brasil',
    img: afece,
    horarios: 'Terça à sexta',
    contatos: '(41) 3366-5212',
    saibaMais: 'https://afece.org.br/',
    fotos: carregarGaleria('afece'),
    lat: -25.4233817,
    lng: -49.2133693
  },
  {
    id: 9,
    titulo: 'Bazar Transformar',
    descricao: 'Rua Bento Viana, 1200, Batel, Curitiba, PR, Brasil',
    img: abasc,
    horarios: 'Quarta à sábado',
    contatos: '(41) 99825-0600',
    saibaMais: 'https://www.instagram.com/bazar.transformar/',
    fotos: carregarGaleria('abasc'),
    lat: -25.4422843,
    lng: -49.2846434
  },
  {
    id: 10,
    titulo: 'Bazar APAE Curitiba',
    descricao: 'Avenida Nossa Senhora da Paz, 1041, Boqueirão, Curitiba, PR, Brasil',
    img: apae,
    horarios: 'Seg, qua e sex',
    contatos: '(41) 99266-5857',
    saibaMais: 'https://www.instagram.com/bazarapaecuritiba/',
    fotos: carregarGaleria('apae'),
    lat: -25.5075205,
    lng: -49.2283466
  },
  {
    id: 11,
    titulo: 'Bazar Mãos que Valem',
    descricao: 'Rua Paulo Gorski, 1356, Mossunguê, Curitiba, PR, Brasil',
    img: maos,
    horarios: 'Segunda à sábado',
    contatos: '(41) 9915-3616',
    saibaMais: 'https://www.instagram.com/bazar.transformar/',
    fotos: carregarGaleria('maos'),
    lat: -25.4424305,
    lng: -49.3227962
  },
  {
    id: 12,
    titulo: 'Bazar da Amizade',
    descricao: 'Rua José Gonçalves Júnior, 140, Campo Comprido, Curitiba, PR, Brasil',
    img: amizade,
    horarios: 'Segunda à sábado',
    contatos: '(41) 3314-1900',
    saibaMais: 'https://www.pequenocotolengo.org.br/',
    fotos: carregarGaleria('amizade'),
    lat: -25.4650885,
    lng: -49.3271867
  },
  {
    id: 13,
    titulo: 'Bazar Abibe Isfer',
    descricao: 'Alameda Cabral, 275, Centro, Curitiba, PR, Brasil',
    img: ceai,
    horarios: 'Consultar',
    contatos: '(41) 99506-0013',
    saibaMais: 'https://www.instagram.com/abibeisfer/',
    fotos: carregarGaleria('ceai'),
    lat: -25.430639,
    lng: -49.2777836
  },
  {
    id: 14,
    titulo: 'Bazar CEEFA',
    descricao: 'Rua Prefeito Ângelo Ferrário Lopes, 1260, Alto da XV, Curitiba, PR, Brasil',
    img: ceefa,
    horarios: 'Consultar',
    contatos: '(41) 3264-2167',
    saibaMais: 'https://www.ceefa.org.br/',
    fotos: carregarGaleria('ceefa'),
    lat: -25.4237287,
    lng: -49.2429142
  },
  {
    id: 15,
    titulo: 'Bazar Pró-Renal',
    descricao: 'Avenida Vicente Machado, 2190, Batel, Curitiba, PR, Brasil',
    img: renal,
    horarios: 'Segunda à sexta',
    contatos: '(41) 3312-5415',
    saibaMais: 'https://www.instagram.com/bazarprorenal/',
    fotos: carregarGaleria('prorenal'),
    lat: -25.4408502,
    lng: -49.297311
  },
  {
    id: 16,
    titulo: 'Bazar PROVOPAR',
    descricao: 'Rua Hermes Fontes, 315, Batel, Curitiba, PR, Brasil',
    img: provopar,
    horarios: 'Segunda à sexta',
    contatos: '(41) 99540-3998',
    saibaMais: 'https://www.instagram.com/provopar.oficial/',
    fotos: carregarGaleria('provopar'),
    lat: -25.4433082,
    lng: -49.2926164
  },
  {
    id: 17,
    titulo: 'Bazar Grupo Solidário',
    descricao: 'Rua Gabriel Frecceiro de Miranda, 621, Xaxim, Curitiba, PR, Brasil',
    img: solidario,
    horarios: 'Consultar',
    contatos: '(41) 99751-2828',
    saibaMais: 'https://www.instagram.com/institutogruposolidario/',
    fotos: carregarGaleria('solidario'),
    lat: -25.502107,
    lng: -49.273077
  },
  {
    id: 18,
    titulo: 'Bazar Socorro aos Necessitados',
    descricao: 'Rua Konrad Adenauer, 576, Tarumã, Curitiba, PR, Brasil',
    img: socorro,
    horarios: 'Terça à sexta',
    contatos: '(41) 98898-2483',
    saibaMais: '',
    fotos: carregarGaleria('socorro'),
    lat: -25.4250043,
    lng: -49.2147635
  },
  {
    id: 19,
    titulo: 'Bazar Lar Moisés',
    descricao: 'Rua da Trindade, 1686, Cajuru, Curitiba, PR, Brasil',
    img: moises,
    horarios: 'Quinzenal',
    contatos: '(41) 3256-5587',
    saibaMais: 'https://larmoises.org/',
    fotos: carregarGaleria('moises'),
    lat: -25.4580734,
    lng: -49.20162
  },
  {
    id: 20,
    titulo: 'Bazar Alcance Social',
    descricao: 'Rua Tenente Miguel Afonso Ribeiro Cubas, 210, Capão Raso, Curitiba, PR, Brasil',
    img: alcance,
    horarios: 'Segunda à sexta',
    contatos: '(41) 99131-5925',
    saibaMais: 'https://www.instagram.com/achadinhos.dobazar/',
    fotos: carregarGaleria('alcance'),
    lat: -25.5011953,
    lng: -49.2936834
  },
  {
    id: 21,
    titulo: 'Bazar Associação São Roque',
    descricao: 'Rua Nicarágua, 2128, Bacacheri, Curitiba, PR, Brasil',
    img: saoroque,
    horarios: 'Terça e quinta',
    contatos: '(41) 99224-6944',
    saibaMais: 'https://www.instagram.com/bazarsaoroque/',
    fotos: carregarGaleria('saoroque'),
    lat: -25.3936518,
    lng: -49.2295171
  },
  {
    id: 22,
    titulo: 'Bazar ADFP',
    descricao: 'Rua XV de Novembro, 2765, Alto da XV, Curitiba, PR, Brasil',
    img: adfp,
    horarios: 'Segunda à sexta',
    contatos: 'adfp@adfp.org.br',
    saibaMais: 'https://adfp.org.br/',
    fotos: carregarGaleria('adfp'),
    lat: -25.4270467,
    lng: -49.2473584
  },
  {
    id: 23,
    titulo: 'Bazar Cabide Solidário',
    descricao: 'Rua General Carneiro, 6, Alto da Glória, Curitiba, PR, Brasil',
    img: cabide,
    horarios: 'Quartas',
    contatos: '(41) 8457-2267',
    saibaMais: 'https://www.instagram.com/cabidesolidario.itmo/',
    fotos: carregarGaleria('cabide'),
    lat: -25.4224003,
    lng: -49.2646412
  },
  {
    id: 24,
    titulo: 'Bazar Nina APACN',
    descricao: 'Rua Ubaldino do Amaral, 22, Alto da Glória, Curitiba, PR, Brasil',
    img: nina,
    horarios: 'Segunda à sexta',
    contatos: '(41)',
    saibaMais: 'https://www.instagram.com/bazarninaapacn/',
    fotos: carregarGaleria('nina'),
    lat: -25.4213585,
    lng: -49.2614711
  }
]
