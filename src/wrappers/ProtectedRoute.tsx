import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { useAtomValue } from 'jotai'
import { userAtom } from '../store'

type ProtectedRouteProps = {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useAtomValue(userAtom)

  return user ? <>{children}</> : <Navigate to='/login' />
}
