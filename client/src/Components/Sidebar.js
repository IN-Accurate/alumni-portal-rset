import '../CSS/Sidebar.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMoreGroups, setShowMoreGroups] = useState(true);
  const [showGroupsMenu, setShowGroupsMenu] = useState(false);
  const [avatar, setAvatar] = useState(true);
  let location = window.location.pathname;
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoggedIn(true);
    if (avatar === false) {
      let dpSelector = document.getElementById('nav-dp-cont');
      if (dpSelector != null) dpSelector.style.display = 'none';
      document.body.style.overflow = 'hidden';
    } else if (avatar === true) {
      let dpSelector = document.getElementById('nav-dp-cont');
      if (dpSelector != null) dpSelector.style.display = 'block';
    }
  }, [avatar]);
  const handleHBclick = () => {
    setAvatar(!avatar);
    let homeSelector = document.getElementById('home-bot');
    if (homeSelector.style.left === '15vw') homeSelector.style.left = '0vw';
    else homeSelector.style.left = '15vw';
    setOpen(!isOpen);
  };
  return (
    <div className='side-cont'>
      <Hamburger
        className='hb-icon'
        toggled={isOpen}
        toggle={handleHBclick}
        direction='left'
        color='#FAF7F0'
        easing='ease-in-out'
        rounded
        hideOutline={true}
        duration={0.47}
        size={42}
      />
      {isOpen && (
        <div className='side-nav-menu'>
          {' '}
          <Hamburger
            className='hb-icon'
            toggled={isOpen}
            toggle={handleHBclick}
            direction='left'
            color='#FAF7F0'
            easing='ease-in-out'
            rounded
            hideOutline={true}
            duration={0.47}
            size={42}
          />
          <ul>
            {location !== '/' && (
              <li className='nav-li home-nav-li' onClick={() => navigate('/')}>
                Home
              </li>
            )}
            <li
              className='nav-li login-nav-li'
              onClick={() => navigate('/login')}
            >
              Login
            </li>
            {isLoggedIn && (
              <>
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
                <button className='create-post-btn'>Create Post</button>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
