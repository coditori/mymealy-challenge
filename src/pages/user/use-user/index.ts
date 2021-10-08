import { useFetch } from 'hooks/use-fetch'
import { getUser as service } from 'services/placeholder'

export const useUser = (): IUseUserOutput => {
  const { data, loading, fetching, cache, refetch } = useFetch<IUserData>({
    service,
  })

  const isNew =
    data && cache && data.results && cache.results
      ? {
          first: data.results[0]?.name.first !== cache.results[0]?.name.first,
          last: data.results[0]?.name.last !== cache.results[0]?.name.last,
          country:
            data.results[0]?.location.country !==
            cache.results[0]?.location.country,
          img:
            data.results[0]?.picture.large !== cache.results[0]?.picture.large,
        }
      : {
          first: false,
          last: false,
          country: false,
          img: false,
        }

  return {
    data,
    cache,
    loading,
    fetching,
    refetch,
    isNew,
  }
}
