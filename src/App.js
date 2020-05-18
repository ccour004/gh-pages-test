import React from 'react';
import SearchAppBar from './SearchAppBar.js';
import FullWidthGrid from './FullWidthGrid.js';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './App.css';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={loggedIn:false}
  }

  render(){
    return this.state.loggedIn?
    <GoogleLogout
      clientId={process.env.REACT_APP_CLIENT_ID}
      onLogoutSuccess={()=>this.setState({loggedIn:false})}
      onFailure={(error,details)=>alert("Logout failure: "+JSON.stringify(error)+"("+details+")")}
    />
    :
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID}
      onSuccess={(returnObj)=>{this.setState({loggedIn:true});this.props.onSuccess(returnObj)}}
      onFailure={(error,details)=>this.props.onFailure(error,details)}
      accessType="offline"
      scope={this.props.scope}
      cookiePolicy={'single_host_origin'}
      isSignedIn={this.state.loggedIn}
    />  
  }
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={files:[]}
  }

  loginSuccess = (returnObj) => {
    fetch(`https://www.googleapis.com/drive/v3/files?key=${process.env.REACT_APP_CLIENT_ID}`,
      {headers: {
        "Authorization": `Bearer ${returnObj.accessToken}`,
        "Accept": "application/json"
      }})
      .then(response => response.json())
      .then(data => this.setState({files:data.files}))
  }

  render(){
    return (
      <div>
      <SearchAppBar login={<Login 
          onSuccess={(returnObj)=>this.loginSuccess(returnObj)}
          onFailure={(error,details)=>alert("Login failure: "+JSON.stringify(error)+"("+details+")")}
          scope={"https://www.googleapis.com/auth/drive.metadata.readonly"}
        />} 
      />
      <FullWidthGrid files={this.state.files}/>
      </div>
    )
  }
}

export default App