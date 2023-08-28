import React from 'react'
import './Login.css'
import '../../App.css'
// import {Link, NavLink} from 'react-router-dom'
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill} from 'react-icons/bs';

import { AiOutlineSwapRight} from 'react-icons/ai';

import video from '../Img/sunset_-_15779 (720p).mp4'
import logo from '../Img/logo-1446293_640.png'
const Login = () => {
  return (
    <div className='loginPage flex'>
        <div className='container flex'>

            <div className='videoDiv'>
                <video src={video} autoPlay muted loop></video>
                <div className="textDiv">
                    <h2 className="title">
                        Create And Seli Extraordiary Products
                    </h2>
                    <p>Adopt the peace of nature</p>
                </div>

                <div className="footerDiv flex">
                    <span className="text">Don't have an account</span>
                    {/* <Link to={'/register'}>
                    <button className="btn">
                        Sign Up
                    </button>
                    </Link> */}
                </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image" />
                    <h3>Welocme back!</h3>
                </div>

                <form action="" className='form grid'>
                    <span>Login status will go here</span>

                    <div className="inputDiv">
                        <label htmlFor="username">UserName</label>
                        <div className="input flex">
                            <FaUserShield className="icon"/>
                            <input type="text" id='username' placeholder='EnterUsername'/>
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            <BsFillShieldLockFill className="icon"/>
                            <input type="text" id='password' placeholder='Enter Password'/>
                        </div>
                    </div>

                    <button type='submit' className='btn flex'>
                        <span>Login</span>
                        <AiOutlineSwapRight className='icon'/>
                    </button>

                    <span className='forgotPassword'>
                        Forgot tour password?<a href=''> Click here</a>

                    </span>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login