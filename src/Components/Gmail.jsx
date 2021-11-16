import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom';

export class Gmail extends Component {

  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
    console.log(response.profileObj.email);
    localStorage.setItem('name', response.profileObj.name)
    localStorage.setItem('email', response.profileObj.email)
    localStorage.setItem('password', '')
    alert('you are register')  
    
  }
  
  showAlert() {
    alert("I'm an alert");
  }



  render() {
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',background:'#E7AB3C'}}>
       
        <GoogleLogin
        clientId="930967656832-4ihegpm18g9l62tp6d3t90coolia90sb.apps.googleusercontent.com"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        
        />
  
      </div>
    )
  }
}

export default Gmail
