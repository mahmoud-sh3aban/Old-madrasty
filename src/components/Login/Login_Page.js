import React, { Component } from 'react';
import './Login_Page.css';

const sliderImages = [
  'images/image_1.png',
  'images/image_2.png',
  'images/image_3.png',

];

class Login_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: { email: '', password: '' },
      currentSlide: 0,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      credentials: { ...prevState.credentials, [name]: value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', this.state.credentials);
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        currentSlide: (prevState.currentSlide + 1) % sliderImages.length,
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="login-slider-container">
        <div className="image-slider">
          {sliderImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className={`slide ${index === this.state.currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>

        <div className="login-container">
          <div className="logo">
            {/* Insert your logo here */}
          </div>
          <h2>Welcome To Madrasty</h2>
          <form onSubmit={this.handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Login</label>
              <input
                id="email"
                type="text"
                name="email"
                placeholder="Enter email or national ID"
                value={this.state.credentials.email}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                value={this.state.credentials.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-footer">
              <a href="/forgot-password">Forgot password?</a>
              <button type="submit" className="login-button">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login_page;
