import styled from 'styled-components'

export const ArticleContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`

export const ArticleInfoWrapper = styled.div`
  header {
    margin-bottom: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.blue};
      font-size: 0.75rem;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      gap: 0.5rem;
      transition: all 0.2s ease-in-out;

      &:hover {
        filter: brightness(1.1);
        transform: scale(1.1);
      }
    }
  }

  h1 {
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
  }
`

export const InfoWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 2rem;
  color: ${({ theme }) => theme['base-label']};

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`

export const ContentBody = styled.div`
  margin: 2rem 1rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }

  img {
    max-width: 100%;
  }

  p {
    margin: 1rem 0;
  }
`
