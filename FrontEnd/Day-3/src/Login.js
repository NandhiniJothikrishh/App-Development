import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
      const navigate=useNavigate();
    
      const [errors, setErrors] = useState({});
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      const validateForm = () => {
        const newErrors = {};
        if (!formData.username.trim()) {
          newErrors.username = 'Username is required';
        }
        if (!formData.password) {
          newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
          newErrors.password = 'Password must be at least 6 characters long';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
          // You can submit the form data to your server or perform other actions here.
          setIsSubmitted(true);
        }
      };
      const handleNavigate= () => {
        navigate("/sign");
      }
      const handleLogin=()=>{
        if(validateForm()===true){
          navigate("/Loginsuc")
        }
      }

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className='font'>Login</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button className='but1' type="submit" onClick={handleLogin}>Login</button>
        <h5> or</h5>
        <button className='but2' onClick={handleNavigate}> sign up </button>
      </form>
    </div>
  );
};

export default LoginForm;