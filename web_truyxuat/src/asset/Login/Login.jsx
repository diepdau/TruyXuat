import React, { useState } from 'react';
import './Login.css';

function Login_temp() {
 
  return (
    <div class="container">
    <div class="content">
      <div class="image-box">
       <img src="https://cdn.pixabay.com/photo/2023/06/14/04/34/yellow-rose-8062266_640.jpg" alt=""/>
      </div>
    <form action="#">
      <div class="topic">Send us a message</div>
      <div class="input-box">
        <input type="text" required/>
        <label>Enter your name</label>
      </div>
      <div class="input-box">
        <input type="text" required/>
        <label>Enter your email</label>
      </div>
      <div class="message-box">
        <label>Enter your message</label>
      </div>
      <div class="input-box">
        <input type="submit" value="Send Message"/>
      </div>
    </form>
  </div>
  </div>
  );
}

export default Login_temp;