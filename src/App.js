import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './App.css';

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
      <div className="App">
      <header className="App-header">
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          onSuccess={(returnObj)=>this.loginSuccess(returnObj)}
          onFailure={(error,details)=>alert("Login failure: "+JSON.stringify(error)+"("+details+")")}
          accessType="offline"
          scope="https://www.googleapis.com/auth/drive.metadata.readonly"
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
        {this.state.files !== []?
          <div>
          <GoogleLogout
            clientId={process.env.REACT_APP_CLIENT_ID}
            onLogoutSuccess={()=>this.setState({files:[]})}
            onFailure={(error,details)=>alert("Logout failure: "+JSON.stringify(error)+"("+details+")")}
          />
          <List>
            {this.state.files.map((file)=>{
              return <Card><ListItem><ListItemText primary={file.name} secondary={file.kind} /></ListItem></Card>
            })
            }
          </List>
          </div>
        :<div/>}
      </header>
      </div> 
    )
  }
}

export default App;
