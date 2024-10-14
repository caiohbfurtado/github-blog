import styled from 'styled-components'

import headerBackgroundImage from '../../assets/header-image.svg'

export const HeaderContainer = styled.div`
  background-image: url(${headerBackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  height: 296px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 4rem;
  margin-bottom: -88px;
`
