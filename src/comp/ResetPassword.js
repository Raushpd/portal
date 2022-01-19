import React, { useRef, useEffect } from 'react'
import { auth } from '../firebase';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const ResetPassword = (location) => {

    const password = useRef(null);
    const oobCode = useRef(null);
    const reset = ({ password }) => {
        const query = new URLSearchParams(location.search);

        // e.preventDefault();
        auth.confirmPasswordReset(
            oobCode.current,
            password

        ).then(user => {
            console.log("hiiii")
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);

        oobCode.current = queryParams.get("oobCode");


    }, []);



    return (
        <div className="resetpass">

            <form action="">
                <h1>Forgot Password</h1>
                <input ref={password} type="password"></input>
                <button onClick={reset} className="reset_link">Reset Password</button>

            </form>

            <button><Link to="/signin" style={{ textDecoration: "none" }}>Back to SignIn</Link></button>




        </div>
    )


}
export default ResetPassword