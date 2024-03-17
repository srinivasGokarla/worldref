import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const navigate = useNavigate();
  const { authState, loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      loginUser(user.token);
      navigate('/');
    } else {
      setError('Invalid email or password');
      alert("Email and password are invalid. If you don't have an account, please sign up.");
    }
  };

  if (authState.isAuth) {
    navigate('/');
  }

  return ( 
  <>
  <h1>Login Page!</h1>
  <div className="login-container">
      
      <form data-cy="login-form"  onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input 
          data-cy="login-email"
          type="email"
           value={email}
           placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input 
          type="password"
          data-cy="login-password"
          placeholder="Enter Password"
           value={password}
            onChange={(e) => setPassword(e.target.value)}
             />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
          Don't have an account? <a href="/signup">SignUp here</a>.
        </p>
    </div>
   
  </>
  
  );
};
