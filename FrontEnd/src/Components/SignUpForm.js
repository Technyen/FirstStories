import React from "react";
import './SignUpForm.css';

const SignUpForm = ({ isShowSign }) => {

    return (
        <div className={'${!isShowSign ? "active":""}show'}>
            <div className="Sign-form">
                <div className="form-box solid">
                    <form>
                        <h1 className="sign-text">Sign Up</h1>
                        <label>UserName</label><br></br>
                        <input type=" text"
                            name="username"
                            className="sign-box" /><br></br>
                        <labe>Email</labe><br></br>
                        <input type="text"
                                name="email"
                                className="sign-box"/><br></br>
                        <label>Password</label><br></br>
                        <input type="password"
                            name="password"
                            className="sign-box" /><br></br>
                        <input type="submit" value="SIGN UP" className="login-btn" />
                    </form>
                </div>
            </div>
        </div>
    );

    }
export default SignUpForm;