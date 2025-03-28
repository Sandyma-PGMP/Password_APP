import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Styles/Auth.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://passwordapp-server.onrender.com/auth/create-user", { email, password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Error creating account");
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <label>Password</label>
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        <Link to="/forgot-password" className="link">Forgot Password?</Link>
      </p>
    </div>
  );
}

export default Signup;