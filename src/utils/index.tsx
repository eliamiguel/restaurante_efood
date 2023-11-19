export const getDescripion = (descrpion: string) => {
  if (descrpion.length > 200) {
    return descrpion.slice(0, 235) + '...'
  }
}
export const FormatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRl'
  }).format(price)
}
