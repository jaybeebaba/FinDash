import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='nav'>
       <h1>FinDash</h1>
       <nav>
            <Link to="/login">Login</Link>       
            <Link to="/signup">Signup</Link>       
            <Link to="/logout">Logout</Link>  
            <p>Notification</p>     
       </nav>
    </div>
  )
}

export default Navbar