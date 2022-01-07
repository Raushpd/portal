import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable } from "firebase/storage";
import { auth } from "./firebase";
import firebase from "firebase/compat/app"
// import { firebase } from "./firebase";
// import getDownloadURL from 'firebase'
import { storage } from "./firebase1";

import { uploadBytes } from 'firebase/storage'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DropdownButton from 'react-bootstrap/lib/DropdownButton'
// import Dropdown from 'react-bootstrap/lib/Dropdown'
//import { auth } from './firebase';
//import Signin from "./Signin";
import { app } from './firebase1';

function Home() {



    // const [progress, setProgress] = useState(0);

    // const uploadFiles = (file) => {
    //     //
    //     if (!file) return;
    //     const sotrageRef = firebase.storage.ref(storage, `files/${file.name}`);
    //     const uploadTask = firebase.storage.uploadBytesResumable(sotrageRef, file);

    //     uploadTask.on(
    //         "state_changed",
    //         (snapshot) => {
    //             const prog = Math.round(
    //                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //             );
    //             setProgress(prog);
    //         },
    //         (error) => console.log(error),
    //         () => {
    //             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //                 console.log("File available at", downloadURL);
    //             });
    //         }
    //     );
    // };



    const output1 = document.querySelector("#output1");
    function processSelectedFiles(fileInput) {
        let files = fileInput.files;
        output1.textContent = "List of Selected Files:";

        for (let i = 0; i < files.length; i++) {
            output1.textContent += `\nFilename: ${files[i].name}`;
        }
    }
    const output2 = document.querySelector("#output2");
    function processSelectedFiles(fileInput) {
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
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [company, setCompany] = useState('');
    const [crop, setCrop] = useState('');
    const [machine, setMachine] = useState('');
    const [variety, setVariety] = useState('');
    function selectedMode() {
        var x = document.getElementById("mode").value;
        setValue1(x);
        console.log(x)

    }
    function selectedFunctionality() {
        var x = document.getElementById("functionality").value;
        setValue2(x);
        console.log(x)

    }
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');

    let handleChange1 = e => {
        var files = e.target.files;
        var filesArray = [].slice.call(files);
        filesArray.forEach(e => {

            console.log(e.size);
            console.log(e.lastModifiedDate);
            console.log(e.type);
            str = e.name;
            str4 = str.substring(str.indexOf(".") + 1);
            str = str.substring(0, str.indexOf("."));
            setString(str);
            setString2(str4);
        });
    };

    const [string1, setString1] = useState("");
    const [string4, setString4] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [size, setSize] = useState("");
    var str2;
    var str3;
    var fileSize;
    var modDate;
    var fileType;

    let handleChange2 = e => {
        var files = e.target.files;
        var filesArray = [].slice.call(files);
        filesArray.forEach(e => {
            console.log(typeof (e.lastModifiedDate))
            // fileSize = e.size
            // setSize(fileSize);
            // modDate = e.lastModifiedDate
            // setDate(modDate);
            // fileType = e.type
            // setType(fileType);
            // // console.log(e.name);

            str2 = e.name;

            str3 = str2.substring(str2.indexOf(".") + 1);
            str2 = str2.substring(0, str2.indexOf("."));
            setString1(str2);


            //e.name = newname;
            console.log(e.name)
            setString4(str3);




        });
    };

    const formHandler1 = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        // upload1(file);
    };

    const formHandler2 = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        // upload2(file);
    };

    const upload1 = () => {
        if (image1 == null)
            return;
        // console.log(image);
        const storageRef = ref(storage, `/py_file/${image1.name}`)
        // console.log(storageRef.name);
        // console.log(storageRef.fullPath);
        uploadBytes(storageRef, image1).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });

    }

    const upload2 = () => {
        if (image2 == null)
            return;
        // console.log(image);
        const storageRef = ref(storage, `/modal_file/${image2.name}`)
        // console.log(storageRef.name);
        // console.log(storageRef.fullPath);
        uploadBytes(storageRef, image2).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });

    }





    var newname1 = string + "_" + company + "_" + crop + "_" + machine + "_" + variety + "_" + value1 + "_" + value2 + "." + string2;
    var newname2 = string1 + "_" + company + "_" + crop + "_" + machine + "_" + variety + "_" + value1 + "_" + value2 + "." + string4;



    return (
        <div>

            <form onSubmit={formHandler1}>
                <input type="file" className="input" onChange={(e) => { setImage1(e.target.files[0]) }} />
                <div id="output1"></div>

                <button onClick={upload1}>Upload Py File</button>

            </form>
            <form onSubmit={formHandler2}>
                <input type="file" className="input" onChange={(e) => { setImage2(e.target.files[0]) }} />
                <div id="output2"></div>

                <button onClick={upload2}>Upload Modal File</button>
            </form>
            <hr />
            {/* <h2>Uploading done {progress}%</h2> */}

            <input type="text" placeholder="Company's Name" onChange={function (event) {
                setCompany(event.target.value);
            }}
                value={company}></input>


            <input type="text" placeholder="Crop's Name" onChange={function (event) {
                setCrop(event.target.value);
            }}
                value={crop}></input>

            <input type="text" placeholder="Machine's Name" onChange={function (event) {
                setMachine(event.target.value);
            }}
                value={machine}></input>

            <input type="text" placeholder="Variety's Name" onChange={function (event) {
                setVariety(event.target.value);
            }}
                value={variety}></input>


            <select id="mode" onChange={selectedMode}>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
            </select>

            <h4>You selected {value1}</h4>

            <select id="functionality" onChange={selectedFunctionality}>
                <option value="Object">Object</option>
                <option value="Detection">Detection</option>
                <option value="Classification">Classification</option>
                <option value="Dev">Dev</option>
                <option value="Staging">Staging</option>
                <option value="Production">Production</option>
            </select>

            <h4>You selected {value2}</h4>
            your file name is {string}_{company}_{crop}_{machine}_{variety}_{value1}_{value2}.{string2}
            <div></div>
            your file name is {string1}_{company}_{crop}_{machine}_{variety}_{value1}_{value2}.{string4}
            <div></div>

            <button type="submit">Submit</button>
            {/* <p><button onClick={() => auth.signOut()}>Sign out</button></p> */}


        </div>
    )
}

export default Home