// src/components/SignOut.tsx
import { auth } from '../services/firebase'
import { useRouter } from 'next/router'

const SignOut = () => {
  const router = useRouter()

  const handleSignOut = async () => {
    await auth.signOut()
    router.push('/signin') // Redirect to sign-in page on sign-out
  }

  return <button onClick={handleSignOut}>Sign Out</button>
}

export default SignOut
