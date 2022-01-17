// import React, { useState, useEffect } from "react";
// import firebase from "firebase/compat/app"

// import db from "./firebase1";
// import { addDoc, collection, doc, setDoc } from "firebase/firestore";


// import { ref, uploadBytesResumable } from "firebase/storage";
// import { auth } from "./firebase";
// import { storage } from "./firebase1";

// import { uploadBytes } from 'firebase/storage'
// import { app } from './firebase1';
// import Threshold from "./Threshold";
// import PhNumber from './PhNumber'
// import { upload } from "@testing-library/user-event/dist/upload";


// function Location(props) {




// const [customerCities1, setCustomerCities1] = useState();
// const [customerCities2, setCustomerCities2] = useState();
// const [customerCities3, setCustomerCities3] = useState();
// const [customerCities4, setCustomerCities4] = useState();
// const [comments, setComments] = useState("");
// const [time, setTime] = useState("");

//     var city = []
// async function addLocation() {


//     var ref = db.collection("valid_location").doc(JSON.stringify(props.company));
//     var ref1 = db
//         .collection("valid_location")
//         .doc(props.company)
//         .collection("user1").doc();


//     ref.update({
//         cities: firebase.firestore.FieldValue.arrayUnion(customerCities1),

//     })
//     var final_loc = customerCities1 + "," + customerCities2 + "," + customerCities3 + "," + customerCities4
//     const docRef = await setDoc(

//         ref1, {
//         cities: firebase.firestore.FieldValue.arrayUnion(final_loc),
//         crop: props.crop,
//         variety: props.variety,
//         machine: props.machine,
//         functionality: props.functionality,
//         mode: props.mode,
//         time: props.time,

//         purpose: props.purpose,
//         comments: comments,
//     }
//     )
//     console.log(props.time);
//     setCustomerCities1("");
//     setCustomerCities2("");
//     setCustomerCities3("");
//     setCustomerCities4("");

//         async function submit() {
//             docRef = await setDoc(

//                 ref1, {

//                 time: props.time,
//             })
//         }
//     }
//     console.log(props.time);

//     return (
//         <div className="App">
//             <div className="App__form">
//                 <input
//                     type="text"
//                     placeholder="lat1"
//                     value={customerCities1}
//                     onChange={(e) => setCustomerCities1(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="long1"
//                     value={customerCities2}
//                     onChange={(e) => setCustomerCities2(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="lat2"
//                     value={customerCities3}
//                     onChange={(e) => setCustomerCities3(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="long2"
//                     value={customerCities4}
//                     onChange={(e) => setCustomerCities4(e.target.value)}
//                 />
//                 <input value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Comments"></input>

//                 <button onClick={addLocation}>Submit</button>
//             </div>
//         </div>
//     );
// }

// export default Location





import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app"

import db from "../firebase1";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";


import { ref, uploadBytesResumable } from "firebase/storage";
import { auth } from ".././firebase";
import { storage } from ".././firebase1";

import { uploadBytes } from 'firebase/storage'
import { app } from '.././firebase1';
import PhNumber from './PhNumber'
import { upload } from "@testing-library/user-event/dist/upload";

