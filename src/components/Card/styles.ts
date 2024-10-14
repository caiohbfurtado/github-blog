import styled from 'styled-components'

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  header {
    display: flex;
    gap: 1rem;
    align-items: center;

    h3 {
      color: ${({ theme }) => theme['base-title']};
      font-size: 1.25rem;
      line-height: 160%;
      font-weight: bold;
    }

    span {
      color: ${({ theme }) => theme['base-text']};
      font-size: 1rem;
      line-height: 160%;
    }
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    margin-top: 1.25rem;
  }
`
