import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const loginCredentials = {
        name: "demo@gmail.com",
        password: "demo@123"
    }

    const hanldeLoginClick = (e) => {
        e.preventDefault()

        if (login.username === loginCredentials.name && login.password === loginCredentials.password) {
            navigate('/home');
        }
    }

    return (
        <div>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <label>Username :</label>
                        <input autoComplete="off" placeholder="example@gmail.com" type="text" name="name" onChange={(e) =>setLogin({...login,username: e.target.value})} required="" />
                    </div>
                    <div className="user-box">
                        <label>Password :</label>
                        <input  type="password" placeholder="***********" name="password" onChange={(e) =>setLogin({...login,password: e.target.value})} required="" />
                    </div>
                    <button className="button" onClick={hanldeLoginClick} >
                        Continue
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
