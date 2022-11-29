import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { useAtomValue } from 'jotai'
import { userAtom } from '../store'

type ProtectedRouteProps = {
  children: ReactNode
}

export function AdminProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useAtomValue(userAtom)

  return user?.isAdmin ? <>{children}</> : <Navigate to='/' />
}
