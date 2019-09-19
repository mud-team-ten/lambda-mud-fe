import React, { Component } from "react";
import axios from "axios";
import "nes.css/css/nes.min.css";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirm: "",
      error: ""
    };
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  auth = e => {
    e.preventDefault();

    let endpoint = "";
    let usr = {};

    if (this.props.type === "register")
      endpoint = "https://lambda-mud-test.herokuapp.com/api/registration";
    else endpoint = "https://lambda-mud-test.herokuapp.com/api/login";

    if (this.props.type === "register") {
      usr = {
        username: this.state.username,
        password1: this.state.password,
        password2: this.state.confirm
      };
    } else {
      usr = {
        username: this.state.username,
        password: this.state.password
      };
    }

    return axios
      .post(endpoint, usr)
      .then(res => console.log(res))
      .catch(err => {
        this.setState({ error: err.message, showError: true });
        console.log(this.state.error);
      });
  };

  render() {
    return (
      <div className="auth-form-wrapper">
        <form onSubmit={this.auth}>
          <div className="nes-field auth-input">
            <label htmlFor="username_field">Username</label>
            <input
              type="text"
              id="username_field"
              className="nes-input"
              placeholder="Your Username"
              name="username"
              onChange={this.inputHandler}
            />
          </div>
          <div className="nes-field auth-input">
            <label htmlFor="password_field">Password</label>
            <input
              type="password"
              id="password_field"
              className="nes-input"
              placeholder="Your Password"
              name="password"
              onChange={this.inputHandler}
            />
          </div>
          {this.props.type === "register" && (
            <div className="nes-field auth-input">
              <label htmlFor="confirm_field">Confirm Password</label>
              <input
                type="password"
                id="confirm_field"
                className="nes-input"
                placeholder="Confirm Password"
                name="confirm"
                onChange={this.inputHandler}
              />
            </div>
          )}
          {this.props.type === "register" ? (
            <button type="submit" className="nes-btn is-primary">
              Register Account
            </button>
          ) : (
            <button type="submit" className="nes-btn is-primary">
              Log In
            </button>
          )}
        </form>
        {this.state.error && (
          <span className="nes-text is-error" >{this.state.error}</span>
        )}
      </div>
    );
  }
}

export default Form;
