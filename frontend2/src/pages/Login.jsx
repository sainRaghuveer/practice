import React, { useEffect, useState } from 'react';
import "../styles/Signup.css";
const Login = () => {

    return (
        <div className='parent'>
            <h1>Signup Page</h1>
            {/* <form> */}
            <input type="text" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
            <button value="Signup">Submit</button>
            {/* </form> */}
            <p>Already have an account? <a href="/login">Login</a></p>

        </div>
    )
}

export default Login