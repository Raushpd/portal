import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable } from "firebase/storage";
import { auth } from "./firebase";
import firebase from "firebase/compat/app"
import { storage } from "./firebase1";
import './Home.css';
import db from "./firebase1";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { uploadBytes } from 'firebase/storage'
import { app } from './firebase1';
import Result from "./components/Result";
import Threshold from "./components/Threshold";
import Location from "./components/Location";
import PhNumber from './components/PhNumber'
import { upload } from "@testing-library/user-event/dist/upload";
import { Link } from "react-router-dom"

function Home(props) {


    const [customerPurpose, setCustomerPurpose] = useState("");
    const [customerUnit, setCustomerUnit] = useState(0);
    const [customerField_type, setustomerField_type] = useState(0);
    const [customerFields, setCustomerFields] = useState("");
    var [customerNumber, setCustomerNumber] = useState("");
    const [comments, setComments] = useState("");
    const [customerEnable, setCustomerEnable] = useState(false);
    const [customerUser, setCustomerUser] = useState("");


    console.log(props.mail)
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
        // console.log(e.target.value)

    }
    function selectedRelease(e) {
        if (e.target.value !== "Select") {
            setValue3(e.target.value);
        }
        // console.log(e.target.value)

    }

    function selectedPurpose(e) {
        if (e.target.value !== "Select") {
            setValue2(e.target.value);
        }
        // console.log(e.target.value)

    }

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
    let handleChange1 = e => {
        setImage1(e.target.files[0])
        var files = e.target.files;
        var filesArray = [].slice.call(files);
        filesArray.forEach(e => {

            // console.log(e.size);
            // console.log(e.lastModifiedDate);
            // console.log(e.type);
            fileSize1 = e.size
            setSize1(fileSize1);
            modDate1 = e.lastModifiedDate
            setDate1(modDate1);
            fileType1 = e.type
            setType1(fileType1);
            str = e.name;
            str4 = str.substring(str.indexOf(".") + 1);
            str = str.substring(0, str.indexOf("."));
            setString(str);
            setString2(str4);

            txt1 = JSON.stringify(modDate1)
            txt6 = txt1.substring(1, txt1.indexOf("T"))
            txt7 = txt1.substring(txt1.indexOf("T") + 1)
            txt8 = txt7.substring(0, txt7.length - 2)

            // console.log(txt6)
            setDate1(txt6)
            setTime1(txt8)
            text3 = txt6 + " " + txt8;
            setText4(text3)
            setNewname1(name1)
            // console.log(newname1)
            setImageName1(name1);
            setImageTime1(text3);
            // console.log(imageName1)

            // console.log(imageTime1)


        });
    };


    var txt2 = '';
    var txt3 = '';
    var txt4 = '';
    var txt5 = '';
    var text = '';
    const [arr2, setArr2] = useState([])
    let handleChange2 = e => {

        setImage2(e.target.files[0])
        var files2 = e.target.files;
        var filesArray2 = [].slice.call(files2);
        filesArray2.forEach(e => {

            // console.log(e.size);
            // console.log(e.lastModifiedDate);
            // console.log(typeof (e.lastModifiedDate))
            // console.log(e.type);
            fileSize2 = e.size
            setSize2(fileSize2);
            modDate2 = e.lastModifiedDate
            // console.log(typeof (modDate2))
            // setDate2(modDate2);
            fileType2 = e.type
            setType2(fileType2);
            str2 = e.name;
            str3 = str2.substring(str2.indexOf(".") + 1);
            str2 = str2.substring(0, str2.indexOf("."));
            setString1(str2);
            setString4(str3);

            txt2 = JSON.stringify(modDate2)
            txt3 = txt2.substring(1, txt2.indexOf("T"))
            txt4 = txt2.substring(txt2.indexOf("T") + 1)
            txt5 = txt4.substring(0, txt4.length - 2)

            // console.log(txt5)
            setDate2(txt3)
            setTime2(txt5)
            text = txt3 + " " + txt5;
            setText1(text)
            setNewname2(name2)
            setImageName2(name2);
            setImageTime2(text);



        });

    };
    var name1 = string + "_" + company + "_" + crop + "_" + variety + "_" + machine + "_" + value1 + "_" + value3 + "_" + value2 + "." + string2;
    // setNewname1(name1)
    var name2 = string1 + "_" + company + "_" + crop + "_" + variety + "_" + machine + "_" + value1 + "_" + value3 + "_" + value2 + "." + string4;
    // setNewname2(name2)

    const [newname1, setNewname1] = useState(name1);
    const [newname2, setNewname2] = useState(name2);

    var name_1 = name1;
    var name_2 = name2;


    const formHandler1 = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];

    };

    const formHandler2 = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];

    };


    function user_drop(event) {
        if (event.target.value !== "Select") {
            setCustomerUser(event.target.value);
        }
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
    }

    function variety_drop(event) {
        if (event.target.value !== "Select") {
            setVariety(event.target.value);
        }
    }
    const [user1, setUser1] = useState([]);
    const [machine1, setMachine1] = useState([]);
    const [company1, setCompany1] = useState([]);
    const [crop1, setCrop1] = useState([]);
    const [variety1, setVariety1] = useState([]);

    useEffect(() => {
        db.collection("py_data").onSnapshot((snapshot) => {
            setCustomersData1(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
        // console.log({ customersData1 })

        db.collection("modal_data").onSnapshot((snapshot) => {
            setCustomersData2(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
        // console.log({ customersData2 })

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

    var tempName2 = string1 + "_" + company + "_" + crop + "_" + variety + "_" + machine + "_" + value1 + "_" + value3 + "_" + value2 + "." + string4;

    var tempName1 = string + "_" + company + "_" + crop + "_" + variety + "_" + machine + "_" + value1 + "_" + value3 + "_" + value2 + "." + string2;
    // console.log(tempName1)
    // console.log(JSON.stringify(tempName1))
    // console.log(tempName1)
    const upload1 = () => {
        setNewname1(tempName1)
        if (image1 == null)
            return;

        if (image1 === null) {
            console.log("hiiii")
            return;
        }
        // console.log(storage)
        const storageRef = ref(storage, `/py_file/${JSON.stringify(newname1)}`)
        // if (tempName1 !== "______.") {
        //     uploadBytes(storageRef, image1).then((snapshot) => {
        //         console.log('Uploaded a blob or file!');
        //     });
        // }
        var count = 0;

        {
            customersData1?.map(({ id, data }) => {

                if (data.name === tempName1) {

                    count = count + 1;

                }
            })
        }
        console.log(tempName1)
        if (count === 0 && tempName1 !== "_______.") {
            db.collection("py_data").add({
                name: tempName1,
                time: time1,
                release_type: value3,
                comment: comments,
                user: props.mail,
                // comments:
            });
            uploadBytes(storageRef, image1).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });
        }



        setImageName1("");
        setImageTime1("");
    }


    const upload2 = () => {
        var count = 0;
        // console.log(tempName2)
        setNewname2(tempName2)
        if (image2 == null) {
            console.log("hiiii")
            return;
        }
        // console.log(image);
        const storageRef = ref(storage, `/modal_file/${JSON.stringify(newname2)}`)

        {
            customersData2?.map(({ id, data }) => {
                console.log(data.name + " ----" + newname2)
                if (data.name === newname2) {
                    count = count + 1;
                }

            })
        }
        console.log(count)
        if (count === 0 && newname2 !== "_______.") {
            db.collection("modal_data").add({
                name: newname2,
                time: time2,
                release_type: value3,
                comment: comments,
                user: props.mail,
                // comments:
            });
            uploadBytes(storageRef, image2).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });
        }

        setImageName2("");
        setImageTime2("");
    }
    function check(elem) {
        // use one of possible conditions
        // if (elem.value == 'Other')
        var comp_select = document.getElementById("compSelect");
        var user_select = document.getElementById("userSelect");
        var crop_select = document.getElementById("cropSelect");
        var variety_select = document.getElementById("varietySelect");
        var machine_select = document.getElementById("machineSelect");
        if (comp_select.value === "Other") {
            // console.log("hii")
            document.getElementById("companyresult").style.display = 'block';
        } else {
            document.getElementById("companyresult").style.display = 'none';
        }
        if (user_select.value === "Other") {
            document.getElementById("userresult").style.display = 'block';
        } else {
            document.getElementById("userresult").style.display = 'none';
        }
        if (crop_select.value === "Other") {
            document.getElementById("cropresult").style.display = 'block';
        } else {
            document.getElementById("cropresult").style.display = 'none';
        }
        if (variety_select.value === "Other") {
            document.getElementById("varietyresult").style.display = 'block';
        } else {
            document.getElementById("varietyresult").style.display = 'none';
        }
        if (machine_select.value === "Other") {
            document.getElementById("machineresult").style.display = 'block';
        } else {
            document.getElementById("machineresult").style.display = 'none';
        }
    }
    function companyCall(e) {
        check(e);
        company_drop(e);
    }
    function userCall(e) {
        check(e);
        user_drop(e);
    }
    function cropCall(e) {
        check(e);
        crop_drop(e);
    }
    function varietyCall(e) {
        check(e);
        variety_drop(e);
    }
    function machineCall(e) {
        check(e);
        machine_drop(e);
    }


    function newCompInput(e) {
        setNewCompany(e.target.value);
        // console.log(newCompany)

    }

    function newUserInput(e) {
        setNewuser(e.target.value);
        // console.log(newUser)

    }

    function newCropInput(e) {
        setNewCrop(e.target.value);
        // console.log(newCrop)

    }

    function newVarietyInput(e) {
        setNewVariety(e.target.value);
        // console.log(newVariety)

    }

    function newMachineInput(e) {
        setNewMachine(e.target.value);
        // console.log(newMachine)
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
        <div id="main">

            <p id="signout_button">
                <button onClick={() => auth.signOut()}><Link to="/" style={{ textDecoration: "none" }}>Sign Out</Link>
                </button>
            </p>



            <h2 style={{ textAlign: "center" }}>Upload Module Files</h2>

            <div id="files">
                <div id="py">
                    <h3 id="py_text">Select Py File</h3>
                    <form onSubmit={formHandler1}>
                        <input type="file" className="input" onChange={handleChange1} required />
                        <div id="output1"></div>



                    </form>
                </div>
                <div id="modal">
                    <h3 id="modal_text">Select Modal File</h3>
                    <form onSubmit={formHandler2}>
                        <input type="file" className="input" onChange={handleChange2} required />
                        <div id="output2"></div>


                    </form>
                </div>
            </div>

            <div className="user_form">
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
            <div className="threshold">

                <input value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Comments" required></input>
            </div>
            <div className="line">
                <h3 style={{ textAlign: "center" }}>Upload History of Py file</h3>
                <div>
                    <h4>Name of Py File--> {tempName1}</h4>
                    <h4>File Type--{type1}
                    </h4>
                    <h4>Modified Size--{size1}</h4>
                    <h4 id="time">Modified Date and Time--{date1} {time1}</h4>
                </div >


                <div id="table1">
                    <table>
                        <tr>
                            <th>Date</th>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                            <th>Realease Type</th>
                            <th></th>
                            <th></th>
                            <th>Comments</th>
                            <th></th>
                            <th></th>
                            <th>User</th>


                        </tr>


                        {customersData1?.map(({ id, data }) => (


                            <tr key={id}>



                                <td>{data.time}</td>
                                <td></td>
                                <td></td>
                                <td>{data.name}</td>
                                <td></td>
                                <td></td>
                                <td>{data.release_type}</td>
                                <td></td>
                                <td></td>
                                <td>{data.comment}</td>
                                <td></td>
                                <td></td>
                                <td>{data.user}</td>

                            </tr>



                        ))}


                    </table>
                </div>
                <button onClick={upload1}>Submit</button>
                {/* <button onClick={show_log1}>Show Logs</button> */}

                <h3 style={{ textAlign: "center" }}>Uplaod History of Modal file</h3>
                <div>
                    <h4> Name of Modal File--> {tempName2}
                    </h4>
                    <h4>File Type--{type2}</h4>
                    <h4>File Size--{size2}</h4>
                    <h4 id="time">Modified Date and Time--{date2} {time2}</h4>
                </div>


                <div id="table2">
                    <table>
                        <tr>
                            <th>Date</th>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                            <th>Realease Type</th>
                            <th></th>
                            <th></th>
                            <th>Comments</th>
                            <th></th>
                            <th></th>
                            <th>User</th>
                        </tr>


                        {customersData2?.map(({ id, data }) => (


                            <tr key={id}>


                                <td>{data.time}</td>
                                <td></td>
                                <td></td>
                                <td>{data.name}</td>
                                <td></td>
                                <td></td>
                                <td>{data.release_type}</td>
                                <td></td>
                                <td></td>
                                <td>{data.comment}</td>
                                <td></td>
                                <td></td>
                                <td>{data.user}</td>
                            </tr>



                        ))}


                    </table>
                </div>
                <button onClick={upload2}>Submit</button>
                <div><div>
                    <p><button onClick={clear}>Clear</button></p>
                </div></div>
                <hr />
                <hr />

                <h3>Update result_config_dev_en</h3>

                <Result />
                {/* <h2>{image1}</h2> */}
                <hr />
                <hr />
                <h3>Update threshold_dev </h3>
                <Threshold />


                <hr />
                <hr />
                <h3>Update valid_location </h3>

                <Location />
                <hr />
                <hr />
                <h3>Update valid_numbers </h3>

                <PhNumber />




            </div >
            {/* <button onClick={show_log2}>Show Logs</button> */}




            {/* <h2 style={{ textAlign: "center" }}>Upload Module Files</h2>

            <div id="files">
                <div id="py">
                    <h3 id="py_text">Select Py File</h3>
                    <form onSubmit={formHandler1}>
                        <input type="file" className="input" onChange={handleChange1} required />
                        <div id="output1"></div>



                    </form>
                </div>
                <div id="modal">
                    <h3 id="modal_text">Select Modal File</h3>
                    <form onSubmit={formHandler2}>
                        <input type="file" className="input" onChange={handleChange2} required />
                        <div id="output2"></div>


                    </form>
                </div>
            </div>
            <hr />
            <div className="user_form">

                <select type="text" id="company" placeholder="Company's Name" onChange={company_drop}
                    value={company}>
                    <option>Select</option>
                    <option>Comp 1</option>
                    <option>Comp 2</option>
                    <option>Comp 3</option>
                </select>
                <h5>You have selected----{company}</h5>


                <select type="text" id="crop" placeholder="Crop's Name" onChange={crop_drop}
                    value={crop}>
                    <option>Select</option>
                    <option>Crop 1</option>
                    <option>Crop 2</option>
                    <option>Crop 3</option>
                    <option>Crop 4</option>
                </select>
                <h5>You have selected----{crop}</h5>

                <select type="text" id="machine" placeholder="Machine's Name" onChange={machine_drop}
                    value={machine}>
                    <option>Select</option>
                    <option>Mach 1</option>
                    <option>Mach 2</option>
                    <option>Mach 3</option>
                    <option>Mach 4</option>
                </select>
                <h5>You have selected----{machine}</h5>

                <select type="text" id="variety" placeholder="Variety's Name" onChange={variety_drop}
                    value={variety}>
                    <option>Select</option>
                    <option>Variety 1</option>
                    <option>Variety 2</option>
                    <option>Variety 3</option>
                </select>
                <h5>You have selected----{variety}</h5>

            </div>
            <div id="option">
                <h3 style={{ textAlign: "center" }}>Choose the Mode</h3>
                <select id="mode" onChange={selectedMode}>
                    <option>Select</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Offline">Both</option>
                </select>

                <h5>You have selected the Mode-->{value1}</h5>
                <h3 style={{ textAlign: "center" }}>Choose the Puropse</h3>
                <select id="purpose" onChange={selectedPurpose}>
                    <option>Select</option>
                    <option>Dev</option>
                    <option>Staging</option>
                    <option>Production</option>
                </select>
                <h5>You have selected----{value3}</h5>
                <h3 style={{ textAlign: "center" }}>Choose the Functionality</h3>
                <select id="functionality" onChange={selectedFunctionality}>
                    <option>Select</option>
                    <option>Object Detection</option>
                    <option>Classification</option>
                    <option>Segmentation </option>

                </select>

                <h5>You have selected the Functionality--> {value2}</h5>
            </div>

            <hr />
            <hr />
            <h3 style={{ textAlign: "center" }}>Uplaod History of Py file</h3>
            <div>
                <h4>Final Name of Py File--> {string}_{company}_{crop}_{machine}_{variety}_{value1}_{value2}_{value3}.{string2}</h4>
                <h4>File Type--{type1}
                </h4>
                <h4>Modified Size--{size1}</h4>
                <h4 id="time">Modified Date and Time--{date1} {time1}</h4>
            </div >
            <div id="table1">
                <table>
                    <tr>

                        <th>Name</th>
                        <th></th>
                        <th>Time</th>
                    </tr>


                    {customersData1?.map(({ id, data }) => (


                        <tr key={id}>


                            <td>{data.name}</td>
                            <td></td>
                            <td>{data.time}</td>
                            <td></td>
                            <td>{ }</td>

                        </tr>



                    ))}


                </table>
            </div>
            <button onClick={upload1}>Upload Py File</button>
            <button onClick={show_log1}>Show Logs</button>


            <h3 style={{ textAlign: "center" }}>Uplaod History of Modal file</h3>
            <div>
                <h4>Final Name of Modal File--> {string1}_{company}_{crop}_{machine}_{variety}_{value1}_{value2}_{value3}.{string4}
                </h4>
                <h4>File Type--{type2}</h4>
                <h4>File Size--{size2}</h4>
                <h4 id="time">Modified Date and Time--{date2} {time2}</h4>


            </div>
            <div id="table2">
                <table>
                    <tr>

                        <th>Name</th>
                        <th></th>
                        <th>Time</th>
                    </tr>


                    {customersData2?.map(({ id, data }) => (


                        <tr key={id}>


                            <td>{data.name}</td>
                            <td></td>

                            <td>{data.time}</td>

                        </tr>



                    ))}


                </table>
            </div>
            <button onClick={upload2}>Upload Modal File</button>
            <button onClick={show_log2}>Show Logs</button> */}

        </div>

    )

}

export default Home