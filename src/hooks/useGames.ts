import { useQuery } from 'react-query'
import axios from 'axios'

export function useGames() {
  const getGames = async () => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 2000))

    return axios.get('http://localhost:3000/games').then(res => res.data)
  }

  return useQuery(['games'], getGames)
}
