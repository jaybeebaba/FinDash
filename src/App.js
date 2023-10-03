import './App.css';
import { UseAuthContext } from './hooks/UseAuthContext';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { Routes, Route, Navigate } from "react-router-dom"
import Login from './pages/login/Login';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Transactions from './pages/transactions/Transactions';
import Create from './pages/create/Create';
import Budgets from './pages/budgets/Budgets';
import Charts from './pages/charts/Charts';

function App() {
  const { user, authIsReady } = UseAuthContext()
  return (
    <div className="App">
      <>

        {
          authIsReady && (
            <>
            <Navbar />
            <div className="container">
            {user && <Sidebar />}
            <Routes>
              <Route  path="/signup" element={!user ? <SignUp /> : <Navigate to="/" replace={true} />} />
              <Route  path="/login" element={!user ? <Login /> : <Navigate to="/" replace={true} />} />
              <Route  path="/" element={user ? <Home /> : <Navigate to="/signup" replace={true} />} />
              <Route  path="/profile" element={user ? <Profile /> : <Navigate to="/signup" replace={true} />} />
              <Route  path="/transactions" element={user ? <Transactions /> : <Navigate to="/signup" replace={true} />} />
              <Route  path="/create" element={user ? <Create /> : <Navigate to="/signup" replace={true} />} />
              <Route  path="/budgets" element={user ? <Budgets /> : <Navigate to="/signup" replace={true} />} />
              <Route  path="/charts" element={user ? <Charts /> : <Navigate to="/signup" replace={true} />} />
            </Routes>
            
            </div>
            </>
            )}

      </>
    </div>
  );
}

export default App;
