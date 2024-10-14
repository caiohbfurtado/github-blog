import { CardWrapper } from './styles'

type CardProps = {
  title: string
  createdAt: string
  content: string
}

export function Card({ content, createdAt, title }: CardProps) {
  return (
    <CardWrapper>
      <header>
        <h3>{title}</h3>
        <span>{createdAt}</span>
      </header>

      <p>{content}</p>
    </CardWrapper>
  )
}
