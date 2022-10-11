import {useState} from 'react'

function Login () {
const[onLoginHover, setOnLoginHover] = useState(false)

function toggleLoginChange () {
    setOnLoginHover(true)
}

function toggleBackLoginChange () {
    setOnLoginHover(false)
}
    return (
        <div className="login-container">
        <h3 className={onLoginHover ? "login-btn login-hover" :"login-btn"} onMouseEnter={toggleLoginChange} onMouseLeave={toggleBackLoginChange}>Login</h3>
        <h3 className="login-btn register">Register</h3>
        </div>
    )
}

export default Login