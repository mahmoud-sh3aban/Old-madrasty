// OTPVerification.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Otp_Verfication.module.css';

const OTPVerification = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [isOtpValid, setIsOtpValid] = useState(true);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, i) => (i === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (otp.join('') === '123456') {
      setIsOtpValid(true);
      console.log(`OTP Submitted: ${otp.join('')}`);
    } else {
      setIsOtpValid(false);
    }
  };

  const handleResend = () => {
    console.log('Resend OTP');
  };

  return (
    <div className={styles['otp-container']}>
      <div className={styles['otp-card']}>
        <h2>Code Verification</h2>
        <p>Enter your 6 digits code that you received<br></br> on your email.</p>
        <form onSubmit={handleSubmit} className={styles['otp-form']}>
          <div className={styles['otp-inputs']}>
            {otp.map((data, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  name="otp"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  className={`${styles['otp-field']} ${!isOtpValid ? styles['invalid'] : ''}`}
                />
              );
            })}
          </div>
          {!isOtpValid && <p className={styles['error-msg']}>Invalid OTP, please try again.!</p>}
          <button type="submit" className={styles['submit-btn']}>
            Verify Code
          </button>
        </form>
        <Link to="#" onClick={handleResend} className={styles['resend-link']}>
          Resend Code
        </Link>
      </div>
    </div>
  );
};

export default OTPVerification;
