import { Link } from 'react-router-dom'
import { UseLogout } from '../../hooks/UseLogout'
import { UseAuthContext } from "../../hooks/UseAuthContext"


// styles & images
import './Navbar.css'

export default function Navbar() {
  const { logout, isPending } = UseLogout()

  const {user} = UseAuthContext()

  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <span>FinDash</span>
        </li>
        {
          !user &&
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        }

        {
          user &&
          <>
            <li style={{marginRight:"20px"}}>Hi, {user.displayName}</li>
            <li>
              {!isPending && <button className="btn" onClick={logout}>Logout</button>}
              {isPending && <button className="btn" disabled>Logging out</button>}
            </li>
            
          </>
        }

      </ul>
    </nav>
  )
}