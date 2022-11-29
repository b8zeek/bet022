import { useSetAtom } from 'jotai'
import { showSpinnerAtom } from '../store'

export function useUserInterface() {
  const setSpinnerAtom = useSetAtom(showSpinnerAtom)

  const showSpinner = () => setSpinnerAtom(true)
  const hideSpinner = () => setSpinnerAtom(false)

  return {
    showSpinner,
    hideSpinner
  }
}
