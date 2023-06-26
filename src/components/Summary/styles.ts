import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  margin-top: -5rem;
  padding: 0 1.5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 2rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme['gray-600']};

  ${({ variant, theme }) =>
    variant === 'green' &&
    css`
      background-color: ${theme['green-700']};
    `};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme['gray-300']};
  }

  strong {
    display: block;

    margin-top: 1rem;
    font-size: 2rem;
  }
`
