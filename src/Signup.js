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
    const [eye2, setEye2] = useState(false);
    const [passwordShown1, setPasswordShown1] = useState(false);
    const [eye1, setEye1] = useState(false);
    const [passMatch, setPassMatch] = useState('')
    const [passMatch1, setPassMatch1] = useState('')

    var lastEmailPart = newUser.substring(newUser.indexOf("@"))
    const signUp = e => {
        e.preventDefault();
        var truth = false;
        var passtruth = false;
        console.log(customersData1)
        customersData1.map(({ id, data }) => {
            console.log(data.email)
            console.log(newUser)
            // console.log(passMatch)
            // console.log(passMatch1)
            if (data.email === newUser) {
                truth = true;
                if (passMatch === passMatch1) {
                    passtruth = true;
                    console.log(data.email)
                    console.log(truth)
                    auth.createUserWithEmailAndPassword(
                        emailRef.current.value,
                        passwordRef.current.value
                    ).then(user => {
                        document.getElementById("mess").innerHTML = "";
                        console.log(user)

                    }).catch(err => {
                        console.log(err)
                    })
                    console.log("Document Exist");
                }
            }
            else {
                console.log("Document Doesn't Exist");
            }
            console.log(truth)
        })
        if (!truth) {
            // console.log(data.email)
            document.getElementById("mess1").innerHTML = "User not found";
        }
        else {
            // console.log(data.email)
            document.getElementById("mess1").innerHTML = "";
        }

        if (truth && !passtruth) {
            // console.log(data.email)
            document.getElementById("mess").innerHTML = "Password doesn't match";
        }
        if (truth && passtruth) {
            console.log(truth)
            document.getElementById("mess").innerHTML = "Can procced to Signin";
        }
    }


    useEffect(() => {
        db.collection("biz_tech").onSnapshot((snapshot) => {
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
            db.collection("biz_tech").add({
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
                        <input ref={emailRef} type="email" className="form-control" autocomplete="off" id="user-input" autofocus required onChange={addNewUser} />

                        <label className="floating-label">Email id</label>
                    </div>



                    <div className="floating-label-group">
                        <input ref={passwordRef} type={passwordShown1 ? "text" : "password"} onChange={updatePass1} className="form-control" autocomplete="off" id="user-input1" autofocus required />
                        <span className="eyeIcon">
                            <i className={` fa ${eye2 ? "fa-eye" : " fa-eye-slash"}`} onClick={togglePassword1} ></i>
                        </span>

                        <label className="floating-label"> Password</label>
                    </div>

                    <div className="floating-label-group">
                        <input type={passwordShown2 ? "text" : "password"} onChange={updatePass} className="form-control" autocomplete="off" id="user-input2" autofocus required />
                        <span className="eyeIcon">
                            <i className={` fa ${eye2 ? "fa-eye" : " fa-eye-slash"}`} onClick={togglePassword2} ></i>
                        </span>
                        <label className="floating-label">Confirm Password</label>
                    </div>


                </div>


                <button onClick={signUp} className="signup_link">Sign up</button>
                <h4 id="mess"></h4>
                <h4 id="mess1"></h4>

                <button className='back'><Link to="/" style={{ textDecoration: "none" }}>Back to SignIn</Link></button>
            </form >





        </div >
    )



}
export default Signup