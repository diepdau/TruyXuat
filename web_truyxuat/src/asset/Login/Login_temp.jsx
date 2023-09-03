

import React, { useState } from 'react';

function Login() {
  // Tạo state cho tên đăng nhập và mật khẩu
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Xử lý thay đổi giá trị tên đăng nhập
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Xử lý thay đổi giá trị mật khẩu
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

return(
    <div>
        <div class="vh-100">
                <div class="container-fluid h-custom">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image"/>
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style="background: white;min-height: 350px;">
                        <form class="p-7">
                            <h1 class="text-center font-bold" style="margin-bottom: 10%;"> Login </h1>

                            <div class="form-outline mb-4">
                                <label class="form-label font-bold" for="username">User name<span style="color: red; font-weight: bold;">
                                    *</span></label>
                                <input type="text"  name="username" id="username" class="form-control form-control-lg"
                                placeholder="Enter Username"/>

                            </div>

                            <div class="form-outline mb-3">
                                <label class="form-label font-bold" for="form3Example4">Password<span
                                    style="color: red; font-weight: bold;"> *</span></label>
                                <input type="password"  name="password" id="password"
                                class="form-control form-control-lg" placeholder="Enter Password"/>
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" 
                                class="btn btn-primary btn-lg" style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                            </div>
                            

                        </form>

                    </div>
                    </div>
                </div>

                
        </div>
       
    </div>
)}
export default Login;