

import React, { useState, useEffect } from "react";

// import { storage } from "./firebase1";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

import Signin from "./Signin";
import Home from "./Home";
import { auth } from "./firebase";




function App() {
  // const [progress, setProgress] = useState(0);
  // const formHandler = (e) => {
  //   e.preventDefault();
  //   const file = e.target[0].files[0];
  //   uploadFiles(file);
  // };

  // const formHandler1 = (e) => {
  //   e.preventDefault();
  //   const file = e.target[0].files[0];
  //   uploadFiles(file);
  // };

  // const uploadFiles = (file) => {
  //   //
  //   if (!file) return;
  //   const sotrageRef = ref(storage, `files/${file.name}`);
  //   const uploadTask = uploadBytesResumable(sotrageRef, file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const prog = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(prog);
  //     },
  //     (error) => console.log(error),
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         console.log("File available at", downloadURL);
  //       });
  //     }
  //   );
  // };
  // var newname = ""
  // function rename(e) {
  //   var name = e
  //   e = newname
  //   console.log(e)
  // }

  // const handleSubmission = () => {
  // };

  // const [value1, setValue1] = useState('');

  // const [value2, setValue2] = useState('');
  // const [company, setCompany] = useState('');
  // const [crop, setCrop] = useState('');
  // const [machine, setMachine] = useState('');
  // const [variety, setVariety] = useState('');

  // //console.log(newname);
  // function rename(e) {
  //   var name = e
  //   e = newname
  //   console.log(e)
  // }
  // const handleSelect1 = (e) => {
  //   console.log(e);
  //   setValue1(e)
  // }
  // const handleSelect2 = (e) => {
  //   console.log(e);
  //   setValue2(e)
  // }

  // const [string, setString] = useState("");
  // const [string2, setString2] = useState("");
  // var str
  // var str4
  // let handleChange = e => {
  //   var files = e.target.files;
  //   var filesArray = [].slice.call(files);
  //   filesArray.forEach(e => {

  //     console.log(e.size);
  //     console.log(e.lastModifiedDate);
  //     console.log(e.type);
  //     str = e.name;
  //     str4 = str.substring(str.indexOf(".") + 1);
  //     str = str.substring(0, str.indexOf("."));
  //     setString(str);
  //     setString2(str4);
  //   });
  // };

  // const [string1, setString1] = useState("");
  // const [string4, setString4] = useState("");
  // const [date, setDate] = useState("");
  // const [type, setType] = useState("");
  // const [size, setSize] = useState("");
  // var str2;
  // var str3;
  // var fileSize;
  // var modDate;
  // var fileType;

  // let handleChange1 = e => {
  //   var files = e.target.files;
  //   var filesArray = [].slice.call(files);
  //   filesArray.forEach(e => {
  //     console.log(typeof (e.lastModifiedDate))
  //     // fileSize = e.size
  //     // setSize(fileSize);
  //     // modDate = e.lastModifiedDate
  //     // setDate(modDate);
  //     // fileType = e.type
  //     // setType(fileType);
  //     // // console.log(e.name);

  //     str2 = e.name;

  //     str3 = str2.substring(str2.indexOf(".") + 1);
  //     str2 = str2.substring(0, str2.indexOf("."));
  //     setString1(str2);


  //     //e.name = newname;
  //     console.log(e.name)
  //     setString4(str3);




  //   });
  // };
  // newname = string1 + value1 + "_" + value2 + "_" + company + "_" + crop + "_" + machine + "_" + variety + string4;

  // console.log(newname)
  // const [user, setUser] = useState(null)
  // useEffect(() => {
  //   var unsubscribe = auth.onAuthStateChanged(userAuth => {
  //     var user = {
  //       uid: userAuth.uid,
  //       email: userAuth.email
  //     }
  //     if (userAuth) {
  //       console.log(userAuth)
  //       setUser(user)
  //     } else {
  //       setUser(null)
  //     }
  //   })
  //   return unsubscribe
  // }, [])



  //console.log(str2);


  return (
    <div className="App">

      {/* {user ? <Home /> : <Signin />} */}
      <Home />

      {/* <form onSubmit={formHandler}>
        <input type="file" className="input" onChange={e => handleChange(e)} />
        <div id="output1"></div>
        <button type="submit">Upload</button>

      </form>
      <form onSubmit={formHandler1}>
        <input type="file" className="input" onChange={e => handleChange1(e)} />
        <div id="output2"></div>

        <button type="submit">Upload</button>
      </form>
      <hr />
      <h2>Uploading done {progress}%</h2>

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
      your file name is {string}_{company}_{crop}_{machine}_{variety}_{value1}_{value2}.{string2}
      <div></div>
      your file name is {string1}_{company}_{crop}_{machine}_{variety}_{value1}_{value2}.{string4}





      <button type="submit">Submit</button> */}
    </div>

  );
}

export default App;