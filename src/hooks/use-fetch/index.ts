import { useCallback, useEffect, useState } from 'react'

const initialState = {
  data: undefined,
  error: undefined,
  loading: false,
  fetching: false,
}

export const useFetch = <T>({ service }: IUseService): IUseServieOutput<T> => {
  const [state, setState] = useState<IUseServiceState<T>>(initialState)

  const fetcher = useCallback(async (cached?: boolean) => {
    if (cached)
      setState((prev) => ({
        ...prev,
        fetching: true,
      }))
    else
      setState((prev) => ({
        ...prev,
        loading: true,
      }))
    try {
      const data = await service()
      setState((prev) => ({
        ...prev,
        data,
        loading: false,
        fetching: false,
        error: undefined,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error,
        loading: false,
        fetching: false,
      }))
    }
  }, [])

  useEffect(() => {
    fetcher()
    return () => setState(initialState)
  }, [])

  return {
    ...state,
    refetch: () => fetcher(true),
  }
}
