import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import '../CSS/Navbar.css';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMoreGroups, setShowMoreGroups] = useState(true);
  const [showGroupsMenu, setShowGroupsMenu] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <nav>
      <Hamburger toggled={isOpen} toggle={setOpen} direction='right' />
      {isOpen && (
        <ul>
          <li className='nav-li home-nav-li' onClick={() => navigate('/home')}>
            Home
          </li>
          <li
            className='nav-li login-nav-li'
            onClick={() => navigate('/login')}
          >
            Login
          </li>
          {isLoggedIn && (
            <li>
              <span
                className='nav-li group-nav-li'
                onClick={() => setShowGroupsMenu(!showGroupsMenu)}
              >
                Groups
                {!showGroupsMenu && (
                  <BsCaretDownFill className='group-nav-li-icon' />
                )}
                {showGroupsMenu && (
                  <BsCaretUpFill className='group-nav-li-icon' />
                )}
              </span>
              {showGroupsMenu && (
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  {!showMoreGroups && (
                    <>
                      <li>4</li>
                      <li>5</li>
                      <li>5</li>
                      <li>6</li>
                      <li>7</li>
                    </>
                  )}
                  <li onClick={() => setShowMoreGroups(!showMoreGroups)}>
                    {showMoreGroups && <p>Show more</p>}
                    {!showMoreGroups && <p>Show less</p>}
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
