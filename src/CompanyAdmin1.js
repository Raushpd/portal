import React, { useState, useEffect } from "react";
import db from "./firebase1";
import Popup from "reactjs-popup";
import './compAdmin.css'
import Test from "./Test";
// const contentStyle = {
//     // maxWidth: "600px",
//     width: "50%"
// };

function CompanyAdmin1() {
    const [company, setCompany] = useState('');
    const [data1, setData1] = useState([]);
    const [newCompany, setNewCompany] = useState("")
    const [newCompanyType, setNewCompanyType] = useState("")
    const [user, setUser] = useState('');
    const [user1, setUser1] = useState([]);
    const [newUser, setNewUser] = useState("")
    const [email, setEmail] = useState('');
    const [email1, setEmail1] = useState([]);
    const [newEmail, setNewEmail] = useState("")
    const [newType, setNewType] = useState("")
    const [customerUser, setCustomerUser] = useState("");
    const [add, setAdd] = useState("")
    const [isOpen, setIsOpen] = useState(false);
    const [value1, setValue1] = useState('');
    const [companyType, setCompanyType] = useState([]);
    const [customerpause, setCustomerPause] = useState("");
    const [customerreactivate, setCustomerReactivate] = useState("");


    function newCompTypeInput(e) {
        setNewCompany(e.target.value);
        console.log(newCompany)

    }




    function company_drop(event) {
        if (event.target.value !== "Select") {
            setCompany(event.target.value);
        }
    }

    function newUserInput(e) {
        setNewUser(e.target.value);
        console.log(newUser)

    }
    function newCompInput(e) {
        setNewCompany(e.target.value);
        console.log(newCompany)

    }
    function newEmailInput(e) {
        setNewEmail(e.target.value);
        console.log(newEmail)

    }


    useEffect(() => {
        db.collection("new_company").onSnapshot((snapshot) => {
            setData1(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })

        db.collection("company_type").onSnapshot((snapshot) => {
            setCompanyType(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })


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
        console.log(newCompany)
        db.collection("company_type").add({
            company_type: newCompany,
        });
        setCompany("")
        setNewCompanyType("")
    }


    const insertValue = () => {
        var companyTxtVal = document.getElementById("company-input").value,
            userTxtVal = document.getElementById("user-input").value,
            emailTxtVal = document.getElementById("email-input").value,

            newCompanyVal = document.createTextNode(companyTxtVal),
            newUserVal = document.createTextNode(userTxtVal),
            newEmailVal = document.createTextNode(emailTxtVal);
        setNewCompany(newCompanyVal)
        setNewUser(newUserVal)
        setNewEmail(newEmailVal)
        console.log(newUser)
        console.log(newEmail)
        console.log(newCompany)
        console.log(value1)

        db.collection("new_company").add({
            name: newUser,
            email: newEmail,
            company_name: newCompany,
            company_type: value1,
            pause: customerpause,
            activate: customerreactivate


            // comments:
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
        console.log(e.target.value)

    }

    function disable() {
        document.querySelectorAll('.btn').forEach(el => el.setAttribute('disabled', true));
    }

    function method() {
        var pausebtn = document.getElementById("pause").disabled = false;
        var activatebtn = document.getElementById("activate").disabled = true;
        if (pausebtn === false) {
            activatebtn = true;
        }
        else if (pausebtn === true) {
            activatebtn = false;
        }
        else if (activatebtn === true) {
            pausebtn = true
        }
        else {
            pausebtn = false
        }
    }



    return (
        <div className="form">
            <div >

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


                                    {/* <label>Name
                                <input id="company-input" onChange={newCompInput}></input>

                            </label> */}

                                    {/* <span className='blocking-span'>
                                <input id="company-input" type="text" className="inputText" onChange={newCompInput}></input>

                                <span className="floating-label">Name</span>
                            </span> */}


                                    <div className="col-xs-4 col-xs-offset-4">
                                        <div className="floating-label-group">
                                            <input id="company-input" type="text" className="form-control" autocomplete="off" onChange={newCompInput} autofocus required />

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
                                    {/* <select type="text" onChange={selectedMode} value={value1}>

                                    <option>Select</option>
                                    <option value="Trader">Trader</option>
                                    <option value="Processor">Processor</option>
                                    <option value="Miller">Miller</option>
                                </select> */}


                                    <select type="text" placeholder="Company Type" onChange={company_drop}
                                        value={company} id="compSelect">
                                        <option>Select</option>
                                        {companyType?.map(({ id, data }) => (

                                            <option key={id}>{data.company_type}</option>

                                        ))}
                                    </select>
                                    <div>
                                        <label>New Company
                                            <input id="companyType-input" onChange={newCompTypeInput}></input>
                                            <button onClick={insertCompanyTypeValue}>Add</button>
                                        </label>
                                    </div>
                                    <h4>You have selected-- {company}</h4>


                                    <div><h4>Select Enable</h4><select
                                        type="boolean"
                                        placeholder="Cities"
                                        value={customerpause}
                                        id="bool"
                                        onChange={(e) => setCustomerPause(e.target.value)}
                                    >
                                        <option>Select</option>
                                        <option>true</option>
                                        <option>false</option>
                                    </select></div>


                                    <div><h4>Select Enable</h4><select
                                        type="boolean"
                                        placeholder="Cities"
                                        value={customerreactivate}
                                        id="bool"
                                        onChange={(e) => setCustomerReactivate(e.target.value)}
                                    >
                                        <option>Select</option>
                                        <option>true</option>
                                        <option>false</option>
                                    </select></div>







                                </div>

                                <button id="pause" onClick={method}>abc</button>
                                <button id="activate" onClick={method}>abc</button>



                                <div id="adduser">
                                    <a className="close" value="Cancel" onClick={close}>
                                        CANCEL
                                    </a>
                                    <button className="user" onClick={insertValue}>ADD USER</button>
                                </div>

                            </div>
                        </>


                    )
                    }
                </Popup >
            </div>
            <div>
                <table >

                    <tr id="item">
                        <th>Name</th>
                        <th></th>
                        <th></th>

                        <th>Email Id</th>
                        <th></th>
                        <th></th>
                        <th>Company's Name</th>

                        <th></th>
                        <th></th>

                        <th>Company Type</th>
                        <th></th>
                        <th></th>

                        <th>Subscription paused</th>
                        <th></th>
                        <th></th>

                        <th>Reactivate</th>

                    </tr>
                </table>
                <table>



                    {data1?.map(({ id, data }) => (


                        <tr key={id}>


                            <td>{data.company_name}</td>
                            <td></td>
                            <td></td>

                            <td>{data.email}</td>
                            <td></td>
                            <td></td>
                            <td>{data.name}</td>

                            <td></td>
                            <td></td>

                            <td>{data.company_type}</td>
                            <td></td>
                            <td></td>

                            {/* <button id="pause" onClick={method}>abc</button>
                            <td></td>
                            <td></td>



                            <button id="activate" onClick={method}>abc</button> */}




                        </tr>



                    ))}


                </table>
            </div>
        </div >
    )
}

export default CompanyAdmin1
