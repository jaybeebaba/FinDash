import './App.css';
import { UseAuthContext } from './hooks/UseAuthContext';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import { Routes, Route, Navigate } from "react-router-dom"
import Login from './pages/login/Login';
import Navbar from './components/navbar/Navbar';

function App() {
  const { user, authIsReady } = UseAuthContext()
  return (
    <div className="App">
      <>

        {
          authIsReady && (
            <div className="container">
            <Navbar />
            <Routes>
              <Route exact path="/signup" element={!user ? <SignUp /> : <Navigate to="/" replace={true} />} />
              <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/" replace={true} />} />
              <Route exact path="/" element={user ? <Home /> : <Navigate to="/signup" replace={true} />} />
            </Routes>
            
            </div>
            )}

      </>
    </div>
  );
}

export default App;
