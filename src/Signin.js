import React, { useRef, useState, useEffect } from 'react'
import { auth } from './firebase';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Signup from './Signup';
import ForgotPassword from './comp/ForgotPass1';
import db from "./firebase1";
import './Signin.css'

const Signin = () => {
    const [customersData1, setCustomersData1] = useState([]);
    const [userPresent, setUserPresent] = useState([]);
    const [check, setCheck] = useState('');
    const [passwordShown1, setPasswordShown1] = useState(false);
    const [eye1, setEye1] = useState(false);

    const [newUser, setNewUser] = useState('');
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    function addNewUser(e) {
        setNewUser(e.target.value);
        console.log(newUser)

    }
    const togglePassword1 = (e) => {
        e.preventDefault();
        setPasswordShown1(!passwordShown1);
        if (passwordShown1) {
            setEye1(false);

        }
        else {
            setEye1(true);
        }
    };

    useEffect(() => {
        // db.collection("biz_tech").onSnapshot((snapshot) => {
        //     setCustomersData1(
        //         snapshot.docs.map((doc) => ({
        //             id: doc.id,
        //             data: doc.data()
        //         }))
        //     )
        // })
        db.collection("biz_tech").onSnapshot((snapshot) => {
            setCustomersData1(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
    }, [])

    var text = document.getElementById("mess");
    var biz_tech_mess = document.getElementById("biz_tech_mess");
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var currTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var currDate = date + " " + currTime;
    var count = 0;
    const signIn = e => {
        e.preventDefault();
        var truth = false;
        customersData1.map(({ id, data }) => {
            // console.log(data.email)
            // console.log(newUser)
            if (data.email === newUser) {
                truth = true;
                auth.signInWithEmailAndPassword(
                    emailRef.current.value,
                    passwordRef.current.value
                ).then(user => {
                    console.log(userPresent)

                    // console.log("hiui")
                    navigate("/company")
                    truth = true;
                    console.log(user)
                })
                    .catch(err => {
                        text.innerHTML = "Wrong Password"
                        console.log(err)
                    })
            }

        })
        if (!truth) {
            text.innerHTML = "No user Found";
        }
        else {
            text.innerHTML = "";
        }
    }
    function change(event) {
        if (event.target.value !== "Select Tech/Biz") {
            setCheck(event.target.value);
            console.log(check)
        }
    }

    return (


        <div className="signin">


            <form action="">
                <h1>Sign in</h1>
                <div className='input'>
                    {/* <input ref={emailRef} type="email" onChange={addNewUser} /> */}



                    <div className="col-xs-4 col-xs-offset-4">
                        <div className="floating-label-group">
                            <input id="company-input" type="text" className="form-control" autocomplete="off" ref={emailRef} type="email" onChange={addNewUser} autofocus required="required"
                            />

                            <label className="floating-label">Email Id</label>
                        </div>


                    </div>

                    <div className="col-xs-4 col-xs-offset-4">
                        <div className="floating-label-group">
                            <input ref={passwordRef} type="password" type={passwordShown1 ? "text" : "password"} autocomplete="off" id="user-input1" autofocus required
                            />
                            <span>
                                <i className={` fa ${eye1 ? "fa-eye" : " fa-eye-slash"}`} onClick={togglePassword1} ></i>
                            </span>
                            <label className="floating-label">Password</label>
                        </div>


                    </div>

                </div>

                <div className="col-xs-4 col-xs-offset-4">

                    <button onClick={signIn}>Sign In</button>

                    <h4 id="mess"></h4>

                    <h6>Not yet register?
                        <button style={{ marginLeft: "10px" }}><Link to="/signup" style={{ textDecoration: "none" }}>Sign Up</Link></button></h6>
                    <button><Link to="/forgotpass" style={{ textDecoration: "none" }}>Forgot Password</Link></button>
                </div>
            </form>

        </div >
    )
}

export default Signin