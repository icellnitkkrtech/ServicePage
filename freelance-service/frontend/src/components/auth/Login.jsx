import React, { useState } from 'react';
import './Auth.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Login() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const[email_phone,sete_phone] = useState('');
  const [warning, setWarning] = useState('');
  const [isValid, setIsValid] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login functionality to be implemented');
  };

  const handleSocialLogin = (provider) => {
    alert(`Login with ${provider} functionality to be implemented`);
  };
  const handleInputChange = (e) => {

        const value = e.target.value;
        sete_phone(value);

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    const phonePattern = /^[0-9]{10}$/; // 10-digit phone number regex

    if (emailPattern.test(value)) {
      setWarning('');  
      setIsValid(true);
    } else if (phonePattern.test(value)) {
      setWarning('');  
      setIsValid(true);
    } else {
      setWarning('Please enter a valid email or phone number');
      setIsValid(false);
    }

  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
    setShowForgotPassword(false);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          value = {email_phone}
          onChange={handleInputChange}
          placeholder="Email or Phone Number" 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          required 
        />
        <div className="forgot-password">
          <button 
            type="button" 
            onClick={() => setShowForgotPassword(true)}
          >
            Forgot Password?
          </button>
        </div>
        {warning && <p id ="warning">{warning}</p>}
        <button type="submit" >Login</button>
      </form>
      
      <p>Or login with:</p>
      <div className="social-buttons">
        <button onClick={() => handleSocialLogin('Google')} className="social-btn google">
          <FontAwesomeIcon icon={faGoogle} className="icon" />
          Continue with Google
        </button>
        <button onClick={() => handleSocialLogin('Facebook')} className="social-btn facebook">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          Continue with Facebook
        </button>
        <button onClick={() => handleSocialLogin('Twitter')} className="social-btn twitter">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
          Continue with Twitter
        </button>
      </div>
      
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Reset Password</h3>
            <p>Enter your email address to receive a password reset link.</p>
            <input 
              type="email" 
              placeholder="Enter your email" required
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            <div className="modal-buttons">
              <button onClick={handleForgotPassword}>Send Reset Link</button>
              <button onClick={() => setShowForgotPassword(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
