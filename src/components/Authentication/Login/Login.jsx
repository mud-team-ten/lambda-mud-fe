import React from "react"
import Form from "../Form/Form"
import "../Authentication.css"

const Login = () => {
    return (
        <div className="nes-container with-title is-centered auth-container">
            <p className="title">Please Log In</p>
            <Form />
        </div>
    )
}

export default Login