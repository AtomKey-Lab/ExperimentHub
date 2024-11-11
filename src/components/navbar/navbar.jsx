import { NavLink } from 'react-router-dom';
import { headerdata } from '../../config/headerdata';
import logo from "./../../Assets/logo.jpg";
import './navbar.css';

const Header = ({ menuActive }) => {
  const data = headerdata || [];

  return (
    <div className='header-container'>
      <header className="header">
        <nav className="navbar">
          <div className="nav-logo">
            <NavLink to="/">
              <img
                src={logo || 'fallback-image.png'}
                alt="brand logo"
                className='brand-logo'
                
              />
            </NavLink>
            <p className='title'>AtomKey Lab</p>
          </div>

          <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
            {data.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.to}
                  style={({ isActive }) => ({
                    color: isActive ? 'black' : 'aquamarine',
                    transition: 'color 0.3s ease'
                  })}
                  className="nav"
                  aria-label={item.name}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <span className='login-button'>
              <NavLink
                to="/login"
                style={({ isActive }) => ({
                  color: isActive ? 'black' : 'aquamarine',
                  transition: 'color 0.3s ease'
                })}
                className="nav"
                aria-label="Login"
              >
                LogOut
              </NavLink>
            </span>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
