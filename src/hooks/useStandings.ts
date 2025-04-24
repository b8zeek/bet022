import { useQuery } from 'react-query'
import { Axios } from '../services'

export function useStandings() {
  const getStandings = async () => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 2000))

    const { data } = await Axios.get(`${import.meta.env.VITE_URL}/user/standings`)

    return data?.standings || []
  }

  return useQuery(['standings'], getStandings)
}
