import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '../../../../components/Box'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { InfoWrapper, ProfileCardWrapper } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/api'

type User = {
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
  name: string
  login: string
}

export function ProfileCard() {
  const [user, setUser] = useState<User>()

  async function getUserInfo() {
    const { data } = await api.get<User>('/users/caiohbfurtado')

    setUser(data)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <Box>
      <ProfileCardWrapper>
        <img src="https://github.com/caiohbfurtado.png" alt={user?.name} />

        <div>
          <header>
            <h1>{user?.name}</h1>

            <a href={user?.html_url}>
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>

          <p>{user?.bio}</p>

          <InfoWrapper>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {user?.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {user?.company}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {user?.followers} seguidores
            </span>
          </InfoWrapper>
        </div>
      </ProfileCardWrapper>
    </Box>
  )
}
