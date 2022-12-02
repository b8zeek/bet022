import { useMutation } from 'react-query'
import { Axios } from '../services'

export function useUpsertBets() {
  const upsertBets = async (betsData: any) => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 1000))

    const { data } = await Axios.post(`${import.meta.env.VITE_URL}/user/bets`, betsData)

    console.log('DATA', data)

    return data?.events || []
  }

  return useMutation(upsertBets)
}
