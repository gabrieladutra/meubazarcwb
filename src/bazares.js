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
import maos from './assets/maos.jpg'
import perpetuo from './assets/perpetuo.png'
import renal from './assets/renal.jpg'
import santissimo from './assets/santissimo.jpg'
import socorro from './assets/socorro1.jpg'
import provopar from './assets/provopar.jpg'
import solidario from './assets/solidario.jpg'
import nina from './assets/nina.jpg'
import moises from './assets/moises.png'
import alcance from './assets/alcance.png'
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
    descricao: 'Avenida Agostinho Leão Junior, 336 - Alto da Glória',
    img: hc,
    horarios: 'De segunda á sexta-feira, das 9h às 17h.',
    contatos: '(41) 98713-6516',
    saibaMais: 'https://www.amigosdohc.org.br/loja-2/',
    fotos: carregarGaleria('hc')
  },
  {
    id: 2,
    titulo: 'Bazar Perpétuo Socorro',
    descricao: 'Rua Ivo Leão, 220 - Alto da Glória',
    img: perpetuo,
    horarios: 'Ás quartas-feiras, das 8h às 17h ',
    contatos: '(41) 3253-2031',
    saibaMais: 'https://www.perpetuosocorro.org.br/pagina/bazar',
    fotos: carregarGaleria('perpetuo')
  },
  {
    id: 3,
    titulo: 'Bazar Divino Espírito Santo',
    descricao: 'Rua Mateus Leme, 1855 - Bom Retiro',
    img: divino,
    horarios: 'Aos sábados das 8h às 12h',
    contatos: '41) 3121-1754',
    saibaMais: 'https://www.facebook.com/pdescuritiba/',
    fotos: carregarGaleria('divino')
  },
  {
    id: 4,
    titulo: 'Bazar da Cáritas',
    descricao: 'Avenida Marechal Floriano Peixoto, 8520 - Boqueirão',
    img: caritas,
    horarios: 'Organizado em datas esporádicas geralmente sextas e sábados das 9h às 17h',
    contatos: '(41) 3039-7869',
    saibaMais: 'https://www.instagram.com/caritaspr/',
    fotos: carregarGaleria('caritas')
  },
  {
    id: 5,
    titulo: 'Bazar Solidário Acridas',
    descricao: 'Rua Eduardo Geronasso, 1782 - Bacacheri',
    img: acridas,
    horarios: 'De segunda á sexta-feira das 9h às 11h30 e das 13h às 15h30.',
    contatos: '(41) 98835-5238',
    saibaMais: 'https://www.instagram.com/acridasoficial/',
    fotos: carregarGaleria('acridas')
  },
  {
    id: 6,
    titulo: 'Bazar Santuário Nosa Sra. de Guardalupe',
    descricao: 'Praça Senador Correia, 128 - Centro',
    img: guardalupe,
    horarios: 'De segunda á sexta-feira das 9h30 ás 16h',
    contatos: '(41) 3233-4884',
    saibaMais: 'https://santuarioguadalupe.com.br/secretaria/avisos-do-santuario/',
    fotos: carregarGaleria('guardalupe')
  },
  {
    id: 7,
    titulo: 'Bazar do Santíssimo',
    descricao: 'Rua Leôncio Correia, 381 - Água Verde',
    img: santissimo,
    horarios:
      'Ás terças e quintas-feiras, das 14h às 18h, e no 2º sábado de cada mês, a partir das 8h',
    contatos: '(41) 9324-2556',
    saibaMais: 'https://www.instagram.com/bazardosantissimo/',
    fotos: carregarGaleria('santissimo')
  },
  {
    id: 8,
    titulo: 'Bazar da Associação Franciscana de Apoio ao Cidadão (AFECE)',
    descricao: 'R. Paulo Turkiewicz, 316 - Tarumã',
    img: afece,
    horarios: ' De terça à sexta-feira das 10h as 16h - Almoço das 13h às 14h',
    contatos: '(41) 3366-5212',
    saibaMais: 'https://afece.org.br/bazar/',
    fotos: carregarGaleria('afece')
  },
  {
    id: 9,
    titulo: 'Bazar Transformar (ABASC/PIB)',
    descricao: ' Rua Bento Viana, 1200 - Batel',
    img: abasc,
    horarios: 'De quarta á sexta-feira das 9h às 15h e sábado das 10h às 13h',
    contatos: '(41) 99825-0600',
    saibaMais: 'https://www.instagram.com/bazar.transformar/',
    fotos: carregarGaleria('abasc')
  },
  {
    id: 10,
    titulo: 'Bazar APAE Curitiba',
    descricao: 'Avenida Nossa Senhora da Paz, 1041 - Boqueirão',
    img: apae,
    horarios: 'Segunda, quarta e sexta-feira das 9h às 16h',
    contatos: '(41) 99266-5857',
    saibaMais: 'https://www.instagram.com/bazarapaecuritiba/',
    fotos: carregarGaleria('apae')
  },
  {
    id: 11,
    titulo: 'Bazar Mãos que Valen',
    descricao: 'Rua Paulo Gorski,1356 - Mossunguê',
    img: maos,
    horarios: 'De segunda a sexta-feira das 9h30 às 17h30 Sábado das 10h às 15h',
    contatos: '(41) 9915-3616',
    saibaMais: 'https://www.instagram.com/bazar.transformar/',
    fotos: carregarGaleria('maos')
  },
  {
    id: 12,
    titulo: 'Bazar da Amizade - Hospital Pequeno Cotolengo',
    descricao: 'Rua José Gonçalves Júnior, 140, Campo Comprido',
    img: amizade,
    horarios:
      'De segunda a sábado, das 8h30 às 11h30. 2° Sábado do mês tem bazar especial com horário estendido até às 13h',
    contatos: '(41) 3314-1900',
    saibaMais: 'https://www.pequenocotolengo.org.br/bazar-da-amizade/',
    fotos: carregarGaleria('amizade')
  },

  {
    id: 13,
    titulo: 'Bazar Abibe Isfer',
    descricao: 'Alameda Cabral, 275 - Centro',
    img: ceai,
    horarios: 'Consultar diretamente no telefone do CEAI',
    contatos: ' (41) 99506-0013',
    saibaMais: 'https://www.instagram.com/abibeisfer/',
    fotos: carregarGaleria('ceai')
  },
  {
    id: 14,
    titulo: 'Bazar CEEFA',
    descricao: 'Rua Prefeito Ângelo Ferrário Lopes , 1260 - Alto da XV',
    img: ceefa,
    horarios: 'Consultar diretamente no telefone da CEEFA',
    contatos: '(41) 3264-2167',
    saibaMais: 'https://www.ceefa.org.br/bazar-solidario-doacao.html',
    fotos: carregarGaleria('ceefa')
  },
  {
    id: 15,
    titulo: 'Bazar Fundação Pró-Renal',
    descricao: 'Avenida Vicente Machado, 2190 - Batel',
    img: renal,
    horarios: 'De segunda à sexta das 8h às 17h',
    contatos: '(41) 3312-5415',
    saibaMais: 'https://www.instagram.com/bazarprorenal/',
    fotos: carregarGaleria('prorenal')
  },
  {
    id: 16,
    titulo: 'Bazar PROVOPAR',
    descricao: 'Rua Hermes Fontes, 315 - Batel ',
    img: provopar,
    horarios: 'De segunda a sexta-feira, das 10h às 17h',
    contatos: '(41) 99540-3998',
    saibaMais: 'https://www.instagram.com/provopar.oficial/',
    fotos: carregarGaleria('provopar')
  },
  {
    id: 17,
    titulo: 'Bazar Instituto Grupo Solidário',
    descricao: 'Rua Gabriel Frecceiro de Miranda, 621 – Xaxim',
    img: solidario,
    horarios: 'Consultar data e horário diretamente no instagram do Instituto',
    contatos: '(41) 99751-2828',
    saibaMais: 'https://www.instagram.com/institutogruposolidario/',
    fotos: carregarGaleria('solidario')
  },
  {
    id: 18,
    titulo: 'Bazar Socorro aos Necessitados',
    descricao: 'Rua Konrad Adenauer, 576 – Tarumã',
    img: socorro,
    horarios: 'De terça a sexta-feira, das 9:30h às 15:30h.',
    contatos: '(41) 98898-2483',
    saibaMais: '',
    fotos: carregarGaleria('socorro')
  },
  {
    id: 19,
    titulo: 'Bazar Lar Moisés',
    descricao: 'Rua da Trindade, 1686 – Cajuru',
    img: moises,
    horarios: 'Acontece a cada 15 dias das 8h as 12h.',
    contatos: '(41) 3256-5587 / (41) 99125-0559 / (41) 99176-0112',
    saibaMais: 'https://larmoises.org/bazar/',
    fotos: carregarGaleria('moises')
  },
  {
    id: 20,
    titulo: 'Achadinhos do Bazar Alcance Social',
    descricao: 'Rua Tenente Miguel Afonso Ribeiro Cubas 210 - Capão Raso',
    img: alcance,
    horarios: 'De segunda à sexta das 9h às 17h. Consulte data  e local do Mega Bazar',
    contatos: '(41) 99131-5925',
    saibaMais: 'https://www.instagram.com/achadinhos.dobazar/',
    fotos: carregarGaleria('alcance')
  },
  {
    id: 21,
    titulo: 'Bazar Associação São Roque',
    descricao: 'Rua Nicarágua, 2128 – Bacacheri',
    img: saoroque,
    horarios: 'Ás terças e quintas-feiras das 08h30 ás 11h30 e das 13h30 ás 16h30',
    contatos: '(41) 99224-6944',
    saibaMais: 'https://www.instagram.com/bazarsaoroque/',
    fotos: carregarGaleria('saoroque')
  },
  {
    id: 22,
    titulo: 'Bazar Associação dos Deficiente Físicos do Paraná',
    descricao: 'R. XV de Novembro, 2765 - Alto da XV,',
    horarios: 'De segunda á sexta das 8h ás 17h',
    contatos: 'adfp@adfp.org.br',
    saibaMais: 'https://adfp.org.br/',
    img: adfp,
    fotos: carregarGaleria('adfp')
  },
  {
    id: 23,
    titulo: 'Bazar Cabide Solidário',
    img: cabide,
    descricao: 'Rua General Carneiro, 06 - Alto da Glória',
    horarios: 'Todas as quartas das 9h às 17h.',
    contatos: '(41)8457-2267',
    saibaMais: 'https://www.instagram.com/cabidesolidario.itmo/',
    fotos: carregarGaleria('cabide')
  },
  {
    id: 24,
    titulo: 'Bazar Nina APACN',
    img: nina,
    descricao: 'Rua Ubaldino do Amaral, 22 - Alto da Glória',
    horarios: 'De segunda à sexta das 9h às 17h30.',
    contatos: '11',
    saibaMais: 'https://www.instagram.com/bazarninaapacn/',
    fotos: carregarGaleria('nina')
  }
]
