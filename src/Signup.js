import React, { useRef, useEffect, useState } from 'react'
import { auth } from './firebase';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import db from "./firebase1";
import "./signup.css"


const Signup = (props) => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const mySet = new Set()
    const [customersData1, setCustomersData1] = useState([]);
    const [newUser, setNewUser] = useState('');
    const [passwordShown2, setPasswordShown2] = useState(false);
    const [eye2, setEye2] = useState(true);
    const [passwordShown1, setPasswordShown1] = useState(false);
    const [eye1, setEye1] = useState(true);
    const [passMatch, setPassMatch] = useState('')
    const [passMatch1, setPassMatch1] = useState('')

    var lastEmailPart = newUser.substring(newUser.indexOf("@"))

    const signUp = e => {
        e.preventDefault();

        customersData1.map(({ id, data }) => {
            console.log(data.email)
            console.log(mySet)
            console.log(passMatch)
            console.log(passMatch1)
            if (data.email === newUser) {
                if (passMatch === passMatch1) {
                    console.log(data.email)
                    auth.createUserWithEmailAndPassword(
                        emailRef.current.value,

                        passwordRef.current.value
                    ).then(user => {
                        console.log(user)
                    }).catch(err => {
                        console.log(err)
                    })
                    console.log("Document Exist");
                }
                else {
                    document.getElementById("mess").innerHTML = "Password doesn't match";
                }
            }
            else {
                document.getElementById("mess1").innerHTML = "User not found";
                console.log("Document Doesn't Exist");
            }
        })

    }


    useEffect(() => {
        db.collection("add_user").onSnapshot((snapshot) => {
            setCustomersData1(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
    }, [])

    const [active, setActive] = useState("")

    const addUser = () => {
        if (!mySet.has(newUser) && lastEmailPart === "@upjao.ai") {
            mySet.add(newUser)
            db.collection("add_user").add({
                email: newUser,
            });
            console.log(mySet)
            console.log("User Added")
        }


    }
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

    const togglePassword2 = (e) => {
        e.preventDefault();
        setPasswordShown2(!passwordShown2);
        if (passwordShown2) {
            setEye2(false);

        }
        else {
            setEye2(true);
        }
    };

    function updatePass(e) {
        setPassMatch(e.target.value)
    }
    function updatePass1(e) {
        setPassMatch1(e.target.value)
    }






    return (
        <div className="signup">
            <form action="">
                <h1>Sign Up</h1>

                <div className="col-xs-4 col-xs-offset-4">
                    <div className="floating-label-group">
                        <input ref={emailRef} type="email" className="form-control" autocomplete="off" id="user-input" autofocus required />

                        <label className="floating-label">Email id</label>
                    </div>



                    <div className="floating-label-group">
                        <input ref={passwordRef} type={passwordShown1 ? "text" : "password"} onChange={updatePass1} className="form-control" autocomplete="off" id="user-input" autofocus required />
                        <i className={` fa ${eye1 ? "fa-eye" : " fa-eye-slash"}`} onClick={togglePassword1} style={{ position: "absolute", left: "9.6vw", top: "0.6vh" }}></i>

                        <label className="floating-label"> Password</label>
                    </div>

                    <div className="floating-label-group">
                        <input type={passwordShown2 ? "text" : "password"} onChange={updatePass} className="form-control" autocomplete="off" id="user-input" autofocus required />
                        <i className={` fa ${eye2 ? "fa-eye" : " fa-eye-slash"}`} onClick={togglePassword2} style={{ position: "absolute", left: "9.6vw", top: "0.6vh" }}></i>
                        <label className="floating-label">Confirm Password</label>
                    </div>


                </div>

                {/* <input ref={emailRef} type="email" /> */}
                {/* <div>
                    <input ref={passwordRef} type={passwordShown1 ? "text" : "password"} onChange={updatePass1} />
                    <i className={` fa ${eye1 ? "fa-eye" : " fa-eye-slash"}`} onClick={togglePassword1} style={{ position: "absolute", left: "53.5vw", top: "14.5vh" }}></i>
                </div>
                <div>
                    <input type={passwordShown2 ? "text" : "password"} onChange={updatePass} />
                    <i className={` fa ${eye2 ? "fa-eye" : " fa-eye-slash"}`} onClick={togglePassword2} style={{ position: "absolute", left: "64.6vw", top: "14.5vh" }}></i>
                </div> */}
                {/* <button onClick={togglePassword}>Show Password</button> */}
                <button onClick={signUp} className="signup_link">Sign up</button>
                <h4 id="mess"></h4>
                <h4 id="mess1"></h4>

            </form >
            <h1>Add User</h1>
            <input className="adduser" type="email" placeholder='Enter Email' onChange={addNewUser} />
            <div>
                <button onClick={addUser}>Add</button>
                <button><Link to="/" style={{ textDecoration: "none" }}>Back to SignIn</Link></button>
            </div>




        </div >
    )



}
export default Signup