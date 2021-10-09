type TCurrency = {
  s: string
  c: string
}

interface IUseCurrencies {
  filter: string
  onFilter: (value: string) => void
  currencies: TCurrency[]
}
