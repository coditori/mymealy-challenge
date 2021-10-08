interface IUseService {
  service: Function
}

interface IUseServiceState<T> {
  data: T
  error: any
  loading: boolean
  fetching: boolean
}

interface IUseServieOutput<T> {
  data: T
  error: any
  loading: boolean
  fetching: boolean
  refetch?: () => void
}
