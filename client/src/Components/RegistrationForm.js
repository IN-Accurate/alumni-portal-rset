import React from "react";
import axios from "axios";
import '../CSS/RegistrationForm.css';

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
            axios.post("http://localhost:3001/auth/register",formData).then((response) => {
              console.log(response)
            });
    }    
    console.log(formData);

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
        <div className="register_container">
        <div className="nav">
        <h2>SIGN UP</h2>
        </div>
        <form className="register-form">
            <label>Email</label><br/>
            <input type="text" name="email" onChange={handleChange}></input><br/><br/>
            <label>UID</label><br/>
            <input type="text" name="uid" onChange={handleChange}></input><br/><br/>
            <label>Phone</label><br/>
            <input type="number" name="phone" onChange={handleChange}></input><br/><br/>
            <label>Username</label><br/>
            <input type="text" name="name" onChange={handleChange}></input><br/><br/>
            <label>Password</label><br/>
            <input type="password" name="password" onChange={handleChange}></input><br/><br/>
            <select name="branch" id="branch" onChange={handleChange}>
                <option>Branch</option>
                {getbranches}
            </select> <br/><br/>
            <select name="year" id="year" onChange={handleChange}>
                <option>Year</option>
                {getyears}
            </select><br/><br/>
            <button onClick={onSubmit}>Submit</button><br/><br/>
        </form>
        </div>
    )

}

export default RegistrationForm;