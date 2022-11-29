import { atomWithStorage } from 'jotai/utils'

export const personalAccessTokenAtom = atomWithStorage('auth-token', localStorage.getItem('auth-token'))
