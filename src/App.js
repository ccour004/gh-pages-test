import React from 'react';
import logo from './logo.svg';
//import Button from '@material-ui/core/Button';
import { GoogleLogin } from 'react-google-login';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <GoogleLogin
          clientId={process.env.CLIENT_ID}
          buttonText="Login"
          onSuccess={()=>alert("Login sucess!")}
          onFailure={()=>alert("Login failure!")}
          cookiePolicy={'single_host_origin'}
        />
      </header>
    </div>
  );
}

export default App;
