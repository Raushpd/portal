import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app"

import db from ".././firebase1";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import '.././style.css'

import { ref, uploadBytesResumable } from "firebase/storage";
import { auth } from ".././firebase";
import { storage } from ".././firebase1";

import { uploadBytes } from 'firebase/storage'
import { app } from '.././firebase1';
import { upload } from "@testing-library/user-event/dist/upload";


function PhNumber() {
    const [customerPurpose, setCustomerPurpose] = useState("");
    const [customerUnit, setCustomerUnit] = useState(0);
    const [customerField_type, setustomerField_type] = useState(0);
    const [customerFields, setCustomerFields] = useState("");
    var [customerNumber, setCustomerNumber] = useState("");
    const [comments, setComments] = useState("");
    const [customerEnable, setCustomerEnable] = useState("");
    const [customerUser, setCustomerUser] = useState("");



    var count = 1;




    const output1 = document.querySelector("#output1");
    function processSelectedFiles(fileInput) {
        let files = fileInput.files;
        output1.textContent = "List of Selected Files:";

        for (let i = 0; i < files.length; i++) {
            output1.textContent += `\nFilename: ${files[i].name}`;
        }
    }
    const output2 = document.querySelector("#output2");
    function processSelectedFiles1(fileInput) {
        let files = fileInput.files;
        output2.textContent = "List of Selected Files:";

        for (let i = 0; i < files.length; i++) {
            output2.textContent += `\nFilename: ${files[i].name}`;
        }
    }



    var str;
    var str2;
    var str3;
    var str4;



    const [string2, setString2] = useState("");
    const [string, setString] = useState("");
    const [string1, setString1] = useState("");
    const [string4, setString4] = useState("");
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [company, setCompany] = useState('');
    const [crop, setCrop] = useState('');
    const [machine, setMachine] = useState('');
    const [variety, setVariety] = useState('');
    function selectedMode(e) {
        if (e.target.value !== "Select") {
            setValue1(e.target.value);
        }
        console.log(e.target.value)

    }
    function selectedRelease(e) {
        if (e.target.value !== "Select") {
            setValue3(e.target.value);
        }
        console.log(e.target.value)

    }

    function selectedPurpose(e) {
        if (e.target.value !== "Select") {
            setValue2(e.target.value);
        }
        console.log(e.target.value)

    }

    const [imageName1, setImageName1] = useState("");
    const [imageTime1, setImageTime1] = useState("");
    const [imageName2, setImageName2] = useState("");
    const [imageTime2, setImageTime2] = useState("");
    const [customersData1, setCustomersData1] = useState([]);
    const [customersData2, setCustomersData2] = useState([]);
    const [text1, setText1] = useState('');
    const [text4, setText4] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [date1, setDate1] = useState("");
    const [type1, setType1] = useState("");
    const [size1, setSize1] = useState("");
    var [date2, setDate2] = useState("");
    var [time2, setTime2] = useState("");
    var [time1, setTime1] = useState("");
    const [type2, setType2] = useState("");
    const [size2, setSize2] = useState("");

    var fileSize1;
    var modDate1;
    var fileType1;
    var fileSize2;
    var modDate2;
    var fileType2;
    let txt1 = "";
    let txt6 = "";
    let txt7 = "";
    let txt8 = "";
    let text3 = "";



    var txt2 = '';
    var txt3 = '';
    var txt4 = '';
    var txt5 = '';
    var text = '';

    var name1 = string + "_" + company + "_" + crop + "_" + machine + "_" + variety + "_" + value1 + "_" + value2 + "." + string2;
    // setNewname1(name1)
    var name2 = string1 + "_" + company + "_" + crop + "_" + machine + "_" + variety + "_" + value1 + "_" + value2 + "." + string4;
    // setNewname2(name2)

    const [newname1, setNewname1] = useState(name1);
    const [newname2, setNewname2] = useState(name2);

    var name_1 = name1;
    var name_2 = name2;



    const clear = () => {
        setCompany("")
        setMachine("")
        setCrop("")
        setVariety("")
        setValue1("")
        setValue2("")
        setCustomerUser("")
        setValue3("")
        setComments("")
        setCustomerNumber("")
        setCustomerEnable("")
    }

    const formHandler1 = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];

    };

    const formHandler2 = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];

    };


    const [user1, setUser1] = useState([]);
    const [machine1, setMachine1] = useState([]);
    const [company1, setCompany1] = useState([]);
    const [crop1, setCrop1] = useState([]);
    const [variety1, setVariety1] = useState([]);

    useEffect(() => {
        db.collection("valid_numbers").onSnapshot((snapshot) => {
            setCustomersData1(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
        console.log({ customersData1 })

        db.collection("field_user").onSnapshot((snapshot) => {
            setUser1(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })

        db.collection("field_machine").onSnapshot((snapshot) => {
            setMachine1(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })

        db.collection("field_crop").onSnapshot((snapshot) => {
            setCrop1(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })

        db.collection("field_company").onSnapshot((snapshot) => {
            setCompany1(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })

        db.collection("field_variety").onSnapshot((snapshot) => {
            setVariety1(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })

    }, [])



    const mySet1 = new Set()
    const mySet2 = new Set()
    var tempName2 = string1 + "_" + company + "_" + crop + "_" + machine + "_" + variety + "_" + value1 + "_" + value2 + "." + string4;

    var tempName1 = string + "_" + company + "_" + crop + "_" + machine + "_" + variety + "_" + value1 + "_" + value2 + "." + string2;

    const upload = () => {
        // const storageRef = ref(storage, `/valid_numbers/`)

        db.collection("valid_numbers").add({
            company: company,
            user: customerUser,
            crop: crop,
            variety: variety,
            machine: machine,
            release_type: value3,
            mode: value1,
            purpose: value2,
            phone_no: customerNumber,
            enable: customerEnable,
            time: currDate,

            comment: comments,

        });
    }

    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var currTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    var currDate = date + " " + currTime



    function show_log1() {
        var show_log1 = document.getElementById("table1");
        if (show_log1.style.display === "none") {
            show_log1.style.display = "block";
        } else {
            show_log1.style.display = "none";
        }

    }


    function show_log2() {
        var show_log2 = document.getElementById("table2");
        if (show_log2.style.display === "none") {
            show_log2.style.display = "block";
        } else {
            show_log2.style.display = "none";
        }

    }


    function user_drop(event) {
        if (event.target.value !== "Select") {
            setCustomerUser(event.target.value);
        }

        console.log(customerUser)
    }

    function company_drop(event) {
        if (event.target.value !== "Select") {
            setCompany(event.target.value);
        }


    }

    function machine_drop(event) {
        if (event.target.value !== "Select") {
            setMachine(event.target.value);
        }
    }

    function crop_drop(event) {
        if (event.target.value !== "Select") {
            setCrop(event.target.value);
        }
        console.log(crop)

    }

    function variety_drop(event) {
        if (event.target.value !== "Select") {
            setVariety(event.target.value);
        }
    }



    const upload2 = () => {
        setNewname2(name_2)
        if (image2 == null)
            return;
        // console.log(image);
        const storageRef = ref(storage, `/modal_file/${JSON.stringify(name2)}`)
        if (tempName2 !== "______.") {
            uploadBytes(storageRef, image2).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });
        }



        if (!mySet2.has(tempName2)) {


            if (tempName2 !== "______.") {
                mySet1.add(tempName2)
                db.collection("modal_data_phNo").add({
                    name: tempName2,
                    time: time2,
                    release_type: value2,
                    comment: comments,
                    // comments:
                });
            }
        }

        setImageName2("");
        setImageTime2("");
    }

    async function addNumber1() {
        let number = document.getElementById("number")
        let bool = document.getElementById("bool")
        setCustomerEnable(bool.value)
        console.log(typeof (customerEnable))
        // var ref = doc(db, "valid_number", props.company)
        var ref1 = db
            .collection("valid_number")
            .doc(company)
            .collection(customerUser).doc();
        const docRef = await setDoc(
            ref1, {
            Phone_No: customerNumber,
            enable: customerEnable,
            file_name: newname1,
            crop: crop,
            variety: variety,
            machine: machine,
            functionality: value2,
            mode: value1,
            time: time1,
            comments: comments,
        }
        )
        count = count + 1;
        console.log(count);
        setCustomerNumber('')
        setCustomerEnable(false);
    }

    async function addNumber2() {
        let number = document.getElementById("number")
        let bool = document.getElementById("bool")
        setCustomerEnable(bool.value)
        console.log(typeof (customerEnable))
        // var ref = doc(db, "valid_number", props.company)
        var ref1 = db
            .collection("valid_number")
            .doc(company)
            .collection(customerUser).doc();
        const docRef = await setDoc(
            ref1, {
            Phone_No: customerNumber,
            enable: customerEnable,
            file_name: newname2,
            crop: crop,
            variety: variety,
            machine: machine,
            functionality: value2,
            mode: value1,
            time: time2,
            comments: comments,
        }
        )
        count = count + 1;
        console.log(count);
        setCustomerNumber('')
        setCustomerEnable(false);
    }


    function checkcompany(elem) {
        // use one of possible conditions
        // if (elem.value == 'Other')
        var comp_select = document.getElementById("compSelect");

        if (comp_select.value === "Other") {
            console.log("Hiiii")
            document.getElementById("companyph").style.display = 'block';
        } else {
            document.getElementById("companyph").style.display = 'none';
        }

    }
    function checkuser(elem) {
        // use one of possible conditions
        // if (elem.value == 'Other')

        var user_select = document.getElementById("userSelect");

        if (user_select.value === "Other") {
            console.log("Hiiii")
            document.getElementById("userph").style.display = 'block';
        } else {
            document.getElementById("userph").style.display = 'none';
        }

    }
    function checkcrop(elem) {
        // use one of possible conditions
        // if (elem.value == 'Other')

        var crop_select = document.getElementById("cropSelect");

        if (crop_select.value === "Other") {
            document.getElementById("cropph").style.display = 'block';
        } else {
            document.getElementById("cropph").style.display = 'none';
        }

    }
    function checkvariety(elem) {
        // use one of possible conditions
        // if (elem.value == 'Other')

        var variety_select = document.getElementById("varietySelect");

        if (variety_select.value === "Other") {
            document.getElementById("varietyph").style.display = 'block';
        } else {
            document.getElementById("varietyph").style.display = 'none';
        }

    }
    function checkmachine(elem) {
        // use one of possible conditions
        // if (elem.value == 'Other')

        var machine_select = document.getElementById("machineSelect");

        if (machine_select.value === "Other") {
            document.getElementById("machineph").style.display = 'block';
        } else {
            document.getElementById("machineph").style.display = 'none';
        }
    }








    function companyCall(e) {
        e.preventDefault();
        checkcompany(e);
        company_drop(e);
    }
    function userCall(e) {
        e.preventDefault();
        checkuser(e);
        user_drop(e);
    }
    function cropCall(e) {
        e.preventDefault();
        checkcrop(e);
        crop_drop(e);
    }
    function varietyCall(e) {
        e.preventDefault();
        checkvariety(e);
        variety_drop(e);
    }
    function machineCall(e) {
        e.preventDefault();
        checkmachine(e);
        machine_drop(e);
    }


    function newCompInput(e) {
        setNewCompany(e.target.value);
        console.log(newCompany)

    }

    function newUserInput(e) {
        setNewuser(e.target.value);
        console.log(newUser)

    }

    function newCropInput(e) {
        setNewCrop(e.target.value);
        console.log(newCrop)

    }

    function newVarietyInput(e) {
        setNewVariety(e.target.value);
        console.log(newVariety)

    }

    function newMachineInput(e) {
        setNewMachine(e.target.value);
        console.log(newMachine)

    }

    const [newCompany, setNewCompany] = useState("")
    const [newUser, setNewuser] = useState("")
    const [newCrop, setNewCrop] = useState("")
    const [newVariety, setNewVariety] = useState("")
    const [newMachine, setNewMachine] = useState("")


    const insertCompanyValue = () => {
        var compCount = 0;
        var companyTxtVal = document.getElementById("company-input").value,

            newCompanyVal = document.createTextNode(companyTxtVal);
        setNewCompany(newCompanyVal)


        {
            company1?.map(({ id, data }) => {
                console.log(data.name + " ----" + newCompany)

                if (data.name === newCompany) {


                    compCount = compCount + 1;

                }

            })
        }
        if (newCompany !== "" && compCount === 0) {
            db.collection("field_company").add({
                name: newCompany,

                // comments:
            });
        }


        setCompany("")
        setNewCompany("")



    }
    const insertUserValue = () => {

        var userCount = 0;
        var userTxtVal = document.getElementById("user-input").value,

            newUserVal = document.createTextNode(userTxtVal);
        setNewuser(newUserVal)


        {
            user1?.map(({ id, data }) => {
                console.log(data.name + " ----" + newUser)

                if (data.name === newUser) {

                    userCount = userCount + 1;

                }

            })
        }
        if (newUser !== "" && userCount === 0) {
            db.collection("field_user").add({
                name: newUser,

                // comments:
            });
        }



        document.getElementById("userresult").style.display = 'none';
        setCustomerUser("")

    }
    const insertCropValue = () => {
        var cropCount = 0;

        var cropTxtVal = document.getElementById("crop-input").value,

            newCropVal = document.createTextNode(cropTxtVal);
        setNewCrop(newCropVal)


        {
            crop1?.map(({ id, data }) => {
                console.log(data.name + " ----" + newCrop)

                if (data.name === newCrop) {

                    if (newCrop !== "______.") {
                        cropCount = cropCount + 1;
                    }
                }

            })
        }
        if (newCrop !== "" && cropCount === 0) {
            db.collection("field_crop").add({
                name: newCrop,

                // comments:
            });
        }
        document.getElementById("cropresult").style.display = 'none';
        setCrop("")

    }
    const insertVarietyValue = () => {

        var varietyCount = 0;
        var varietyTxtVal = document.getElementById("variety-input").value,

            newVarietyVal = document.createTextNode(varietyTxtVal);
        setNewVariety(newVarietyVal)
        {
            variety1?.map(({ id, data }) => {
                console.log(data.name + " ----" + newVariety)

                if (data.name === newVariety) {

                    if (newVariety !== "______.") {
                        varietyCount = varietyCount + 1;
                    }
                }

            })
        }

        if (newVariety !== "" && varietyCount === 0) {
            db.collection("field_variety").add({
                name: newVariety,

                // comments:
            });
        }
        document.getElementById("varietyresult").style.display = 'none';
        setVariety("")

    }


    const insertMachineValue = () => {

        var machineCount = 0;
        var machineTxtVal = document.getElementById("machine-input").value,

            newMachineVal = document.createTextNode(machineTxtVal);
        setNewMachine(newMachineVal)
        console.log(newMachineVal)
        {
            machine1?.map(({ id, data }) => {
                console.log(data.name + " ----" + newMachine)

                if (data.name === newMachine) {

                    if (newMachine !== "______.") {
                        machineCount = machineCount + 1;
                    }
                }

            })
        }

        if (newMachine !== "" && machineCount === 0) {
            db.collection("field_machine").add({
                name: newMachine,

                // comments:
            });
        }
        document.getElementById("machineresult").style.display = 'none';
        setMachine("")
    }


    return (
        <div className="App">
            <div className="user_form4">
                <div>
                    <h4 style={{ textDecoration: "underline" }}>Select Company</h4>
                    <select type="text" placeholder="Company's Name" onChange={company_drop}
                        value={company} id="compSelect">
                        <option>Select</option>
                        {company1?.map(({ id, data }) => (

                            <option key={id}>{data.name}</option>

                        ))}
                    </select>
                    <div>
                        <label>New Company
                            <input id="company-input" onChange={newCompInput}></input>
                            <button onClick={insertCompanyValue}>Add</button>
                        </label>
                    </div>
                    <h4>You have selected-- {company}</h4>
                </div>


                <div>
                    <h4 style={{ textDecoration: "underline" }}>Select User</h4>
                    <div>
                        <select type="text"
                            placeholder="User"
                            value={customerUser}
                            onChange={user_drop} id="userSelect">
                            <option>Select</option>

                            {user1?.map(({ id, data }) => (

                                <option key={id}>{data.name}</option>

                            ))}
                        </select>
                        <div>
                            <label>New User
                                <input id="user-input" onChange={newUserInput}></input>
                                <button onClick={insertUserValue} >Add</button>
                            </label>
                        </div>
                    </div>
                    <h4>You have selected-- {customerUser}</h4>
                </div>
                <div>
                    <h4 style={{ textDecoration: "underline" }}>Select Crop</h4>

                    <select type="text" placeholder="Crop's Name" onChange={crop_drop}
                        value={crop} id="cropSelect">
                        <option>Select</option>


                        {crop1?.map(({ id, data }) => (

                            <option key={id}>{data.name}</option>

                        ))}

                    </select>
                    <div>
                        <label>New Crop
                            <input id="crop-input" onChange={newCropInput}></input>
                            <button onClick={insertCropValue} >Add</button>
                        </label>
                    </div>
                    <h4>You have selected-- {crop}</h4>
                </div>

                <div>

                    <h4 style={{ textDecoration: "underline" }}>Select Variety</h4>

                    <select type="text" placeholder="Variety's Name" onChange={variety_drop}
                        value={variety} id="varietySelect">
                        <option>Select</option>


                        {variety1?.map(({ id, data }) => (

                            <option key={id}>{data.name}</option>

                        ))}
                    </select>
                    <div>
                        <label>New Variety
                            <input id="variety-input" onChange={newVarietyInput}></input>
                            <button onClick={insertVarietyValue} >Add</button>
                        </label>
                    </div>
                    <h4>You have selected-- {variety}</h4>
                </div>
                <div>
                    <h4 style={{ textDecoration: "underline" }}>Select Machine</h4>

                    <select type="text" placeholder="Machine's Name" onChange={machine_drop}
                        value={machine} id="machineSelect">
                        <option>Select</option>

                        {machine1?.map(({ id, data }) => (

                            <option key={id}>{data.name}</option>

                        ))}
                    </select>
                    <div>
                        <label>New Machine
                            <input id="machine-input" onChange={newMachineInput}></input>
                            <button onClick={insertMachineValue} >Add</button>
                        </label>
                    </div>
                    <h4>You have selected-- {machine}</h4>
                </div>
            </div>
            <div className="option">
                <div>
                    <h4 style={{ textDecoration: "underline" }}>Choose the Mode</h4>
                    <select type="text" onChange={selectedMode} value={value1}>
                        <option>Select</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                        <option value="Both">Both</option>
                    </select>

                    <h4>You have selected-- {value1}</h4>
                </div>
                <div>
                    <h4 style={{ textDecoration: "underline" }} style={{ textDecoration: "underline" }}>Choose the Relaese Type</h4>
                    <select onChange={selectedRelease} value={value3}>
                        <option>Select</option>
                        <option>Dev</option>
                        <option>Staging</option>
                        <option>Production</option>
                    </select>
                    <h4>You have selected-- {value3}</h4>
                </div>
                <div>
                    <h4 style={{ textDecoration: "underline" }}>Choose the Purpose</h4>
                    <select onChange={selectedPurpose} value={value2}>

                        <option>Select</option>
                        <option>Object Detection</option>
                        <option>Classification</option>
                        <option>Segmentation </option>

                    </select>
                    <h4>You have selected-- {value2}</h4>
                </div>
            </div>

            <hr style={{ marginLeft: "20px" }} />
            <hr style={{ marginLeft: "20px" }} />
            <div className="phno">
                <div><h4>Enter Phone Number</h4><input
                    type="tel"
                    maxLength={10}
                    placeholder="Phone Number"
                    value={customerNumber}
                    onChange={(e) => setCustomerNumber(e.target.value)}
                /></div>
                <div><h4>Select Enable</h4><select
                    type="boolean"
                    placeholder="Cities"
                    value={customerEnable}
                    id="bool"
                    onChange={(e) => setCustomerEnable(e.target.value)}
                >
                    <option>Select</option>
                    <option>true</option>
                    <option>false</option>
                </select></div>
                <div><h4>Comment</h4><input value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Comments"></input></div>





            </div>
            {/* <h3 style={{ textAlign: "center" }}>Uplaod History of Py file</h3>
            <div>
                <h4>Final Name of Py File--> {string}_{company}_{crop}_{machine}_{variety}_{value1}_{value2}_{value3}.{string2}</h4>
                <h4>File Type--{type1}
                </h4>
                <h4>Modified Size--{size1}</h4>
                <h4 id="time">Modified Date and Time--{date1} {time1}</h4>
            </div > */}








            <div id="table1">
                <table>
                    <tr>

                        <th>Date</th>
                        <th></th>
                        <th></th>
                        <th>Company</th>
                        <th></th>
                        <th></th>
                        <th>User</th>
                        <th></th>
                        <th></th>
                        <th>Crop</th>
                        <th></th>
                        <th></th>
                        <th>Variety</th>
                        <th></th>
                        <th></th>
                        <th>Machine</th>
                        <th></th>
                        <th></th>
                        <th>Release Type</th>
                        <th></th>
                        <th></th>
                        <th>Mode</th>
                        <th></th>
                        <th></th>
                        <th>Purpose</th>
                        <th></th>
                        <th></th>
                        <th>Phone No</th>
                        <th></th>
                        <th></th>
                        <th>Enable</th>
                        <th></th>
                        <th></th>
                        <th>Comments</th>
                    </tr>


                    {customersData1?.map(({ id, data }) => (


                        <tr key={id}>


                            <td>{data.time}</td>
                            <td></td>
                            <td></td>
                            <td>{data.company}</td>
                            <td></td>
                            <td></td>
                            <td>{data.user}</td>
                            <td></td>
                            <td></td>
                            <td>{data.crop}</td>
                            <td></td>
                            <td></td>

                            <td>{data.variety}</td>
                            <td></td>
                            <td></td>
                            <td>{data.machine}</td>
                            <td></td>
                            <td></td>
                            <td>{data.release_type}</td>
                            <td></td>
                            <td></td>
                            <td>{data.mode}</td>
                            <td></td>
                            <td></td>
                            <td>{data.purpose}</td>
                            <td></td>
                            <td></td>
                            <td>{data.phone_no}</td>
                            <td></td>
                            <td></td>
                            <td>{data.enable}</td>
                            <td></td>
                            <td></td>
                            <td>{data.comment}</td>

                        </tr>



                    ))}


                </table>
            </div>
            <button onClick={upload}>Submit</button>
            <button onClick={show_log1}>Show Logs</button>


            {/* <h3 style={{ textAlign: "center" }}>Uplaod History of Modal file</h3>
            <div>
                <h4>Final Name of Modal File--> {string1}_{company}_{crop}_{machine}_{variety}_{value1}_{value2}_{value3}.{string4}
                </h4>
                <h4>File Type--{type2}</h4>
                <h4>File Size--{size2}</h4>
                <h4 id="time">Modified Date and Time--{date2} {time2}</h4>


            </div> */}
            {/* <div><br /></div>
            <div id="table2">
                <table>
                    <tr>

                        <th>Name</th>
                        <th></th>
                        <th></th>
                        <th>Purpose</th>
                        <th></th>
                        <th></th>
                        <th>Time</th>
                        <th></th>
                        <th></th>
                        <th>Comments</th>

                    </tr>


                    {customersData2?.map(({ id, data }) => (


                        <tr key={id}>


                            <td>{data.name}</td>
                            <td></td>
                            <td></td>
                            <td>{data.release_type}</td>
                            <td></td>
                            <td></td>

                            <td>{data.time}</td>
                            <td></td>
                            <td></td>
                            <td>{data.comment}</td>


                        </tr>



                    ))}


                </table>
            </div>
            <button onClick={upload2}>Upload Modal File</button>
            <button onClick={show_log2}>Show Logs</button>
            <div>


                <button onClick={addNumber2}>Submit</button>
            </div> */}
            <div>
                <p><button onClick={clear}>Clear</button></p>
            </div>
        </div>
    );
}

export default PhNumber;










// import React, { useState } from "react";

// import db from "./firebase1";
// import { addDoc, collection, doc, setDoc } from "firebase/firestore";


// function PhNumber(props) {













    // const [customerEnable, setCustomerEnable] = useState(false);
    // const [customerNumber, setCustomerNumber] = useState('');
//     const [comments, setComments] = useState("");

//     var count = 1;
//     async function addNumber() {
//         let number = document.getElementById("number")
//         let bool = document.getElementById("bool")
//         setCustomerEnable(bool.value)
//         console.log(typeof (customerEnable))
//         // var ref = doc(db, "valid_number", props.company)
//         var ref1 = db
//             .collection("valid_number")
//             .doc(company)
//             .collection("user1").doc();
//         const docRef = await setDoc(
//             ref1, {
//             Phone_No: customerNumber,
//             enable: customerEnable,
//             file_name: newname2,
//             crop: crop,
//             variety: variety,
//             machine: machine,
//             functionality: value2,
//             mode: value1,
//             time: text1,
//             comments: comments,
//         }
//         )
//         count = count + 1;
//         console.log(count);
//         setCustomerNumber('')
//         setCustomerEnable(false);
//     }




//     return (
//         <div className="App">
//             <div className="App__form">

                // <input
                //     type="tel"
                //     maxLength={10}
                //     placeholder="Phone Number"
                //     value={customerNumber}
                //     onChange={(e) => setCustomerNumber(e.target.value)}
                // />
                // <select
                //     type="boolean"
                //     placeholder="Cities"
                //     value={customerEnable}
                //     id="bool"
                //     onChange={(e) => setCustomerEnable(e.target.value)}
                // >
                //     <option>true</option>
                //     <option>false</option>
                // </select>
                // <input value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Comments"></input>

                // <button onClick={addNumber}>Submit</button>
//             </div>
//         </div>
//     );
// }

// export default PhNumber