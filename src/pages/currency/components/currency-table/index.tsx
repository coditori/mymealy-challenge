import { FC } from 'react'

export const CurrencyTable: FC<ICurrencyTable> = ({ currencies }) => {
  return (
    <table className="w-full">
      <thead>
        <tr
          className="w-full flex items-center justify-between border-b border-blue-400 pb-2 mb-2"
          role="rowheader"
        >
          <th role="heading">Symbol</th>
          <th role="heading">Last price</th>
        </tr>
      </thead>

      <tbody>
        {!currencies.length ? (
          <tr
            className="w-full flex items-center justify-center animate-pulse"
            role="row"
          >
            <td role="cell">Loading ...</td>
          </tr>
        ) : (
          currencies.map((item) => (
            <tr
              className="flex items-center justify-between border-b py-2 border-gray-300"
              role="row"
              key={item.s}
            >
              <td role="cell" className="text-gray-600">
                {item.s}
              </td>
              <td role="cell" className="text-gray-600">
                {item.c}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}
