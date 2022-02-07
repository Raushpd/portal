import React, { useRef } from 'react'
import { auth } from '../firebase';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./ForgotPass1.css"

const ForgotPassword = () => {
    const emailRef = useRef(null);

    const forgot = e => {
        e.preventDefault();
        auth.sendPasswordResetEmail(
            emailRef.current.value
        ).then(user => {
            console.log("hiiii")
            console.log(emailRef.current.value)
            document.getElementById("mess").innerHTML = "Reset Password link sent."
        }).catch(err => {
            console.log(err)
        })
    }



    return (
        <div className="forgotpass">

            <form action="">
                <h1>Forgot Password</h1>
                <input ref={emailRef} type="email" />

                <button onClick={forgot} className="forgot_link">Reset Password</button>
                <h4 id='mess'></h4>
                <button><Link to="/" style={{ textDecoration: "none" }}>Back to SignIn</Link></button>
            </form>





        </div>
    )


}
export default ForgotPassword