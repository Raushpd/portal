import React, { useState, useEffect, useRef } from "react";
import db from "./firebase1";
import Popup from "reactjs-popup";
import { auth } from './firebase';
import { Link, useNavigate, useLocation } from "react-router-dom";
import './compAdmin.css'
import { collection } from "firebase/firestore";

// import { useHistory } from 'react-router-dom'


function CompanyAdmin1(props) {
    const [locationKeys, setLocationKeys] = useState([])
    const navigate = useNavigate()




    const [company, setCompany] = useState('');
    const [data1, setData1] = useState([]);
    const [logData, setLogData] = useState([]);
    const [newCompany, setNewCompany] = useState("")
    const [newCompanyType, setNewCompanyType] = useState("")
    const [user, setUser] = useState('');
    const [user1, setUser1] = useState([]);
    const [newUser, setNewUser] = useState("")
    const [email, setEmail] = useState('');
    const [email1, setEmail1] = useState([]);
    const [newEmail, setNewEmail] = useState("")
    const [newType, setNewType] = useState("")
    const [currentUser, setCurrentUser] = useState("");
    const [add, setAdd] = useState("")
    const [isOpen, setIsOpen] = useState(false);
    const [value1, setValue1] = useState('');
    const [companyType, setCompanyType] = useState([]);
    const [customerpause, setCustomerPause] = useState("");
    const [customerreactivate, setCustomerReactivate] = useState("");

    // console.log(currentUser)
    function newCompTypeInput(e) {
        setNewCompany(e.target.value);
        // console.log(newCompany)

    }




    function company_drop(event) {
        if (event.target.value !== "Select") {
            setCompany(event.target.value);
        }
    }

    function newUserInput(e) {
        setNewUser(e.target.value);
        // console.log(newUser)

    }
    function newCompInput(e) {
        setNewCompany(e.target.value);
        // console.log(newCompany)

    }
    function newEmailInput(e) {
        setNewEmail(e.target.value);
        // console.log(newEmail)

    }
    const currentURL = window.location.href



    // console.log(currentURL)


    useEffect(() => {
        db.collection("Company").onSnapshot((snapshot) => {
            setData1(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
            // console.log(data1)
        })
        db.collection("log").onSnapshot((snapshot) => {
            setLogData(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
            // console.log(data1)
        })

        db.collection("company_type").onSnapshot((snapshot) => {
            setCompanyType(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })




        setCurrentUser(props.mail)
        // window.addEventListener('popstate', (event) => {

        //     if (currentURL === "http://localhost:3000/") {
        //         return <h1>error</h1>
        //     }
        // });

    }, [])





    function check(elem) {
        // use one of possible conditions
        // if (elem.value == 'Other')

        var variety_select = document.getElementById("varietySelect");

        if (variety_select.value === "Other") {
            document.getElementById("company_type").style.display = 'block';
        } else {
            document.getElementById("company_type").style.display = 'none';
        }

    }

    const insertCompanyTypeValue = () => {
        var companyTxtVal = document.getElementById("companyType-input").value,

            newCompanyVal = document.createTextNode(companyTxtVal);
        setNewCompanyType(newCompany)
        // console.log(newCompany)
        db.collection("company_type").add({
            company_type: newCompany,
        });
        setCompany("")
        setNewCompanyType("")
    }
    const [logUser, setLogUser] = useState("hii")

    const insertValue = () => {
        var companyTxtVal = document.getElementById("company-input").value,
            userTxtVal = document.getElementById("user-input").value,
            emailTxtVal = document.getElementById("email-input").value,

            newCompanyVal = document.createTextNode(companyTxtVal),
            newUserVal = document.createTextNode(userTxtVal),
            newEmailVal = document.createTextNode(emailTxtVal);
        // btn = document.getElementById("pause");


        setNewCompany(newCompanyVal)
        setNewUser(newUserVal)
        setNewEmail(newEmailVal)
        setLogUser(newUser)

        db.collection("Company").add({
            name: newUser,
            email: newEmail,
            company_name: newCompany,
            company_type: company,
            pause: "0",
            recativate: "1",
            user: currentUser,
        });

        db.collection("log").add({
            name: newUser,
            email: newEmail,
            company_name: newCompany,
            company_type: company,
            pause: "0",
            recativate: "1",
            user: currentUser,
        });
        setCompany("")
        setNewCompany("")
        setNewUser("")
        setNewEmail("")
        setNewType("")

    }





    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    function selectedMode(e) {
        if (e.target.value !== "Select") {
            setValue1(e.target.value);
        }
        // console.log(e.target.value)

    }
    // console.log(logUser)




    return (
        <div className="form">
            <div >
                <p id="signout_button">
                    <button onClick={() => auth.signOut()}><Link to="/" style={{ textDecoration: "none" }}>Sign Out</Link>
                    </button>
                </p>

                <Popup
                    trigger={<button className="add"> Add new user</button>}
                    modal
                    className="form1"
                >
                    {close => (
                        <>
                            <h4 className="addnewuser">Add new user</h4>
                            <div className="popup">

                                <div className="company">

                                    <div className="col-xs-4 col-xs-offset-4">
                                        <div className="floating-label-group">
                                            <input id="company-input" type="text" className="form-control" autocomplete="off" onChange={newCompInput} autofocus required="required"
                                            />

                                            <label className="floating-label">Company's Name</label>
                                        </div>


                                    </div>


                                </div>
                                <hr />


                                <div className="user">




                                    <div className="col-xs-4 col-xs-offset-4">
                                        <div className="floating-label-group">
                                            <input type="text" className="form-control" autocomplete="off" id="user-input" onChange={newUserInput} autofocus required />

                                            <label className="floating-label">User</label>
                                        </div>


                                    </div>

                                </div>
                                <hr />


                                <div className="email">

                                    <div className="col-xs-4 col-xs-offset-4">
                                        <div className="floating-label-group">
                                            <input type="text" className="form-control" autocomplete="off" id="email-input" onChange={newEmailInput} autofocus required />

                                            <label className="floating-label">Email Id</label>
                                        </div>


                                    </div>

                                </div>
                                <hr />

                                <div>
                                    <h4 style={{ textDecoration: "underline" }}>Choose the Type</h4>



                                    <select type="text" placeholder="Company Type" onChange={company_drop}
                                        value={company} id="compSelect">
                                        <option>Select</option>
                                        {companyType?.map(({ id, data }) => (

                                            <option key={id}>{data.company_type}</option>

                                        ))}
                                    </select>
                                    <div>
                                        <label>New Type
                                            <input id="companyType-input" onChange={newCompTypeInput}></input>
                                            <button onClick={insertCompanyTypeValue}>Add</button>
                                        </label>
                                    </div>
                                    {/* <h4>You have selected-- {company}</h4> */}


                                </div>

                                {/* <button id="activate" onClick={method2}>abc</button> */}



                                <div id="adduser">
                                    <button className="close" value="Cancel" onClick={close}>
                                        CANCEL
                                    </button>
                                    <button className="user" onClick={insertValue}>ADD USER</button>
                                </div>

                            </div>
                        </>


                    )
                    }
                </Popup >
            </div>
            <div>
                <table id="head">

                    <tr id="item">
                        <th>Name</th>

                        <th>Email Id</th>

                        <th>Company's Name</th>

                        <th>Company Type</th>

                        <th>Subscription</th>

                        <th>Delete</th>

                        <th>User's Name</th>


                    </tr>
                </table>
                <table id="content">



                    {data1.map(({ id, data }) => (

                        <tr key={id}>


                            <td>{data.company_name}</td>

                            <td>{data.email}</td>

                            <td>{data.name}</td>

                            <td>{data.company_type}</td>

                            <td>{data.pause === "0" ? <button onClick={() => {
                                db.collection("Company").doc(id).update({
                                    pause: "1",
                                    reactivate: "0",
                                    user: currentUser,

                                })

                                db.collection('log').add({
                                    name: logUser,
                                    email: newEmail,
                                    company_name: newCompany,
                                    company_type: company,
                                    pause: "1",
                                    recativate: "0",
                                    user: currentUser,
                                })


                                setCurrentUser(props.mail)

                            }}>Pause</button> : <button onClick={() => {
                                db.collection("Company").doc(id).update({
                                    pause: "0",
                                    reactivate: "1",
                                    user: currentUser,

                                })
                                setLogUser(newUser)

                                db.collection('log').add({
                                    name: logUser,
                                    email: newEmail,
                                    company_name: newCompany,
                                    company_type: company,
                                    pause: "0",
                                    recativate: "1",
                                    user: currentUser,
                                })
                                setCurrentUser(props.mail)


                            }}>Reactivate</button>}</td>


                            <td><button onClick={() => {
                                db.collection("Company").doc(id)
                                    .delete()
                                db.collection('log').add({
                                    name: newUser,
                                    email: newEmail,
                                    company_name: newCompany,
                                    company_type: company,
                                    pause: "0",
                                    recativate: "1",
                                    user: currentUser,
                                    deleted_by: currentUser,
                                })
                            }}>Delete</button></td>

                            <td>{data.user}</td>


                        </tr>



                    ))}


                </table>
                {/* <button onClick={() => navigate(-1)}>go back</button> */}
            </div>


            <hr />
            <hr />

            <div>
                <table id="head">

                    <tr id="item">
                        <th>Name</th>

                        <th>Email Id</th>

                        <th>Company's Name</th>

                        <th>Company Type</th>

                        <th>Subscription</th>

                        <th>Delete</th>

                        <th>User's Name</th>
                        <th>Deleted By</th>



                    </tr>
                </table>
                <table id="content">



                    {logData.map(({ id, data }) => (


                        <tr key={id}>


                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.company_name}</td>



                            {/* <h1>{data.name}</h1> */}

                            <td>{data.company_type}</td>

                            <td>{data.pause === "0" ? <td>Pause</td> : <td>Reactivate</td>}</td>



                            <td>{data.user}</td>
                            <td>{data.deleted_by}</td>


                        </tr>



                    ))}


                </table>
                {/* <button onClick={() => navigate(-1)}>go back</button> */}
            </div>
        </div >
    )
}

export default CompanyAdmin1
