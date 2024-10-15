/* eslint-disable camelcase */
import {
  HomeContainer,
  HomeContent,
  PublicationsWrapper,
  SearchWrapper,
} from './styles'

import { useForm } from 'react-hook-form'

import { Card } from '../../components/Card'
import { ProfileCard } from './components/ProfileCard'
import { api } from '../../lib/api'
import { useEffect, useState } from 'react'

export type ArticleProps = {
  body: string
  created_at: string
  id: number
  html_url: string
  title: string
  number: number
  comments: number
  user: {
    login: string
  }
}

type SearchForm = {
  query: string
}

export function Home() {
  const [issues, setIssues] = useState<ArticleProps[]>([])
  const { register, handleSubmit } = useForm<SearchForm>()

  async function getIssues() {
    const { data } = await api.get(
      'https://api.github.com/search/issues?q=%20repo:rocketseat-education/reactjs-github-blog-challenge',
    )

    const items: ArticleProps[] = data.items

    setIssues(items)
  }

  useEffect(() => {
    getIssues()
  }, [])

  async function onSubmit({ query }: SearchForm) {
    const { data } = await api.get(
      `https://api.github.com/search/issues?q=${query}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
    )

    const items: ArticleProps[] = data.items

    setIssues(items)
  }

  return (
    <HomeContainer>
      <ProfileCard />

      <HomeContent>
        <SearchWrapper onSubmit={handleSubmit(onSubmit)}>
          <header>
            <h2>Publicações</h2>
            <span>{issues.length} publicações</span>
          </header>

          <input
            {...register('query')}
            type="text"
            placeholder="Buscar conteúdo"
          />
        </SearchWrapper>

        <PublicationsWrapper>
          {issues.map(({ body, created_at, id, title, number }) => (
            <Card
              key={id}
              title={title}
              createdAt={created_at}
              content={body}
              id={number}
            />
          ))}
        </PublicationsWrapper>
      </HomeContent>
    </HomeContainer>
  )
}
