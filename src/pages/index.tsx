// pages/index.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../services/firebase'
import { useEffect } from 'react'

const Home = () => {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [user, router])

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Welcome to a URL Shortener</h1>
        {!user && (
          <div className="buttons">
            <Link href="/signin">
              <button className="btn">Sign In</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
