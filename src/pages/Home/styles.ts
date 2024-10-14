import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`

export const ProfileCardWrapper = styled.div`
  display: flex;
  gap: 2rem;

  img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
  }

  > div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    h1 {
      color: ${({ theme }) => theme['base-title']};
      font-size: 1.5rem;
      line-height: 130%;
    }

    a {
      display: flex;
      align-items: baseline;
      text-decoration: none;
      color: ${({ theme }) => theme.blue};
      text-transform: uppercase;
      font-size: 0.75rem;
      line-height: 160%;
      font-weight: bold;
      gap: 0.5rem;
      transition: filter 0.2s ease-in-out;

      svg {
        width: 0.75rem;
        height: 0.75rem;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  p {
    color: ${({ theme }) => theme['base-text']};
    font-size: 1rem;
    line-height: 160%;
    margin-bottom: 1.5rem;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  color: ${({ theme }) => theme['base-text']};
  font-size: 1rem;
  line-height: 160%;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${({ theme }) => theme['base-label']};
    }
  }
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
`

export const SearchWrapper = styled.div`
  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    h2 {
      color: ${({ theme }) => theme['base-subtitle']};
      line-height: 160%;
      font-weight: bold;
      font-size: 1.125rem;
    }

    span {
      color: ${({ theme }) => theme['base-span']};
      line-height: 160%;
      font-size: 0.875rem;
    }
  }

  input {
    width: 100%;
    height: 3.125rem;
    color: ${({ theme }) => theme['base-text']};
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;
    padding: 1rem 0.75rem;
    line-height: 160%;
    font-weight: normal;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
      font-weight: normal;
    }
  }
`

export const PublicationsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`
