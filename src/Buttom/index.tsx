import { ButtonNormal, ButtonLink } from './styles'

type Props = {
  title: string
  type: 'button' | 'link'
  to: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, onClick, to, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonNormal type="button" title={title} onClick={onClick}>
        {children}
      </ButtonNormal>
    )
  }
  return <ButtonLink to={to as string}>{children}</ButtonLink>
}
export default Button
