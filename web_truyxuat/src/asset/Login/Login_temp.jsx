// <<<<<<< HEAD
// import React, { useState } from 'react';
// import "./Login.css"
// import luamach from '../../components/img/luamach.jpg'
// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [display, setDisplay] = useState(false);
//     const [message, setMessage] = useState('');
//     const [msgsInfo, setMsgsInfo] = useState([]);
  
//     const onSomeAction = (event) => {
//       // Xử lý sự kiện
//     };
  
//     const onSubmit = () => {
//       // Xử lý submit form
//     };
  
//     const OK = () => {
//       // Xử lý khi nhấn nút OK trong dialog
//       setDisplay(false);
//     };
  
//     return (
//       <section className="vh-100">
//         <div className="container-fluid h-custom">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-lg-6 col-xl-5">
//             <img src={luamach} className="img-fluid full-height" alt="Sample image" />
//             </div>
               
//                 <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 shadow " style={{ background: 'white' , minHeight: '350px' }}>

//               <form className="py-8">
//                 <h1 className="text-center font-bold" style={{ marginBottom: '10%' }}> Đăng kí </h1>
  
//                 {/* Email input */}
//                 <div className="form-outline mb-4">
//                   <label className="form-label font-bold" htmlFor="username">Tên<span style={{ color: 'red', fontWeight: 'bold' }}> *</span></label>
//                   <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" className="form-control form-control-lg" placeholder="Enter Username" />
//                 </div>
  
//                 {/* Password input */}
//                 <div className="form-outline mb-3">
//                   <label className="form-label font-bold" htmlFor="password">Mật khẩu<span style={{ color: 'red', fontWeight: 'bold' }}> *</span></label>
//                   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="form-control form-control-lg" placeholder="Enter Password" />
//                 </div>
  
//                 <div className="text-center text-lg-start mt-4 pt-2">
//                   <button type="button" onClick={onSubmit} className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
//                 </div>
//                 {/* p-messages component (if available) */}
//                 {msgsInfo && msgsInfo.map((message, index) => (
//                   <p key={index} className="line-height-3 m-0">
//                     {message}
//                   </p>
//                 ))}
  
//               </form>
  
//             </div>
//           </div>
//         </div>
  
       
//       </section>
//     );
    
//   };
  
//   export default Login;
// =======
// import React from 'react'
// import './Login.css'
// import '../../App.css'
// // import {Link, NavLink} from 'react-router-dom'
// import { FaUserShield } from 'react-icons/fa';
// import { BsFillShieldLockFill} from 'react-icons/bs';

// import { AiOutlineSwapRight} from 'react-icons/ai';

// import video from '../Img/sunset_-_15779 (720p).mp4'
// import logo from '../Img/logo-1446293_640.png'
// const Login = () => {
//   return (
//     <div className='loginPage flex'>
//         <div className='container flex'>

//             <div className='videoDiv'>
//                 <video src={video} autoPlay muted loop></video>
//                 <div className="textDiv">
//                     <h2 className="title">
//                         Create And Seli Extraordiary Products
//                     </h2>
//                     <p>Adopt the peace of nature</p>
//                 </div>

//                 <div className="footerDiv flex">
//                     <span className="text">Don't have an account</span>
//                     {/* <Link to={'/register'}>
//                     <button className="btn">
//                         Sign Up
//                     </button>
//                     </Link> */}
//                 </div>
//             </div>

//             <div className="formDiv flex">
//                 <div className="headerDiv">
//                     <img src={logo} alt="Logo Image" />
//                     <h3>Welocme back!</h3>
//                 </div>

//                 <form action="" className='form grid'>
//                     <span>Login status will go here</span>

//                     <div className="inputDiv">
//                         <label htmlFor="username">UserName</label>
//                         <div className="input flex">
//                             <FaUserShield className="icon"/>
//                             <input type="text" id='username' placeholder='EnterUsername'/>
//                         </div>
//                     </div>

//                     <div className="inputDiv">
//                         <label htmlFor="password">Password</label>
//                         <div className="input flex">
//                             <BsFillShieldLockFill className="icon"/>
//                             <input type="text" id='password' placeholder='Enter Password'/>
//                         </div>
//                     </div>

//                     <button type='submit' className='btn flex'>
//                         <span>Login</span>
//                         <AiOutlineSwapRight className='icon'/>
//                     </button>

//                     <span className='forgotPassword'>
//                         Forgot tour password?<a href=''> Click here</a>

//                     </span>
//                 </form>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Login
// >>>>>>> bc5f8382048029cec36349fbabaf75bf9e9ff578
