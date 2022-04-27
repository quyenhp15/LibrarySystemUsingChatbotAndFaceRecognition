import React from "react";
import './LoginScreen.css'
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {

    let navigate = useNavigate();
    // Check if user login or not
    function handleClickSignIn() {
        localStorage.setItem("accessToken", true)
        navigate('/homepage');
    }
    function handleClickSignUp() {
        navigate('/register')
    }

    return (
        <div className="register-page">

            <div className="header-title">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">SERVICE</a></li>
                    <li><a href="#">ACCOUNT</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
            <div className="header-bar">

            </div>
            <div className="form__sign-up">
                <div className="signIn__title">
                    <h1>Sign In</h1>
                </div>
                <input placeholder="Your user name...." className="input__user-name" />
                <input placeholder="Your password...." className="input__password" />
                <button type="button" onClick={handleClickSignIn} className="btn_sign-in">
                    Sign In
                </button>
                <div className="remember-area">
                    <input
                        style={{
                            marginTop: "15px",
                            marginLeft: "5px",
                            marginRight: "5px",
                            cursor: "pointer",
                        }}
                        type="checkbox"
                    />
                    <p>Remember me</p>
                    <p style={{ marginLeft: "17%", cursor: "pointer" }} onClick={handleClickSignUp}>
                        Sign Up Now?
                    </p>

                </div>
            </div>

        </div>
    )
}

export default LoginScreen