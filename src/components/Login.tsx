import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import './login.css';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import DarkMode from './dmprovider';

export const Login: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const handleToggleForm = () => {
    setIsSignIn(prevState => !prevState);
  };

  const handleGoBack = () => {
    navigate("/", { state: { skipIntro: true } });
    setTimeout(() => {
      navigate("/", { state: { skipIntro: false } });
    }, 100); // Adjust this delay as needed
  };

  return (
    <div className={`container ${isSignIn ? '' : 'sign-up-mode'}`}>
      <button className="close-button" onClick={handleGoBack}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="login.php" className={`sign-in-form ${isSignIn ? 'active' : ''}`}>
            <h2 className="title">Sign in</h2>
            <div className="input-fieldz">
              <FontAwesomeIcon icon={faUser} style={{ marginTop: '20px', marginLeft: '10px' }} />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-fieldz">
              <FontAwesomeIcon icon={faLock} style={{ marginTop: '20px', marginLeft: '10px' }} />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>

          </form>
          <form action="signup.php" className={`sign-up-form ${isSignIn ? '' : 'active'}`}>
            <h2 className="title">Sign up</h2>
            <div className="input-fieldz">
              <FontAwesomeIcon icon={faUser} style={{ marginTop: '20px', marginLeft: '10px' }} />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-fieldz">
              <FontAwesomeIcon icon={faEnvelope} style={{ marginTop: '20px', marginLeft: '10px' }} />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-fieldz">
              <FontAwesomeIcon icon={faLock} style={{ marginTop: '20px', marginLeft: '10px' }} />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign up" className="btn" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Don't have an account yet? Sign up and get access to all our services.</p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleToggleForm}>Sign up</button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Already made an account here? Sign in and get access to all our services.</p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleToggleForm}>Sign in</button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};
