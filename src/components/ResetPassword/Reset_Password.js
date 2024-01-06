import React, { useState } from 'react';
import './Reset_Password.css';
import {FaEye} from 'react-icons/fa';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  const updatePassword = () => {
   
    setMessage('Password updated successfully!');
    setPasswordUpdated(true);
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'newPassword') {
      setShowNewPassword(!showNewPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleBackToLogin = () => {
   
    console.log('Back to Login');
  };

  return (
    <div className="container">
      {!passwordUpdated ? (
        <>
          <h2>Reset Your Password</h2>
          <p className="subtext">
            Create a new password for your account to regain <br />access and unlock all features.
          </p>
          <form>
            <div className="label-input-group">
              <label htmlFor="newPassword">Enter new password</label>
              <div className="input-group">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  id="newPassword"
                  name="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
                <span
                  className="icon"
                  onClick={() => togglePasswordVisibility('newPassword')}
                >
                  {<FaEye/>}
                </span>
              </div>
            </div>

            <div className="label-input-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <div className="input-group">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Confirm Password"
                />
                <span
                  className="icon"
                  onClick={() => togglePasswordVisibility('confirmPassword')}
                >
                      {<FaEye/>}
                </span>
              </div>
            </div>

            <button type="button" onClick={updatePassword}>
              Update Password
            </button>
          </form>
          {message && <div className="message">{message}</div>}
        </>
      ) : (
        <div className='updated_password'>
         <svg xmlns="http://www.w3.org/2000/svg" width="75" height="76" viewBox="0 0 75 76" fill="none">
<path d="M16.7533 7.83058C11.9113 8.40307 8.03543 12.4458 7.4752 17.513C5.97027 31.1246 5.97027 44.8754 7.4752 58.487C8.03543 63.5542 11.9112 67.5969 16.7533 68.1694C29.3483 69.6585 42.3782 69.6585 54.9732 68.1694C59.8153 67.5969 63.6911 63.5542 64.2513 58.487C65.3327 48.7067 65.637 38.8545 65.1644 29.0337C65.1522 28.7801 65.2418 28.5327 65.4115 28.3532L69.8066 23.7038C70.3153 23.1656 71.1845 23.5022 71.2385 24.2611C72.068 35.9202 71.8401 47.6425 70.5549 59.267C69.6459 67.4889 63.4056 73.928 55.6781 74.8416C42.6147 76.3861 29.1119 76.3861 16.0484 74.8416C8.32099 73.928 2.08069 67.4889 1.17166 59.267C-0.390554 45.1371 -0.390554 30.8629 1.17166 16.733C2.08069 8.51112 8.32099 2.07201 16.0484 1.15839C29.1119 -0.386129 42.6147 -0.386129 55.6781 1.15839C58.3997 1.48017 60.9369 2.48736 63.1216 4.01646C63.5515 4.31734 63.5941 4.95666 63.2296 5.34224L59.8326 8.93581C59.5548 9.22976 59.1238 9.2792 58.7774 9.08286C57.6206 8.42717 56.3351 7.9916 54.9732 7.83058C42.3782 6.34145 29.3483 6.34145 16.7533 7.83058Z" fill="#61FF2A"/>
<path d="M74.0706 11.2808C75.3098 9.96988 75.3098 7.84443 74.0706 6.53349C72.8313 5.22255 70.8221 5.22255 69.5829 6.53349L33.7477 44.4422L23.2985 33.3884C22.0593 32.0775 20.0501 32.0775 18.8109 33.3884C17.5716 34.6994 17.5716 36.8248 18.8109 38.1358L31.5039 51.5632C32.7431 52.8742 34.7523 52.8742 35.9915 51.5632L74.0706 11.2808Z" fill="#61FF2A"/>
</svg>
                  <h2 style={{textAlign:'center'}}>Password Updated<br></br> Successfully </h2>
          <p className="success-message">Success! Your password has been updated.</p>
          <button type="button" onClick={handleBackToLogin}>
            Back to Login
          </button>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
