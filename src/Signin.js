import React, { useRef } from 'react'
import { auth } from './firebase';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from './Signup';
import ForgotPassword from './comp/ForgotPass1';

const Signin = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    var errorText = ""
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log("hiui")
            errorText = "userFound"
        }).catch(err => {
            errorText = "notfound"
            // console.log(errorText)
            document.getElementById("mess").innerHTML = "Envalid Email";
            console.log(err)
        })
    }

    return (


        <div className="signin">


            <form action="">
                <h1>Sign in</h1>
                <input ref={emailRef} type="email" />
                {/* {
                    errorText === "no_user" : (<h1>Envalid Email</h1>) 
                } */}

                <input ref={passwordRef} type="password" />
                <button onClick={signIn} ><Link to="/company" style={{ textDecoration: "none" }}>Sign In</Link></button>
                {/* {(() => {
                    if (errorText === "notfound") {
                        return (
                            <h4>Envalid Email Id</h4>
                        )
                    }
                })()} */}
                <h4 id="mess"></h4>

                <h6>Not yet register?
                    <button><Link to="/signup" style={{ textDecoration: "none" }}>Sign Up</Link></button></h6>
                <button><Link to="/forgotpass" style={{ textDecoration: "none" }}>Forgot Password</Link></button>
            </form>

        </div >
    )
}
export default Signin