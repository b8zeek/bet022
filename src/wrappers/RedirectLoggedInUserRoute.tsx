import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { useAtomValue } from 'jotai'
import { userAtom } from '../store'

type ProtectedRouteProps = {
  children: ReactNode
}

export function RedirectLoggedInUserRoute({ children }: ProtectedRouteProps) {
  const user = useAtomValue(userAtom)

  return user ? <Navigate to='/' /> : <>{children}</>
}
