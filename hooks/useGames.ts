import { useQuery } from 'react-query'
import axios from 'axios'

export function useGames() {
  const getGames = async () => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 1000))

    const { data } = await axios.get('http://localhost:3000/api/predictions')

    return data?.games || []
  }

  return useQuery(['games'], getGames)
}
