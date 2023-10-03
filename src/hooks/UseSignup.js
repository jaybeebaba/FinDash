import { useState, useEffect } from 'react'
import { projectAuth, projectFireStore} from "../config/FirebaseConfig"
import { UseAuthContext } from './UseAuthContext'

export const UseSignup = () => {
  const [isCancelled, setIsCancelled] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = UseAuthContext()

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      // add display name to user
      await res.user.updateProfile({ displayName })

      // creating user document

      await projectFireStore.collection("users").doc(res.user.uid).set({
        displayName
      })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

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

  return { signup, error, isPending }
}