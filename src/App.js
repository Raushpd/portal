

import React, { useState, useEffect } from "react";

import Home from "./Home";
import { auth } from "./firebase";
import Signin from "./Signin";
import Login from "./Login";
import Main from "./Main";
import CompanyAdmin from "./CompanyAdmin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main1 from "./Main1";
import CompanyAdmin1 from "./CompanyAdmin1";
import Signup from "./Signup";
import ForgotPassword from "./comp/ForgotPass1";



function App() {

  const [user, setUser] = useState(null)
  useEffect(() => {
    var unsubscribe = auth.onAuthStateChanged(userAuth => {
      var user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])

  var mail = ""
  if (user) {

    var txt = user.email.substring(user.email.indexOf("@"))
    mail = user.email;

  }

  return (
    <div className="App">

      {/* <Main />
      <Link to="/signin">sign in</Link> */}
      <Router>
        <Routes>

          <Route exact path="/" element={<Signin user={mail} />} />
          {/* <Route exact path="/home" element={<Home />} />
          <Route exact path="/company" element={<CompanyAdmin1 />} /> */}
          <Route exact path="/company" element={<CompanyAdmin />} />

          <Route exact path="/signup" element={<Signup user={mail} />} />
          <Route exact path="/forgotpass" element={<ForgotPassword />} />

        </Routes>
      </Router>





    </div>

  );
}

export default App;