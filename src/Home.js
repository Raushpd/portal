import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable } from "firebase/storage";
// import { firebase } from "./firebase";
// import getDownloadURL from 'firebase'
import { storage } from "./firebase1";
import { uploadBytes } from 'firebase/storage'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
//import { auth } from './firebase';
//import Signin from "./Signin";
import { app } from './firebase1';

function Home() {



    // const [progress, setProgress] = useState(0);
    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        upload(file);
    };

    const formHandler1 = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        upload(file);
    };

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


    const [image, setImage] = useState('');
    const [image1, setImage1] = useState('');
    const upload = () => {
        if (image == null)
            return;
        // console.log(image);
        const storageRef = ref(storage, `/images/${image.name}`)
        // console.log(storageRef.name);
        // console.log(storageRef.fullPath);
        uploadBytes(storageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });

    }


    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [company, setCompany] = useState('');
    const [crop, setCrop] = useState('');
    const [machine, setMachine] = useState('');
    const [variety, setVariety] = useState('');

    const handleSelect1 = (e) => {
        console.log(e);
        setValue1(e)
    }
    const handleSelect2 = (e) => {
        console.log(e);
        setValue2(e)
    }




    return (
        <div>

            <form onSubmit={formHandler}>
                <input type="file" className="input" onChange={(e) => { setImage(e.target.files[0]) }} />
                <div id="output1"></div>
                <button onClick={upload}>Upload</button>

            </form>
            <form onSubmit={formHandler1}>
                <input type="file" className="input" onChange={(e) => { setImage(e.target.files[0]) }} />
                <div id="output2"></div>

                <button onClick={upload}>Upload</button>
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


            <DropdownButton
                title="Mode"
                id="dropdown-menu-align-right"
                onSelect={handleSelect1}
            >
                <Dropdown.Item eventKey="Offline">Offline</Dropdown.Item>
                <Dropdown.Item eventKey="Online">Online</Dropdown.Item>
            </DropdownButton>

            <h4>You selected {value1}</h4>
            <DropdownButton

                title="Functionality"
                id="dropdown-menu-align-right"
                onSelect={handleSelect2}
            >
                <Dropdown.Item eventKey="Object">Object</Dropdown.Item>
                <Dropdown.Item eventKey="Detection">Detection</Dropdown.Item>
                <Dropdown.Item eventKey="Classification">Classification</Dropdown.Item>


                <Dropdown.Item eventKey="Dev">Dev</Dropdown.Item>
                <Dropdown.Item eventKey="Staging">Staging</Dropdown.Item>
                <Dropdown.Item eventKey="Production">Production</Dropdown.Item>
            </DropdownButton>
            <h4>You selected {value2}</h4>
            your file name is {company}_{crop}_{machine}_{variety}
            <div></div>

            <button type="submit">Submit</button>
            {/* <p><button onClick={() => firebase.auth.signOut()}>Sign out</button></p> */}


        </div>
    )
}

export default Home
