import styled, { keyframes } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;

  min-width: 32rem;

  padding: 2.5rem 3rem;
  border-radius: 6px;

  background: ${({ theme }) => theme['gray-800']};

  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2.625rem;

    input {
      padding: 1rem;
      border: 0;
      border-radius: 6px;

      color: ${({ theme }) => theme['gray-300']};
      background: ${({ theme }) => theme['gray-900']};

      &::placeholder {
        color: ${({ theme }) => theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;

      margin-top: 1.5rem;
      padding: 0 1.25rem;
      border: 0;
      border-radius: 6px;

      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme['green-500']};

      font-weight: bold;

      cursor: pointer;

      &:disabled {
        background: ${({ theme }) => theme['green-500'] + '60'};
        cursor: not-allowed;

        svg {
          animation: ${rotationAnimation} 2.5s linear infinite;
        }
      }

      &:not(:disabled):hover {
        background: ${({ theme }) => theme['green-700']};

        transition: all 0.2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.DialogClose)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  border: 0;

  color: ${({ theme }) => theme['gray-500']};
  background: transparent;

  line-height: 0;

  cursor: pointer;
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: 0.5rem;
`

interface TransactionTypeProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem;
  border: 0;
  border-radius: 6px;

  color: ${({ theme }) => theme['gray-300']};
  background: ${({ theme }) => theme['gray-700']};

  transition: all 0.2s;
  cursor: pointer;

  &[data-state='unchecked']:hover {
    background: ${({ theme }) => theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.white};
    background: ${({ variant, theme }) =>
      variant === 'income' ? theme['green-500'] : theme['red-500']};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }

  svg {
    color: ${({ variant, theme }) =>
      variant === 'income' ? theme['green-300'] : theme['red-300']};
  }
`
