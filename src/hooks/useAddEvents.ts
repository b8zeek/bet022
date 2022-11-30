import { useMutation } from 'react-query'
import { Axios } from '../services'

export function useAddEvents() {
  const addEvents = async (eventData: any) => {
    // TODO: REMOVE NEXT LINE LATER
    await new Promise(_ => setTimeout(_, 1000))

    const res = await Axios.post('/admin/events', eventData)

    return res
  }

  return useMutation(addEvents)
}
