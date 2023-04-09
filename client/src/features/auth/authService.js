import axios from 'axios'

// Register user
const register = async (userData) => {
  const response = await axios.post("http://localhost:3001/auth/register", userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post('http://localhost:3001/auth/login', userData)

  if (response.data) {
    let id = response.data.user._id;
    console.log(response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data))
    axios.get(`http://localhost:3001/profile/${id}`, response.data).then((res) => {
      console.log(res)
    });
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService