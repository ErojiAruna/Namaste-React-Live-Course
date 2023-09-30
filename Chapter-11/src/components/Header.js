import { useState, useContext } from 'react';
import Logo from '../assets/tasty-delights.png';
import { Link } from 'react-router-dom';
import useOnline from '../../utils/useOnline';
import userContext from '../../utils/userContext';

const loggedInUser = () => {
  // API call to check authentication
  return false;
};

const Title = () => (
  <a href="/">
    <img alt="Tasty Delights Logo" className="h-28 p-2" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(userContext);

  return (
    <div className="flex justify-between bg-pink-50">
      <Title />

      <div className="nav__items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">Cart</li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? '✅' : '🔴'}</h1>
      <span className="p-10 font-bold text-red-900">{user?.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
