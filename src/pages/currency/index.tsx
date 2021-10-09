import { Card } from 'components/card'

import { Input } from 'components/input'
import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'

const View = (): JSX.Element => {
  const [filter, setFilter] = useState('')

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    ' wss://stream.binance.com:9443/ws'
  )

  useEffect(() => {
    sendJsonMessage({
      method: 'SUBSCRIBE',
      params: ['!miniTicker@arr'],
      id: 1,
    })
  }, [readyState])

  if (lastJsonMessage)
    return (
      <Card>
        <Input
          onChange={(value) => setFilter(value)}
          value={filter}
          placeholder="Search here ..."
        />
        <table className="w-full">
          <thead>
            <tr className="w-full flex items-center justify-between border-b border-blue-400 pb-2 mb-2">
              <th>Symbol</th>
              <th>Last price</th>
            </tr>
          </thead>

          <tbody>
            {lastJsonMessage.length &&
              lastJsonMessage
                .filter((item) =>
                  filter ? item.s.toLowerCase().includes(filter) : true
                )
                .sort((a, b) => (parseFloat(a.c) < parseFloat(b.c) ? 1 : -1))
                .map((item) => (
                  <tr className="flex items-center justify-between border-b py-2 border-gray-300">
                    <td className="text-gray-600">{item.s}</td>
                    <td className="text-gray-600">{item.c}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </Card>
    )
  else return <div>Loading...</div>
}

export default View
