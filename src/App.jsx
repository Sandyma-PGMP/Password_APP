import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import Signup from "./Pages/SignUp";
import './App.css'

function App() {
 

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
