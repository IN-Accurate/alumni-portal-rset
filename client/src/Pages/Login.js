import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'
import { useEffect } from 'react';
import { toast } from 'react-toastify'
import './../CSS/Login.css';

function Login() {

  const [formData, setFormData] = React.useState({
    uid: '',
    password: '',
  });

  const { uid, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    )

    useEffect(() => {
      if (isError) {
        toast.error(message)
      }
  
      if (isSuccess || user) {
        navigate('/')
      }
  
      dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

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

    const userData = {
      uid,
      password
    }

  dispatch(login(userData))
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
