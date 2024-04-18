import React, { useState } from "react";
import "./Register.css";

import user_icon from '../../img/person.png';
import email_icon from '../../img/email.png';
import password_icon from '../../img/password.png';
import backgroundImage from "../../img/background.jpg";
import loginIcon from "../../img/login-icon.png";

const Register = () => {
    const [action, setAction] = useState("Sign Up");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleSignUp = () => {
        if (password === confirmPassword) {
            // Passwords match, proceed with signup
            // You can add your signup logic here
            console.log("Signing up...");
            setPasswordsMatch(true);
        } else {
            // Passwords do not match, set error message
            setPasswordsMatch(false);
        }
    };

    return (
        <div className='container'>
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
                {action === "Login" ? <div></div> : <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="User Name" />
                </div>}

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        placeholder="Re-Enter Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                {!passwordsMatch && (
                    <div className="error-message">
                    Passwords do not match
                </div>
                )}
            </div>

            <div className="submit-container">
                <div className="submit" onClick={handleSignUp}>Sign Up</div>
            </div>
        </div>
    )
}

export default Register;