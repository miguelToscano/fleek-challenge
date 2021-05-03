import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { history } from "../../utils/history"

import "./Login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/v1/users/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(credentials)
})
.then(data => data.json())
}

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { authorization } = await loginUser({
        email,
        password
      });
      setToken(authorization);
      history.push("/apiKeys")
    } catch (error) {
      history.push("/")
    }
  }
  
  return(
    <div className="login">
    <h1 className="sign">Sign in</h1>
    <form className="form" onSubmit={handleSubmit}>
    <label>
    <input className="un" type="text" name="u" placeholder="Email" onChange={e => setEmail(e.target.value)} />
    </label>
    <label>
    <input className="pass" type="password" name="p" placeholder="Password" onChange={e => setPassword(e.target.value)} />
    </label>
    <div>
    <button className="submit" type="submit" class="btn btn-primary btn-block btn-large">Submit</button>
    </div>
    </form>
    </div>
    )
  }
  
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };