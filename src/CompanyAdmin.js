import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CompanyAdmin1 from './CompanyAdmin1'
import './compstyle.css'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import db from "./firebase1";


function CompanyAdmin(props) {
    // const [mail, setMail] = useState("")
    var mail = props.mail
    var email = props.email

    // setMail(props.mail)
    console.log(mail)
    console.log(email)
    const [active, setActive] = useState("home")
    const [userPresent, setUserPresent] = useState([]);
    useEffect(() => {
        db.collection("biz_tech").onSnapshot((snapshot) => {
            setUserPresent(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data1: doc.data()
                }))
            )
        })
    }, [])
    var bizTruth = false;
    var techTruth = false;
    return (
        <div id="main1">

            <div id="section">
                {/* <div className='fixedButton'>
                    <button style={{ display: 'flex', justifyContent: 'center' }} onClick={() => setActive("home")}>Internal Portal</button>
                    <button style={{ display: 'flex', justifyContent: 'center' }} onClick={() => setActive("company")}>Company</button>
                </div> */}
                {/* <button onClick={() => setActive("test")}>Test</button */}

            </div>

            <div className='component'>
                {userPresent?.map(({ id, data1 }) => {
                    if (data1.email === email) {
                        console.log(data1.email + "----" + email)
                        if (data1.type === "tech") {
                            techTruth = true;
                        }
                        // if (data1.type === "Biz") {
                        //     bizTruth = true;
                        // }
                    }

                }
                )}
                {techTruth ? <Home mail={mail} /> : <CompanyAdmin1 mail={mail} />}
                {/* {bizTruth ? <CompanyAdmin1 mail={mail} /> : <Home mail={mail} />} */}

                {/* <CompanyAdmin1 mail={mail} /> */}
                {/* {active === "test" && <Test />} */}
            </div>




        </div>
    )
}

export default CompanyAdmin
