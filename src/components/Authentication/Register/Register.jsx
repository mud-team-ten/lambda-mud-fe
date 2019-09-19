import React from "react"
import Form from "../Form/Form"
import "../Authentication.css"

const Register = () => {
    return (
        <div className="nes-container with-title is-centered auth-container">
            <p className="title">Please Create Your Account</p>
            <Form type="register" />
        </div>
    )
}

export default Register