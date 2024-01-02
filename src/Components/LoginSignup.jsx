import { Lock, Mail } from 'feather-icons-react/build/IconComponents'
import User from 'feather-icons-react/build/IconComponents/User'
import React, { useState } from 'react'
import './LoginSignup.css'



function LoginSignup() {

    const [action,setAction]=useState("Login")


  return (
    <>

    <div className="container">

        <div className="header" >
            <div className="text" >{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs" >

            {action==="Login"?<div></div>:

             <div className="input">
                <div className='icon'><User/></div>
                <input type="text" placeholder='Name' />
            </div>
            }

           

            <div className="input" >
                <div className='icon'><Mail/></div>
                <input type="email" placeholder='Email Id' />
            </div>

            <div className="input">
                <div className='icon'><Lock/></div>
                <input type="password" placeholder='Password' />
            </div>

        </div>

        {action==="Sign Up"?<div></div>:
        
        <div className="forgot-password">
             Forgot Password? <span>Click Here!</span>
        </div>
        }

        <div className="submit-container">
            <div className={action==="Sign Up"? "submit":"submit gray"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
            <div className={action==="Login"? "submit":" submit gray"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>

    </div>

    </>
  )
}

export default LoginSignup