import { Link, useParams } from 'react-router-dom'
import { Box } from '../../components/Box'
import Markdown from 'react-markdown'
import {
  ArticleContainer,
  ArticleInfoWrapper,
  ContentBody,
  InfoWrapper,
} from './styles'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { api } from '../../lib/api'
import { useCallback, useEffect, useState } from 'react'
import { ArticleProps } from '../Home'

export function Article() {
  const [issue, setIssue] = useState<ArticleProps>()
  const { id } = useParams()

  const getIssue = useCallback(async () => {
    const { data } = await api.get<ArticleProps>(
      `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`,
    )

    setIssue(data)
  }, [id])

  useEffect(() => {
    getIssue()
  }, [getIssue])

  return (
    <ArticleContainer>
      <Box>
        <ArticleInfoWrapper>
          <header>
            <Link to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
              voltar
            </Link>

            <a href={issue?.html_url}>
              Ver no github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>

          <h1>{issue?.title}</h1>

          <InfoWrapper>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {issue?.user.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              {issue?.created_at}
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />
              {issue?.comments} comentários
            </span>
          </InfoWrapper>
        </ArticleInfoWrapper>
      </Box>

      <ContentBody>
        <Markdown>{issue?.body}</Markdown>
      </ContentBody>
    </ArticleContainer>
  )
}
