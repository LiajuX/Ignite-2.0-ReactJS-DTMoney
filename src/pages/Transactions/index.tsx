import { useContextSelector } from 'use-context-selector'

import { TransactionsContext } from '../../contexts/TransactionsContext'

import { dateFormatter, priceFormatter } from '../../utils/formatter'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import * as S from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />

        <S.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <S.PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>
                  <time>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </time>
                </td>
              </tr>
            ))}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  )
}
