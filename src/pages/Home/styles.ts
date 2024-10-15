import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
`

export const SearchWrapper = styled.form`
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
  grid-template-columns: repeat(2, 34rem);
  gap: 2rem;
  margin-top: 3rem;
`
