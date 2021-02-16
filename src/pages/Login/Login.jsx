import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { showLogin } from '../../services/login/LoginApi';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const [usuUsuario, setUsuUsuario] = useState();
  const [usuPassword, setUsuPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const {success,usuario} = await showLogin(usuUsuario,usuPassword);
    console.log(success);
    if(success){
      //const token = await loginUser(usuario);
      setToken(usuario);
    }else{
      console.log("usuarios incorrecto");
    }   
  }

  // const handleSubmit = async e => {
  //     e.preventDefault();

  //     const token = await loginUser({
  //       username,
  //       password
  //     });
  //     setToken(token);
  //   }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsuUsuario(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setUsuPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
}