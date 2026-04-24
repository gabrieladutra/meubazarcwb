const enderecos = [
  'Avenida Agostinho Leão Junior, 336, Alto da Glória, Curitiba, PR, Brasil',
  'Rua Ivo Leão, 220, Alto da Glória, Curitiba, PR, Brasil',
  'Rua Mateus Leme, 1855, Bom Retiro, Curitiba, PR, Brasil',
  'Avenida Marechal Floriano Peixoto, 8520, Boqueirão, Curitiba, PR, Brasil',
  'Rua Eduardo Geronasso, 1782, Bacacheri, Curitiba, PR, Brasil',
  'Praça Senador Correia, 128, Centro, Curitiba, PR, Brasil',
  'Rua Leôncio Correia, 381, Água Verde, Curitiba, PR, Brasil',
  'Rua Paulo Turkiewicz, 316, Tarumã, Curitiba, PR, Brasil',
  'Rua Bento Viana, 1200, Batel, Curitiba, PR, Brasil',
  'Avenida Nossa Senhora da Paz, 1041, Boqueirão, Curitiba, PR, Brasil',
  'Rua Paulo Gorski, 1356, Mossunguê, Curitiba, PR, Brasil',
  'Rua José Gonçalves Júnior, 140, Campo Comprido, Curitiba, PR, Brasil',
  'Alameda Cabral, 275, Centro, Curitiba, PR, Brasil',
  'Rua Prefeito Ângelo Ferrário Lopes, 1260, Alto da XV, Curitiba, PR, Brasil',
  'Avenida Vicente Machado, 2190, Batel, Curitiba, PR, Brasil',
  'Rua Hermes Fontes, 315, Batel, Curitiba, PR, Brasil',
  'Rua Gabriel Frecceiro de Miranda, 621, Xaxim, Curitiba, PR, Brasil',
  'Rua Konrad Adenauer, 576, Tarumã, Curitiba, PR, Brasil',
  'Rua da Trindade, 1686, Cajuru, Curitiba, PR, Brasil',
  'Rua Tenente Miguel Afonso Ribeiro Cubas, 210, Capão Raso, Curitiba, PR, Brasil',
  'Rua Nicarágua, 2128, Bacacheri, Curitiba, PR, Brasil',
  'Rua XV de Novembro, 2765, Alto da XV, Curitiba, PR, Brasil',
  'Rua General Carneiro, 6, Alto da Glória, Curitiba, PR, Brasil',
  'Rua Ubaldino do Amaral, 22, Alto da Glória, Curitiba, PR, Brasil'
]

export async function geocode() {
  for (let endereco of enderecos) {
    const enderecoCompleto = endereco + ', Curitiba, PR, Brasil'

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(enderecoCompleto)}&key=AIzaSyC1reY7MFwbNYYP5vFxKOCmDLqRDT0V7x8`

    const res = await fetch(url)
    const data = await res.json()

    if (data.status !== 'OK') {
      console.log('Erro:', endereco, data.status)
      continue
    }

    const loc = data.results[0].geometry.location

    console.log({
      endereco,
      latitude: loc.lat,
      longitude: loc.lng
    })
  }
}

geocode()
