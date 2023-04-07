import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './../CSS/Login.css';

function Login() {
  let navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    uid: '',
    password: '',
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handlSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:3001/auth/login', formData)
      .then((response) => {
        // let id = response.data.user.id;
        console.log(response);
        // axios.get(`http://localhost:3001/profile/${id}`).then((res) => {
        //   navigate('/', { state: { data: res } });
        // });
      });
  }

  return (
    <div className='login-page'>
      <div className='login-container '>
        <form>
          <br />
          <label>UID:</label>
          <br />
          <br />
          <input type='text' name='uid' onChange={handleChange} />
          <br />
          <br />
          <label>Password:</label>
          <br />
          <br />
          <input type='password' name='password' onChange={handleChange} />
          <br />
          <br />
          <button onClick={handlSubmit}>Login</button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default Login;
