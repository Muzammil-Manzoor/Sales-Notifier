import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

import GoogleLogin from 'react-google-login'
import { reactLocalStorage } from "reactjs-localstorage";
import Activate from './Activate';
import Header from './Header';



const Login = () => {

    const history = useHistory();

    const responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
        let pwd="789456abc"+response.profileObj.givenName+"qwerty";
        let namee=response.profileObj.givenName;
        console.warn("**************************",namee)
        localStorage.setItem('name', response.profileObj.givenName);
        localStorage.setItem('email', response.profileObj.email);
        localStorage.setItem('password', pwd);

        axios.get('https://sales-notifierb.herokuapp.com/users/'+ namee +'/')
        .then((response) => {
            localStorage.setItem("token", '454545s4a554s545as4da5s');

            history.push('./home');
            
        })
        .catch((error) => {
            history.push('./email_selectBrand'); 
    })
        // axios.get('https://sales-notifierb.herokuapp.com/users/'+ namee +'/')
        //     .then(res => {


        //         console.warn("****************",res)
        //         if(res.status==200)
        //         {
        //             localStorage.setItem("token", '454545s4a554s545as4da5s');

        //             history.push('./home');
        //         }
        //         else{
        //             console.warn("************************************** email selct brand is running")
        //             history.push('./email_selectBrand');
        //         }
            
        // })
    
        history.push('./email_selectBrand');

        
      }
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
            history.push('./home')
        }
    }, [])


    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [load,setLoad]=useState(false);

    const submit = async (e) => {
        setLoad(true);

       
        e.preventDefault();
        
        const article = { username: username, password: password };
        const response = await fetch('https://sales-notifierb.herokuapp.com/auth/jwt/create/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'
            
        },
            body: JSON.stringify(article)
        });
        const content = await response.json();

        const token = content.access;
        
        if (response.status == 200) {
            console.warn("************************Successful****************")
            localStorage.setItem("token", token);
            localStorage.setItem("name", username);

            history.go('/home');
        }
        else {
            setErr("Eror login again")
        } 
        setTimeout(()=>{
            setLoad(false);
        },1000)
    
      
    }
   

    return (
        <>
        <Header/>
            <div className="register-login-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="login-form">
                                <h2>Login</h2>
                                <form action="#">
                                
                                    <div className="group-input">
                                        <label htmlFor="username">Username *</label>
                                        <input type="text" value={username} onChange={(e) => setName(e.target.value)} className="form-control" id="inputEmail4" />
                                    </div>
                                    <div className="group-input">
                                        <label htmlFor="pass">Password *</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="inputPassword4" />
                                        <h6 style={{ color: "red" }} >{err}</h6>
                                    </div>
                                    <div className="group-input gi-check">
                                        <div className="gi-more">
                                            
                                            <a href="/changepassword" className="forget-pass">Forget your Password</a>
                                        </div>
                                    </div>
                                    <button type="submit" className="site-btn login-btn" onClick={submit} disabled={load}>{load && <i className="fa fa-refresh fa-spin"></i> } Sign In</button>
                                </form>
                                <div className="switch-login">
                                    <a href="register" className="or-login">Or Create An Account</a>
                                </div>
                                <br/>
                                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',background:'#E7AB3C'}}>
       
                                 <GoogleLogin
                                 clientId="243160502036-brd7mg856f8leslkgl0io7g23fq3hsvk.apps.googleusercontent.com"
                                 onSuccess={responseGoogle}
                                 onFailure={responseGoogle}
                                 cookiePolicy={'single_host_origin'}
       
                                 /> </div>                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

        </>
    )
}
export default Login;