import React, { useState } from "react";

import Homepage from "../Pages/Homepage";
import Google from "../Assests/images/Google.png"
import facebook from "../Assests/images/facebook.png"
import twitter from "../Assests/images/twitter.png"
import Login from "../Assests/images/Login.svg"
import { useNavigate } from "react-router-dom";
import "./Login.scss"
import "../stylesheets/variable.scss"


const LoginPage = ()=>{

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const navigate = useNavigate();
  
  const handlechange=(e,id)=>{
  
  
  
    if(id==="username")
    {
      setUsername(e.target.value);
      console.log("asd",e.target.value)
  
      
    }
    if(id==="password")
    {
     setPassword(e.target.value);
    // }
    }
  }


  const handleSubmit=()=>{

   
    if(username==="test")
    {
        if(password==="1234")
        {
            navigate("/home")
            setUsername("");
            setPassword("");
            setError("");
        }
    }
    else{
     
        setError("Invalid Login Details")
    }

  }


  console.log("un",username);
 console.log("pw",password)

  return(
  <div className="Login">
     
     <div className="Login_image" >
        <img  classname="backgrounds"src={Login}></img>
     </div> 

     <div className="Login_form">
       <div className='Login_head'>
         <h2 className='head'>Welcome back :)</h2>
         <span className='subhead'>To keep connected with us please login personal infromation by email address and password</span>
         </div>

 
            <span className="Error">{error}</span>
         <div className='form'>
          
          <span className='title'>Login</span>

           <form>

            <label className="labelhead">Username</label>
            <input className='inputbox' type="text"  value={username} onChange={(e)=>handlechange(e,"username")}></input><br></br>
            <label className="labelhead">Password </label> 
            <input className='inputbox1' type="password"  value={password} onChange={(e)=>handlechange(e,"password")}></input>
           </form>
           
           <span className='forgetPassword'>Forget Password?</span>

           <div className='buttons'>
            <button className='Log'  onClick={()=>handleSubmit()}> 
              Login
            </button>
            <button className='CreateAcc'> 
              Create Account
            </button>


           </div>
           
           <div className='other'>
           <span style={{fontSize:"15px",fontFamily:"DMSans"}}> Or you can with</span>
           <div className='images'> 
            <img  className='google'  src={Google}></img>
            <img  className='google'  src={facebook}></img>
            <img  className='twitter'  src={twitter}></img>
            </div>
           </div>
         </div>
     </div>

    </div>
  )

}

export default LoginPage;