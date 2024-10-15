import { CardWrapper } from './styles'

type CardProps = {
  title: string
  createdAt: string
  content: string
  id: number
}

export function Card({ content, createdAt, title, id }: CardProps) {
  return (
    <CardWrapper to={`/issues/${id}`}>
      <header>
        <h3>{title}</h3>
        <span>{createdAt}</span>
      </header>

      {content && <p>{content}</p>}
    </CardWrapper>
  )
}
