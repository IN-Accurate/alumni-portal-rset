import '../CSS/Sidebar.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { BsPaperclip } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import axios from 'axios';

function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMoreGroups, setShowMoreGroups] = useState(true);
  const [showGroupsMenu, setShowGroupsMenu] = useState(false);
  const [groups, setGroups] = useState([]);
  const [avatar, setAvatar] = useState(true);
  const [postClicked, setPostClicked] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: '',
    title: '',
    text: '',
    image: null,
  });
  let location = window.location.pathname;

  const [titleCounter, setTitleCounter] = useState(0);
  const [textCounter, setTextCounter] = useState(0);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = (name === 'image') ? target.files[0] : target.value;
    
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData);

    if (name === 'title') {
      setTitleCounter(value.length);
    } else if (name === 'text') {
      setTextCounter(value.length);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData();
    // data.append('userId', formData.userId);
    // data.append('title', formData.title);
    // data.append('text', formData.text);
    // data.append('image', formData.image);
    const data = {
      userId: formData.userId,
      title: formData.title,
      text: formData.text,
      image: formData.image
    }
    console.log(data);
    axios
      .post('http://localhost:3001/home/newpost', data)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };
  function handleCreatePost() {
    setPostClicked(true);
  }
  function handleClosePost() {
    setPostClicked(false);
  }

  useEffect(() => {
    setIsLoggedIn(true);
    var data=JSON.parse(localStorage.getItem('user'));
    setGroups(data.user.groups);
    if (avatar === false) {
      let dpSelector = document.getElementById('nav-dp-cont');
      if (dpSelector != null) dpSelector.style.display = 'none';
      document.body.style.overflow = 'hidden';
    } else if (avatar === true) {
      let dpSelector = document.getElementById('nav-dp-cont');
      if (dpSelector != null) dpSelector.style.display = 'block';
    }
  }, [avatar]);
  console.log(groups)


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
            <li
              className='nav-li reg-nav-li'
              onClick={() => navigate('/register')}
            >
              Register
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
                      {groups.map((grp)=>{
                        return(<li>{grp}</li>)
                      })}
                    </ul>
                  )}
                </li>
                <button className='create-post-btn' onClick={handleCreatePost}>
                  Create Post
                </button>
              </>
            )}
          </ul>
        </div>
      )}
      {postClicked && (
        <div className='create-post-cont'>
          <AiOutlineClose className='close-icon' onClick={handleClosePost} />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='userId'>User ID:</label>
              <input
                type='text'
                id='userId'
                name='userId'
                value={formData.userId}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor='title'>Title:</label>
              <input
                type='text'
                id='title'
                name='title'
                maxLength='60'
                value={formData.title}
                onChange={handleInputChange}
                required
              />
              <span>{titleCounter}/60</span>
            </div>
            <div>
              <label htmlFor='text'>Text:</label>
              <textarea
                id='text'
                name='text'
                maxLength='3000'
                value={formData.text}
                onChange={handleInputChange}
                required
              />
              <span>{textCounter}/3000</span>
            </div>
            <div>
              <label htmlFor='image'>Image:</label>
              <div className='input-file'>
                <input
                  type='file'
                  id='image'
                  name='image'
                  accept='image/*'
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor='image'>
                  <BsPaperclip />
                </label>
              </div>
              {formData.image ? (
                <img src={URL.createObjectURL(formData.image)} alt='Uploaded' />
              ) : (
                <>
                  <span>No image uploaded</span>
                </>
              )}
            </div>
            <div>
              <button type='submit' className='btn-submit'>
                <FaLocationArrow />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
