// pages/[id].tsx
import { GetServerSideProps } from 'next'
import { firestore } from '../services/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { ParsedUrlQuery } from 'querystring'

interface Params extends ParsedUrlQuery {
  id: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params

  try {
    const urlDoc = doc(firestore, 'urls', id)
    const docSnapshot = await getDoc(urlDoc)

    if (!docSnapshot.exists()) {
      return {
        notFound: true,
      }
    }

    const data = docSnapshot.data()

    return {
      redirect: {
        destination: data?.url || '/',
        permanent: false,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default function RedirectPage() {
  return null
}
