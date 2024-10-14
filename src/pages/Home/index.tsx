import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '../../components/Box'
import { HomeContainer, InfoWrapper, ProfileCardWrapper } from './styles'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Home() {
  return (
    <HomeContainer>
      <Box>
        <ProfileCardWrapper>
          <img src="https://github.com/caiohbfurtado.png" alt="" />

          <div>
            <header>
              <h1>Caio Furtado</h1>

              <a href="">
                Github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{' '}
              </a>
            </header>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae similique asperiores nihil delectus sunt veniam
              reiciendis corrupti dolorem amet distinctio reprehenderit tenetur
              impedit nostrum eum iure, iste officiis sint aliquid.
            </p>

            <InfoWrapper>
              <span>
                <FontAwesomeIcon icon={faGithub} />
                caiohburtado
              </span>
              <span>
                <FontAwesomeIcon icon={faBuilding} />
                Compass.uol
              </span>
              <span>
                <FontAwesomeIcon icon={faUserGroup} />
                32 seguidores
              </span>
            </InfoWrapper>
          </div>
        </ProfileCardWrapper>
      </Box>
    </HomeContainer>
  )
}
