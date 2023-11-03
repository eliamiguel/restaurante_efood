import { ContainerHeader, Text, Title } from './styles'
import { CSSProperties } from 'react'
type Props = {
  style: CSSProperties
  title: string
  text: string
}

const Hero = ({ style, title, text }: Props) => (
  <ContainerHeader style={style}>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </ContainerHeader>
)

export default Hero
