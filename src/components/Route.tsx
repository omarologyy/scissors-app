// src/components/Route.tsx
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import { auth } from '../services/firebase'

const Route = ({ children }: { children: ReactNode }) => {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin')
    }
  }, [user, loading, router])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return null
  }

  return <>{children}</>
}

export default Route
