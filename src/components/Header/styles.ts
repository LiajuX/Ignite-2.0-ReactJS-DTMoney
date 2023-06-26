import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;

  background-color: ${({ theme }) => theme['gray-900']};
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;
`

export const NewTransitionButton = styled.button`
  height: 50px;

  padding: 0 1.25rem;
  border: 0;
  border-radius: 6px;

  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};

  font-weight: bold;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme['green-700']};

    transaction: all 0.2s;
  }
`
