import React, { useState } from 'react';
import "./Login.css"
import luamach from '../../components/img/luamach.jpg'
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [display, setDisplay] = useState(false);
    const [message, setMessage] = useState('');
    const [msgsInfo, setMsgsInfo] = useState([]);
  
    const onSomeAction = (event) => {
      // Xử lý sự kiện
    };
  
    const onSubmit = () => {
      // Xử lý submit form
    };
  
    const OK = () => {
      // Xử lý khi nhấn nút OK trong dialog
      setDisplay(false);
    };
  
    return (
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-6 col-xl-5">
            <img src={luamach} className="img-fluid full-height" alt="Sample image" />
            </div>
               
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 shadow " style={{ background: 'white' , minHeight: '350px' }}>

              <form className="py-8">
                <h1 className="text-center font-bold" style={{ marginBottom: '10%' }}> Đăng kí </h1>
  
                {/* Email input */}
                <div className="form-outline mb-4">
                  <label className="form-label font-bold" htmlFor="username">Tên<span style={{ color: 'red', fontWeight: 'bold' }}> *</span></label>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" className="form-control form-control-lg" placeholder="Enter Username" />
                </div>
  
                {/* Password input */}
                <div className="form-outline mb-3">
                  <label className="form-label font-bold" htmlFor="password">Mật khẩu<span style={{ color: 'red', fontWeight: 'bold' }}> *</span></label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="form-control form-control-lg" placeholder="Enter Password" />
                </div>
  
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button" onClick={onSubmit} className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                </div>
                {/* p-messages component (if available) */}
                {msgsInfo && msgsInfo.map((message, index) => (
                  <p key={index} className="line-height-3 m-0">
                    {message}
                  </p>
                ))}
  
              </form>
  
            </div>
          </div>
        </div>
  
       
      </section>
    );
    
  };
  
  export default Login;
