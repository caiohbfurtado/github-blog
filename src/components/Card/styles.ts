import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardWrapper = styled(Link)`
  background-color: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  header {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: ${({ theme }) => theme['base-title']};
      font-size: 1.25rem;
      line-height: 160%;
      font-weight: bold;
    }

    span {
      color: ${({ theme }) => theme['base-span']};
      font-size: 1rem;
      line-height: 160%;
    }
  }

  p {
    color: ${({ theme }) => theme['base-text']};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    margin-top: 1.25rem;
  }

  &:hover {
    filter: brightness(0.8);
    transform: scale(1.1);
  }
`
