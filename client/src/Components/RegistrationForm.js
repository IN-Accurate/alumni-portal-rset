import React from "react";
import '../CSS/RegistrationForm.css';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import { useEffect } from "react";

function RegistrationForm(){
    const [formData, setFormData] = React.useState(
        {
            email: "",
            uid: "",
            phone: 0,
            name: "",
            password: "",
            branch: "",
            year: "",
        }
    )

    const { name, email, password, uid, phone, branch, year } = formData

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

    function handleChange(event){
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [event.target.name]:event.target.value
            }
        })
    }
    function onSubmit(event) {
            event.preventDefault();
            const userData = {
                email,
                uid,
                phone,
                name,
                password,
                branch,
                year
              }
        
            dispatch(register(userData))
    }    

    const today = new Date();
    const latest_passout = today.getFullYear();
    const first_passout=2005;
    const years=[];
    const branches=["CSE","Mechanical","Civil","Electrical","Electronics"];
    for(let i=first_passout;i<=latest_passout;i++)
        years.push(i);
    const getyears=years.map(year=>{
        return(<option value={year}>{year}</option>)});
    const getbranches=branches.map(branch=>{
        return(<option value={branch}>{branch}</option>)});
    return(
        <>
        <div className="register-container">
        <form className="register-form">
            <h2>SIGN UP</h2>
            <label>Email</label><br/>
            <input type="text" name="email" className="reg-input" onChange={handleChange}></input><br/><br/>
            <label>UID</label><br/>
            <input type="text" name="uid" className="reg-input" onChange={handleChange}></input><br/><br/>
            <label>Phone</label><br/>
            <input type="number" name="phone" className="reg-input" onChange={handleChange}></input><br/><br/>
            <label>Username</label><br/>
            <input type="text" name="name" className="reg-input" onChange={handleChange}></input><br/><br/>
            <label>Password</label><br/>
            <input type="password" name="password" className="reg-input" onChange={handleChange}></input><br/><br/>
            <select name="branch" id="branch" className="reg-input" onChange={handleChange}>
                <option>Branch</option>
                {getbranches}
            </select> <br/><br/>
            <select name="year" id="year" className="reg-input" onChange={handleChange}>
                <option>Year</option>
                {getyears}
            </select><br/><br/>
            <button className="reg-button" onClick={onSubmit}>Register</button><br/><br/>
        </form>
        </div>
        </>
    )

}

export default RegistrationForm;