import { useState, useEffect } from 'react'
import { projectAuth, projectFireStore } from '../config/FirebaseConfig'
import { UseAuthContext } from './UseAuthContext'

export const UseLogin = () => {
  const [isCancelled, setIsCancelled] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = UseAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)
  
    try {
      // login
      const res = await projectAuth.signInWithEmailAndPassword(email, password)

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

  return { login, isPending, error }
}