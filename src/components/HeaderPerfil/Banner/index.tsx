import { Image, Text, Title } from './styles'

type Props = {
  image: string
  title: string
  text: string
}

const Banner = ({ image, title, text }: Props) => (
  <Image style={{ backgroundImage: `url(${image})` }}>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </Image>
)

export default Banner
