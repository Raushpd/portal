import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CompanyAdmin1 from './CompanyAdmin1'
import './compstyle.css'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Test from './Test'

function CompanyAdmin() {
    const [active, setActive] = useState("")
    return (
        <div id="main1">

            <div id="section">
                <button style={{ display: 'flex', justifyContent: 'center' }} onClick={() => setActive("home")}>Internal Portal</button>
                <button style={{ display: 'flex', justifyContent: 'center' }} onClick={() => setActive("company")}>Company</button>
                {/* <button onClick={() => setActive("test")}>Test</button */}
            </div>

            <div className='component'>
                {active === "home" && <Home />}

                {active === "company" && <CompanyAdmin1 />}
                {/* {active === "test" && <Test />} */}
            </div>




        </div>
    )
}

export default CompanyAdmin
