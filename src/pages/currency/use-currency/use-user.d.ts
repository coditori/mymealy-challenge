interface IUserData {
  results: [
    {
      name: { first: string; last: string }
      location: { country: string }
      picture: { large: string }
    }
  ]
}
interface IUseUserOutput {
  data: IUserData
  cache: IUserData
  loading?: boolean
  fetching?: boolean
  refetch: () => void
  isNew: {
    first: boolean
    last: boolean
    country: boolean
    img: boolean
  }
}
