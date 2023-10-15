class Pratos {
  title: string
  descricao: string
  image: string
  id: number
  button: string
  destaque?: string
  numeroEstrela?: number
  estrela?: string
  pais?: string

  constructor(
    title: string,
    descricao: string,
    image: string,
    id: number,
    button: string,
    destaque: string,
    numeroEstrela: number,
    estrela: string,
    pais: string
  ) {
    this.title = title
    this.descricao = descricao
    this.image = image
    this.id = id
    this.button = button
    this.destaque = destaque
    this.numeroEstrela = numeroEstrela
    this.estrela = estrela
    this.pais = pais
  }
}

export default Pratos
