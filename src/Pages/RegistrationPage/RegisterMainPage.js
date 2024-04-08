import React, {useState} from "react";
import "./Register.css";

import user_icon from '../../img/person.png';
import email_icon from '../../img/email.png';
import password_icon from '../../img/password.png';
import backgroundImage from "../../img/background.jpg";
import loginIcon from "../../img/login-icon.png";
const Register = () =>{
    const [action,setAction] = useState("Sign Up");
    return (
        <div className = 'container'>
            <div
            className="background-image"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            >

        </div>
        <div className="header">
        <div className="login-header">
          <img src={loginIcon} alt="Login Icon" className="login-icon" />
        </div>
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="User Name"/>
        </div>}

        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email"/>
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password"/>
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Re-Enter Password"/>
        </div>
        </div>
        
        <div className="submit-container">
            
            <div className="submit">Sign Up</div>
        
        </div>
    </div>
    )
}
export default Register;