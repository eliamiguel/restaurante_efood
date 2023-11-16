export const getDescripion = (descrpion: string) => {
  if (descrpion.length > 180) {
    return descrpion.slice(0, 170) + '...'
  }
}
export const FormatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRl'
  }).format(price)
}