function Location(props) {
    const [customerPurpose, setCustomerPurpose] = useState("");
    const [customerUnit, setCustomerUnit] = useState(0);
    const [customerField_type, setustomerField_type] = useState(0);
    const [customerFields, setCustomerFields] = useState("");
    var [customerNumber, setCustomerNumber] = useState();



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

    const [customerCities1, setCustomerCities1] = useState();
    const [customerCities2, setCustomerCities2] = useState();
    const [customerCities3, setCustomerCities3] = useState();
    const [customerCities4, setCustomerCities4] = useState();
    const [comments, setComments] = useState("");
    const [time, setTime] = useState("");

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
    const [customerUser, setCustomerUser] = useState("");

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
        setCustomerCities1("")
        setCustomerCities2("")
        setCustomerCities3("")
        setCustomerCities4("")
        setComments("")
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
        db.collection("valid_location").onSnapshot((snapshot) => {
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

    var tempName2 = props.string1 + "_" + company + "_" + crop + "_" + machine + "_" + variety + "_" + value1 + "_" + value2 + "." + props.string4;

    var tempName1 = props.string + "_" + company + "_" + crop + "_" + machine + "_" + variety + "_" + value1 + "_" + value2 + "." + props.string2;

    const mySet1 = new Set()

    const upload = () => {
        const storageRef = ref(storage, `/valid_location/`)
        db.collection("valid_location").add({
            company: company,
            user: customerUser,
            crop: crop,
            variety: variety,
            machine: machine,
            release_type: value3,
            mode: value1,
            time: currDate,
            comment: comments,
            city: cities,


        })


    }




    function show_log1() {
        var show_log1 = document.getElementById("table1");
        if (show_log1.style.display === "none") {
            show_log1.style.display = "block";
        } else {
            show_log1.style.display = "none";
        }

        // }


        // function show_log2() {
        //     var show_log2 = document.getElementById("table2");
        //     if (show_log2.style.display === "none") {
        //         show_log2.style.display = "block";
        //     } else {
        //         show_log2.style.display = "none";
        //     }

        // }
    }
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



    // const upload = () => {
    //     setNewname2(name_2)
    //     if (props.image2 == null)
    //         return;
    //     // console.log(image);
    //     const storageRef = ref(storage, `/modal_file/${JSON.stringify(name2)}`)
    //     uploadBytes(storageRef, props.image2).then((snapshot) => {
    //         console.log('Uploaded a blob or file!');
    //     });


    //     if (!mySet2.has(tempName2)) {


    //         if (tempName1 !== "______.") {
    //             mySet1.add(tempName2)
    //             db.collection("modal_data_location").add({
    //                 name: tempName2,
    //                 time: props.time2,
    //                 release_type: value2,
    //                 comment: comments,
    //                 // comments:
    //                 // comments:
    //             });
    //         }
    //     }

    //     setImageName2("");
    //     setImageTime2("");
    // }

    // async function addLocation1() {


    //     var ref1 = db
    //         .collection("valid_location")
    //         .doc(company)
    //         .collection(customerUser).doc();



    //     var final_loc = customerCities1 + "," + customerCities2 + "," + customerCities3 + "," + customerCities4
    //     const docRef = await setDoc(

    //         ref1, {
    //         cities: final_loc,
    //         file_name: newname1,
    //         crop: crop,
    //         variety: variety,
    //         machine: machine,
    //         functionality: value2,
    //         mode: value1,
    //         time: props.time1,
    //         comments: comments,
    //     }
    //     )
    //     console.log(props.time);
    //     setCustomerCities1("");
    //     setCustomerCities2("");
    //     setCustomerCities3("");
    //     setCustomerCities4("");
    // }

    // async function addLocation2() {


    //     var ref1 = db
    //         .collection("valid_location")
    //         .doc(company)
    //         .collection(customerUser).doc();



    //     var final_loc = customerCities1 + "," + customerCities2 + "," + customerCities3 + "," + customerCities4
    //     const docRef = await setDoc(

    //         ref1, {
    //         cities: final_loc,
    //         file_name: newname2,
    //         crop: crop,
    //         variety: variety,
    //         machine: machine,
    //         functionality: value2,
    //         mode: value1,
    //         time: props.time2,
    //         comments: comments,
    //     }
    //     )
    //     console.log(props.time);
    //     setCustomerCities1("");
    //     setCustomerCities2("");
    //     setCustomerCities3("");
    //     setCustomerCities4("");



    var cities = customerCities1 + "," + customerCities2 + "," + customerCities3 + "," + customerCities4

    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var currTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    var currDate = date + " " + currTime
    console.log(currDate)



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
            document.getElementById("companyloc").style.display = 'block';
        } else {
            document.getElementById("companyloc").style.display = 'none';
        }
        if (user_select.value === "Other") {
            document.getElementById("userloc").style.display = 'block';
        } else {
            document.getElementById("userloc").style.display = 'none';
        }
        if (crop_select.value === "Other") {
            document.getElementById("croploc").style.display = 'block';
        } else {
            document.getElementById("croploc").style.display = 'none';
        }
        if (variety_select.value === "Other") {
            document.getElementById("varietyloc").style.display = 'block';
        } else {
            document.getElementById("varietyloc").style.display = 'none';
        }
        if (machine_select.value === "Other") {
            document.getElementById("machineloc").style.display = 'block';
        } else {
            document.getElementById("machineloc").style.display = 'none';
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
        document.getElementById("companyloc").style.display = 'none';
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
        document.getElementById("userloc").style.display = 'none';
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
        document.getElementById("croploc").style.display = 'none';
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
        document.getElementById("varietyloc").style.display = 'none';
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
        document.getElementById("machineloc").style.display = 'none';
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



            <div className="user_form3">
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
                    <h4>You have selected----{value3}</h4>
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

            <hr />
            <hr />
            <div className="loc">
                <div>
                    <h4>Lat 1</h4><input
                        type="text"
                        placeholder="lat1"
                        value={customerCities1}
                        onChange={(e) => setCustomerCities1(e.target.value)}
                    /></div>
                <div> <h4>Long 1</h4>  <input type="text"
                    placeholder="long1"
                    value={customerCities2}
                    onChange={(e) => setCustomerCities2(e.target.value)}
                /></div>
                <div><h4>Lat 2</h4><input
                    type="text"
                    placeholder="lat2"
                    value={customerCities3}
                    onChange={(e) => setCustomerCities3(e.target.value)}
                /></div>
                <div><h4>Long 2</h4>  <input
                    type="text"
                    placeholder="long2"
                    value={customerCities4}
                    onChange={(e) => setCustomerCities4(e.target.value)}
                /></div>
                <div><h4>Comment</h4>  <input value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Comments"></input>
                </div>






            </div>
            {/* <h3 style={{ textAlign: "center" }}>Uplaod History of Py file</h3>
            <div>
                <h4>Final Name of Py File--> {string}_{company}_{crop}_{machine}_{variety}_{value1}_{value2}_{value3}.{string2}</h4>
                <h4>File Type--{type1}
                </h4>
                <h4>Modified Size--{size1}</h4>
                <h4 id="time">Modified Date and Time--{date1} {time1}</h4>
            </div > */}
            {/* <div id="table1">
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


                    {customersData1?.map(({ id, data }) => (


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
            </div> */}
            {/* <button onClick={upload}>Upload Py File</button> */}
            {/* <button onClick={show_log1}>Show Logs</button> */}

            {/* <div><button onClick={addLocation1}>Submit</button></div> */}
            {/* <h3 style={{ textAlign: "center" }}>Uplaod History of Modal file</h3>
            <div>
                <h4>Final Name of Modal File--> {string1}_{company}_{crop}_{machine}_{variety}_{value1}_{value2}_{value3}.{string4}
                </h4>
                <h4>File Type--{type2}</h4>
                <h4>File Size--{size2}</h4>
                <h4 id="time">Modified Date and Time--{date2} {time2}</h4>


            </div> */}

            <div><br></br></div>
            <div id="table1">
                <table>
                    <tr>


                        <th>Time</th>
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
                        <th>Release type</th>
                        <th></th>
                        <th></th>
                        <th>Mode</th>

                        <th></th>
                        <th></th>
                        <th>City</th>
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

                            <td>{data.city}</td>

                            <td></td>
                            <td></td>
                            <td>{data.comment}</td>


                        </tr>



                    ))}


                </table>
            </div>
            <button onClick={upload}>Submit</button>
            <button onClick={show_log1}>Show Logs</button>

            {/* <div><button onClick={addLocation2}>Submit</button></div> */}
            <div>
                <p><button onClick={clear}>Clear</button></p>
            </div>


        </div>
    );
}

export default Location;
