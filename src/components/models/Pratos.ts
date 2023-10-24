class Pratos {
  title: string
  descricao: string
  image: string
  id: number
  button: string
  pais?: string

  constructor(
    title: string,
    descricao: string,
    image: string,
    id: number,
    button: string,
    pais: string
  ) {
    this.title = title
    this.descricao = descricao
    this.image = image
    this.id = id
    this.button = button
    this.pais = pais
  }
}

export default Pratos
