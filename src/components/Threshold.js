import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app"

import db from ".././firebase1";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";


import { ref, uploadBytesResumable } from "firebase/storage";
import { auth } from ".././firebase";
import { storage } from ".././firebase1";

import { uploadBytes } from 'firebase/storage'
import { app } from '.././firebase1';
import Location from "./Location";
import PhNumber from './PhNumber'
import { upload } from "@testing-library/user-event/dist/upload";

function Threshold(props) {


    const [customerBroken, setCustomerBroken] = useState('');
    const [customerThreshold, setCustomerThreshold] = useState('');
    const [comments, setComments] = useState("");
    const [customerPurpose, setCustomerPurpose] = useState("");
    const [customerUnit, setCustomerUnit] = useState(0);
    const [customerField_type, setustomerField_type] = useState(0);
    const [customerFields, setCustomerFields] = useState("");
    var [customerNumber, setCustomerNumber] = useState();
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


    const [class1, setClass1] = useState("")
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

    function selectedClass(e) {
        if (e.target.value !== "Select") {
            setClass1(e.target.value);
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
    let handleChange1 = e => {
        setImage1(e.target.files[0])
        var files = e.target.files;
        var filesArray = [].slice.call(files);
        filesArray.forEach(e => {

            console.log(e.size);
            console.log(e.lastModifiedDate);
            console.log(e.type);
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

            console.log(txt6)
            setDate1(txt6)
            setTime1(txt8)
            text3 = txt6 + " " + txt8;
            setText4(text3)
            setNewname1(name1)
            console.log(newname1)
            setImageName1(name1);
            setImageTime1(text3);
            console.log(imageName1)

            console.log(imageTime1)


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

            console.log(e.size);
            console.log(e.lastModifiedDate);
            console.log(typeof (e.lastModifiedDate))
            console.log(e.type);
            fileSize2 = e.size
            setSize2(fileSize2);
            modDate2 = e.lastModifiedDate
            console.log(typeof (modDate2))
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

            console.log(txt5)
            setDate2(txt3)
            setTime2(txt5)
            text = txt3 + " " + txt5;
            setText1(text)
            setNewname2(name2)
            setImageName2(name2);
            setImageTime2(text);



        });

    };
    var name1 = props.string + "_" + company + "_" + crop + "_" + machine + "_" + variety + "_" + value1 + "_" + value2 + "." + props.string2;
    // setNewname1(name1)
    var name2 = props.string1 + "_" + company + "_" + crop + "_" + machine + "_" + variety + "_" + value1 + "_" + value2 + "." + props.string4;
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
        setCustomerThreshold("")
        setCustomerBroken("")
        setClass1("")
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
        db.collection("threshold_dev").onSnapshot((snapshot) => {
            setCustomersData1(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
        console.log({ customersData1 })
        db.collection("threshold_dev").onSnapshot((snapshot) => {
            setCustomersData2(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
        console.log({ customersData2 })


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
    var tempName2 = props.string1 + "_" + company + "_" + crop + "_" + machine + "_" + variety + "_" + value1 + "_" + value2 + "." + props.string4;

    var tempName1 = props.string + "_" + company + "_" + crop + "_" + machine + "_" + variety + "_" + value1 + "_" + value2 + "." + props.string2;
    // const upload1 = () => {
    //     setNewname1(name_1)
    //     if (props.image1 == null)
    //         return;
    //     const storageRef = ref(storage, `/py_file/${JSON.stringify(name1)}`)
    //     console.log(typeof (newname1))
    //     if (tempName2 !== "______.") {
    //         uploadBytes(storageRef, props.image1).then((snapshot) => {
    //             console.log('Uploaded a blob or file!');
    //         });
    //     }

    //     console.log(tempName1)
    //     if (!mySet1.has(tempName1)) {


    //         if (tempName1 !== "______.") {
    //             mySet1.add(tempName1)
    //             db.collection("py_data_threshold").add({
    //                 name: tempName1,
    //                 time: props.time1,
    //                 release_type: value2,
    //                 comment: comments,
    //                 // comments:
    //             });
    //         }
    //     }


    //     setImageName1("");
    //     setImageTime1("");

    // }



    const upload = () => {
        const storageRef = ref(storage, `/threshold_dev/`)

        db.collection("threshold_dev").add({
            company: company,
            user: customerUser,
            crop: crop,
            variety: variety,
            machine: machine,
            release_type: value3,
            mode: value1,
            purpose: value2,
            time: currDate,

            comment: comments,

        });
    }

    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var currTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    var currDate = date + " " + currTime





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

    const mySet2 = new Set()

    // console.log(tempName2)

    const upload2 = () => {
        setNewname2(name_2)
        if (props.image2 == null)
            return;
        // console.log(image);
        const storageRef = ref(storage, `/modal_file/${JSON.stringify(name2)}`)
        if (tempName2 !== "______.") {
            uploadBytes(storageRef, props.image2).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });
        }



        if (!mySet2.has(tempName2)) {
            if (tempName2 !== "______.") {
                mySet2.add(tempName2)
                db.collection("modal_data_threshold").add({
                    name: tempName2,
                    time: props.time2,
                    release_type: value2,
                    comment: comments,
                    // comments:
                });
            }
        }

        setImageName2("");
        setImageTime2("");
    }





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
        console.log("hii")

    }

    var count = 1;
    async function addDoc1() {
        let number = document.getElementById("number")
        if (number.value > 100 || number.value < 0) {
            document.getElementById("message1").innerHTML = "Input range is 1 to 100"

        }
        else {

            // var ref = doc(db, "threshold_dev", props.company)
            var ref = db
                .collection("threshold_dev")
                .doc(company)
                .collection(customerUser).doc();

            const docRef = await setDoc(
                ref, {
                file_name: newname1,
                crop: crop,
                variety: variety,
                machine: machine,
                functionality: value2,
                mode: value1,
                time: props.time1,
                comments: comments,

            }
            )
        }
        count = count + 1;
        setCustomerBroken('');
        setCustomerThreshold('');
    }

    async function addDoc2() {
        let number = document.getElementById("number")
        if (number.value > 100 || number.value < 0) {
            document.getElementById("message2").innerHTML = "Input range is 1 to 100"

        }
        else {

            // var ref = doc(db, "threshold_dev", props.company)
            var ref = db
                .collection("threshold_dev")
                .doc(company)
                .collection(customerUser).doc();

            const docRef = await setDoc(
                ref, {
                file_name: newname2,
                crop: crop,
                variety: variety,
                machine: machine,
                functionality: value2,
                mode: value1,
                time: props.time2,
                comments: comments,

            }
            )
        }
        count = count + 1;
        setCustomerBroken('');
        setCustomerThreshold('');
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
            console.log("hii")
            document.getElementById("companythres").style.display = 'block';
        } else {
            document.getElementById("companythres").style.display = 'none';
        }
        if (user_select.value === "Other") {
            document.getElementById("userthres").style.display = 'block';
        } else {
            document.getElementById("userthres").style.display = 'none';
        }
        if (crop_select.value === "Other") {
            document.getElementById("cropthres").style.display = 'block';
        } else {
            document.getElementById("cropthres").style.display = 'none';
        }
        if (variety_select.value === "Other") {
            document.getElementById("varietythres").style.display = 'block';
        } else {
            document.getElementById("varietythres").style.display = 'none';
        }
        if (machine_select.value === "Other") {
            document.getElementById("machinethres").style.display = 'block';
        } else {
            document.getElementById("machinethres").style.display = 'none';
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
        var companyTxtVal = document.getElementById("company-input").value,

            newCompanyVal = document.createTextNode(companyTxtVal);
        setNewCompany(newCompanyVal)

        db.collection("field_company").add({
            name: newCompany,

            // comments:
        });
        document.getElementById("companythres").style.display = 'none';
        setCompany("")



    }
    const insertUserValue = () => {


        var userTxtVal = document.getElementById("user-input").value,

            newUserVal = document.createTextNode(userTxtVal);
        setNewuser(newUserVal)

        db.collection("field_user").add({
            name: newUser,

            // comments:
        });
        document.getElementById("userthres").style.display = 'none';
        setCustomerUser("")

    }
    const insertCropValue = () => {


        var cropTxtVal = document.getElementById("crop-input").value,

            newCropVal = document.createTextNode(cropTxtVal);
        setNewCrop(newCropVal)

        db.collection("field_crop").add({
            name: newCrop,

            // comments:
        });
        document.getElementById("cropthres").style.display = 'none';
        setCrop("")

    }
    const insertVarietyValue = () => {


        var varietyTxtVal = document.getElementById("variety-input").value,

            newVarietyVal = document.createTextNode(varietyTxtVal);
        setNewVariety(newVarietyVal)


        db.collection("field_variety").add({
            name: newVariety,

            // comments:
        });
        document.getElementById("varietythres").style.display = 'none';
        setVariety("")

    }


    const insertMachineValue = () => {


        var machineTxtVal = document.getElementById("machine-input").value,

            newMachineVal = document.createTextNode(machineTxtVal);
        setNewMachine(newMachineVal)
        console.log(newMachineVal)


        db.collection("field_machine").add({
            name: newMachine,

            // comments:
        });
        document.getElementById("machinethres").style.display = 'none';
        setMachine("")

    }



    return (

        <div className="App">

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
            </div> */}



            <div className="user_form2">
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


                <div>
                    <h4 style={{ textDecoration: "underline" }}>Choose the Class</h4>
                    <select onChange={selectedClass} value={class1}>

                        <option>Select</option>
                        <option>Class 1</option>
                        <option>Class 2</option>
                        <option>Class 3</option>
                    </select>
                    <h4>You have selected-- {class1}</h4>
                </div>
            </div>
            <hr />
            <hr />
            <h4>Comments</h4>
            <div className="threshold">

                <input value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Comments"></input>
            </div>
            {/* <hr />
            <hr /> */}
            {/* <div className="threshold">
                <input
                    type="number"
                    placeholder="Number"
                    id="number"

                />
                <input
                    type="number"
                    placeholder="Broken"
                    value={customerBroken}
                    onChange={(e) => setCustomerBroken(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Threshold"
                    value={customerThreshold}
                    onChange={(e) => setCustomerThreshold(e.target.value)}
                />
                <input value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Comments"></input>
            </div> */}
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
                        <th>Release Date</th>
                        <th></th>
                        <th></th>
                        <th>Mode</th>
                        <th></th>
                        <th></th>
                        <th>Purpose</th>
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
                            <td>{data.comment}</td>

                        </tr>



                    ))}


                </table>
            </div>
            <button onClick={upload}>Submit</button>
            <button onClick={show_log1}>Show Logs</button>
            {/* <button onClick={show_log1}>Show Logs</button>
            <div>

                <button onClick={addDoc1}>Submit</button><div id="message1"></div>
            </div> */}


            {/* <h3 style={{ textAlign: "center" }}>Uplaod History of Modal file</h3>
            <div>
                <h4>Final Name of Modal File--> {string1}_{company}_{crop}_{machine}_{variety}_{value1}_{value2}_{value3}.{string4}
                </h4>
                <h4>File Type--{type2}</h4>
                <h4>File Size--{size2}</h4>
                <h4 id="time">Modified Date and Time--{date2} {time2}</h4>


            </div> */}
            {/* <div><br></br></div>
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

                <button onClick={addDoc2}>Submit</button><div id="message2"></div>
            </div> */}

            <div>
                <p><button onClick={clear}>Clear</button></p>
            </div>
        </div>
    );
}

export default Threshold