import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai'

export const personalAccessTokenAtom = atomWithStorage('auth-token', localStorage.getItem('auth-token'))

type User = {
  userName: string
  firstName: string
  lastName: string
}

export const userAtom = atom<User | undefined>(undefined)
export const showSpinnerAtom = atom<boolean>(false)
