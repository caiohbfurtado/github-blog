import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '../../components/Box'
import {
  HomeContainer,
  HomeContent,
  InfoWrapper,
  ProfileCardWrapper,
  PublicationsWrapper,
  SearchWrapper,
} from './styles'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Card } from '../../components/Card'

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

      <HomeContent>
        <SearchWrapper>
          <header>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </header>

          <input type="text" placeholder="Buscar conteúdo" />
        </SearchWrapper>

        <PublicationsWrapper>
          <Card
            title="JavaScript data types and data structures"
            createdAt="Há 1 dia"
            content="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

            let foo = 42; // foo is now a number
            foo = 'bar'; // foo is now a string
            foo = true; // foo is now a boolean"
          />
          <Card
            title="JavaScript data types and data structures"
            createdAt="Há 1 dia"
            content="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

            let foo = 42; // foo is now a number
            foo = 'bar'; // foo is now a string
            foo = true; // foo is now a boolean"
          />
          <Card
            title="JavaScript data types and data structures"
            createdAt="Há 1 dia"
            content="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

            let foo = 42; // foo is now a number
            foo = 'bar'; // foo is now a string
            foo = true; // foo is now a boolean"
          />
        </PublicationsWrapper>
      </HomeContent>
    </HomeContainer>
  )
}
