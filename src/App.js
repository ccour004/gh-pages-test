import React from 'react';
import logo from './logo.svg';
import { GoogleLogin } from 'react-google-login';
import './App.css';

function App() {
  console.log("CLIENT ID: "+process.env.REACT_APP_CLIENT_ID)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          onSuccess={()=>alert("Login sucess!")}
          onFailure={(error,details)=>alert("Login failure: "+JSON.stringify(error)+"("+details+")")}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </header>
    </div>
  );
}

export default App;
