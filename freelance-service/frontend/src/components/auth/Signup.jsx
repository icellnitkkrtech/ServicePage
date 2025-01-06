import React,{useState} from 'react';
import './Auth.css';

function Signup() {
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const[validpassword,setValidity]= useState(false);
  const[touched , setTouched] = useState(false);
 
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if(!touched) setTouched(true)
    // Validation Rules
    const hasUppercase = /[A-Z]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasMinLength = value.length >= 6;
    
    if (!hasMinLength) {
      setWarning('Password must be at least 6 characters long');
      setValidity(false);
    } else if (!hasUppercase) {
      setWarning('Password must contain at least one uppercase letter');
      setValidity(false);
    } else if (!hasSpecialChar) {
      setWarning('Password must contain at least one special character');
      setValidity(false);
    } else {
      setWarning(''); // Clear warning if valid
      setValidity(true);
    }
  };
  const handleSignup = (e) => {
    e.preventDefault();
    alert('Signup functionality to be implemented');
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="email"  placeholder="Email or Phone Number" required />
        <input type="password" value={password}
        onChange={handlePasswordChange} placeholder="Password" required />
         {touched && warning && <p id="warning">{warning}</p>}
        <button type="submit" disabled = {!validpassword}>Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Signup;
