import axios from 'axios'

export const getBinance = async () => {
  const { data } = await axios.get('https://api3.binance.com/')
  return data
}
