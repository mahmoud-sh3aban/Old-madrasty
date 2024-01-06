import React, { useState, useEffect } from 'react';
import './Login_Page.css';

const sliderImages = [
  'images/image_1.png',
  'images/image_2.png',
  'images/image_3.png',
];

const Login_page = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [currentSlide, setCurrentSlide] = useState(0);

  // handleInputChange function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  // handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = credentials;
    const alertMessage =
      email === '' && password === ''
        ? 'Please Enter Your Email and Password'
        : email === ''
        ? 'Please Enter Your Email'
        : password === ''
        ? 'Please Enter Your Password'
        : 'Login Successfully';
  
    alert(alertMessage);
  
    console.log('Login attempt with:', credentials);
    setCredentials({ email: '', password: '' });
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="login-slider-container">
      <div className="image-slider">
        {sliderImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="login-container">
        <div className="logo">
        </div>
        <h2>Welcome To Madrasty</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Login</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Enter email or national ID"
              value={credentials.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              value={credentials.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-footer">
            <a href="/forgot-password">Forgot password?</a>
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login_page;
