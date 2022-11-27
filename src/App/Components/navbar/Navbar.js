import React, { useState } from "react";
import Divumlogo from "../../Assests/icons/divumlogo.svg"
import Notificationlogo from "../../Assests/images/Notification.svg";
import Profilepic from "../../Assests/images/profilepic.png";
import searchicon from "../../Assests/icons/Vector.png";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";
import Projectlogo from "../../Assests/images/Prologo.png"
import "../../stylesheets/variable.scss"

const Navbar = (props)=> {

  const[display,setDisplay]=useState(false)
  const navigate = useNavigate();
 
  return (
    <div>
    <div className="navbar-container">
      <div>
        <img
          className="navbar-container_Dashboardlogo"
          src={Projectlogo}
          alt="logo"
        />
        
      </div>
      <div className="navbar-container_inputbar">
        <img
          className="navbar-container_search-icon"
          src={searchicon}
          alt="seach-icon"
        />
        <input
          className="navbar-container_inputsearchbar"
          type="text"
          placeholder="Search or type"
          onChange={e=>props.setSearchItem(e.target.value)}
        />
      </div>
      <div className="navbar-container__rightelements">
        <span>
          <img
            className="navbar-container__bellicon"
            id="bellicon"
            src={Notificationlogo}
            alt="notification-icon"
          />
        </span>
        <span>
          <img
            className="navbar-container__profilepic"
            id="profile"
            src={Profilepic}
            alt="profile-icon"
            onClick={()=>setDisplay(!display)}

          />
        </span>
        <span style={{fontSize:"16px",fontWeight:"500",marginLeft:"1rem",fontFamily:"DMSans-Medium"}}>Admin</span>
        
      </div>


      
     
     
    </div>
  
    {display ?
      (
        <div className="Logout" onClick={() => navigate("/")}>
        <span className="Logout_head">Logout</span>
          </div>
      ):""}
      </div>
      
  
  );

  
}

export default Navbar;
