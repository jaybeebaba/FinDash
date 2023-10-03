import { NavLink } from "react-router-dom"
import { UseAuthContext } from "../../hooks/UseAuthContext"

// styles & images
import "./Sidebar.css"

export default function Sidebar() {

  const {user} = UseAuthContext()

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <nav className="links">
          <ul>
            <li>
              <NavLink  to="/">
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink  to="/profile">
                <span>Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink  to="/transactions">
                <span>Transactions</span>
              </NavLink>
            </li>
            <li>
              <NavLink  to="/create">
                <span>New Transaction</span>
              </NavLink>
            </li>
            <li>
              <NavLink  to="/budgets">
                <span>Budgets</span>
              </NavLink>
            </li>
            <li>
              <NavLink  to="/charts">
                <span>Charts</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}