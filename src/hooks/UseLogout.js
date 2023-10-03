import { useEffect, useState } from 'react'
import { projectAuth, projectFireStore } from '../config/FirebaseConfig'
import { UseAuthContext } from './UseAuthContext'

export const UseLogout = () => {
  const [isCancelled, setIsCancelled] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = UseAuthContext()
  
  const logout = async () => {
    setError(null)
    setIsPending(true)

    try {
      // sign the user out
      await projectAuth.signOut()
      
      // dispatch logout action
      dispatch({ type: 'LOGOUT' })

      // update state
      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      } 
    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled("")
  }, [])

  return { logout, error, isPending }
}