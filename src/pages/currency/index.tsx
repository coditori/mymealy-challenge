import { Card } from 'components/card'
import { Input } from 'components/input'

import { CurrencyTable } from './components/currency-table'
import { useCurrency } from './hooks/use-currency'

const View = (): JSX.Element => {
  const { filter, currencies, onFilter } = useCurrency()

  return (
    <Card>
      <Input onChange={onFilter} value={filter} placeholder="Search here ..." />
      <CurrencyTable currencies={currencies} />
    </Card>
  )
}

export default View
