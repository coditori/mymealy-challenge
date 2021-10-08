import { useFetch } from 'hooks/use-fetch'
import { getBinance as service } from 'services/placeholder'
const View = (): JSX.Element => {
  const { data, loading } = useFetch({ service })

  console.log(data, loading)

  return <div>test</div>
}

export default View
