import { Navigate } from 'react-router-dom'
import { useAuth } from './Context'
import { ReactNode } from 'react'

interface PrivateRouteProps {   //defines types of props expected by the public route component
  children: ReactNode             //expects one prop called children => useful to wrap dashboard and such pages
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace /> //not authenthicated => authenthicate again in the login page
  }

  return <>
  {children}
  </>  //return children
}
