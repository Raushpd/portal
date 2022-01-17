

import React, { useState, useEffect } from "react";

import Home from "./Home";
import { auth } from "./firebase";
import Signin from "./Signin";



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




  return (
    <div className="App">

      {user ? <Home /> : <Signin />}

    </div>

  );
}

export default App;