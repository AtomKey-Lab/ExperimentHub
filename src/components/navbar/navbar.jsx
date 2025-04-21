import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { headerdata } from '../../config/headerdata';
import logo from "./../../Assets/logo.jpg";
import './navbar.css';

const Header = ({ menuActive }) => {
  const data = headerdata || [];
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const checkLoginStatus = () => {
      const userEmail = localStorage.getItem('userEmail');
      const storedUserName = localStorage.getItem('userName');

      if (userEmail) {
        setIsLoggedIn(true);
        setUserName(storedUserName || "User");
      } else {
        setIsLoggedIn(false);
        setUserName("");
      }
    };

    checkLoginStatus(); // Run on mount

    // Listen for custom login event
    window.addEventListener("loginStatusChanged", checkLoginStatus);

    // Cleanup
    return () => {
      window.removeEventListener("loginStatusChanged", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className='header-container'>
      <header className="header">
        <nav className="navbar">
          <div className="nav-logo">
            <NavLink to="/">
              <img src={logo || 'fallback-image.png'} alt="brand logo" className='brand-logo' />
            </NavLink>
            <p className='title'>AtomKey Lab</p>
          </div>

          <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
            {data.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.to}
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? 'black' : 'aquamarine',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease, font-size 0.3s ease'
                  })}
                  aria-label={item.name}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {isLoggedIn ? (
            <div className="nav-actions">
              <NavLink 
                to="/profile" 
                className="profile-link"
                aria-label="Profile"
                style={{ textDecoration: 'none' }}
              >
                {userName ? `Hi, ${userName}` : 'Profile'}
              </NavLink>

              <button onClick={handleLogout} className="logout-button">Log Out</button>
            </div>
          ) : (
            <span className='login-button'>
              <NavLink
                to="/login"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? 'black' : 'aquamarine',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease, font-size 0.3s ease'
                })}
                aria-label="Login"
              >
                Log In
              </NavLink>
            </span>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
