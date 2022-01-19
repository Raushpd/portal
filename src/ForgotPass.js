import React, { useRef } from 'react'
import { auth } from './firebase';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const ForgotPassword = () => {
    const emailRef = useRef(null);

    const forgot = e => {
        e.preventDefault();
        auth.sendPasswordResetEmail(
            emailRef.current.value
        ).then(user => {
            console.log("hiiii")
            console.log(user)
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

            </form>

            <button><Link to="/signin" style={{ textDecoration: "none" }}>Back to SignIn</Link></button>




        </div>
    )


}
export default ForgotPassword