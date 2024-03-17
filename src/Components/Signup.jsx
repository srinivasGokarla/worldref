import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      setError('This email is already taken. Please use a different one.');
      return;
    }
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    navigate('/login');
  };

  return (
    <>
    <h1>Sign Up Page!</h1>
    <div className="login-container">
        
        <form onSubmit={handleSignup}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">SignUp</button>
        </form>
        <p>
          Have an account? <a href="/login">LogIn here</a>.
        </p>
      </div>
      
    </>
  );
};

export default Signup;
