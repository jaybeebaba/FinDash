import { useState } from 'react'
import { UseSignup } from '../../hooks/UseSignup'

// styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  const {signup, error, isPending} = UseSignup()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>sign up</h2>
      <label>
        <span>email:</span>
        <input
          required 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          required
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          required
          type="text" 
          onChange={(e) => setDisplayName(e.target.value)} 
          value={displayName}
        />
      </label>
      {error && <p className='error'>{error}</p>}
      {!isPending && <button className="btn">Sign up</button>}
      {isPending && <button className="btn" disabled>Loading</button>}
    </form>
  )
}