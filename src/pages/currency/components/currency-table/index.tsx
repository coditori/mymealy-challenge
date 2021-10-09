import { FC } from 'react'

export const CurrencyTable: FC<{ currencies: any[] }> = ({ currencies }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="w-full flex items-center justify-between border-b border-blue-400 pb-2 mb-2">
          <th>Symbol</th>
          <th>Last price</th>
        </tr>
      </thead>

      <tbody>
        {!currencies.length ? (
          <tr className="w-full flex items-center justify-center animate-pulse">
            <td>Loading ...</td>
          </tr>
        ) : (
          currencies.map((item) => (
            <tr className="flex items-center justify-between border-b py-2 border-gray-300">
              <td className="text-gray-600">{item.s}</td>
              <td className="text-gray-600">{item.c}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}
