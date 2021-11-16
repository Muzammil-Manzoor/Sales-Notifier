import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Header from './Header';

const Confirmpassword = ({match }) => {

    const history = useHistory();

    const [confirmpassword, setConfirmpassword] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [load,setLoad]=useState(false);

  
        const uid = match.params.uid;
        const token = match.params.token;
        console.warn('*****************activation*****************')
        console.warn(uid)
        console.warn(token)

        const submit = async (e) => {
            e.preventDefault();
            setLoad(true)
            
        
            const article = { uid: uid, token: token,new_password:password,re_new_password:confirmpassword };
            const response = await  fetch('https://sales-notifierb.herokuapp.com/auth/users/reset_password_confirm/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'
                
            },
                body: JSON.stringify(article)
            }).then((res)=>
            {
                if(res.status==204){
            alert('Password change successfully')
                    history.push('/login')
                }
            })
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
                                <label htmlFor="pass">Password *</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="inputPassword4" />
                                <h6 style={{ color: "red" }} >{err}</h6>
                            </div>


                           
                            <div className="group-input">
                                <label htmlFor="pass">Confirm Password *</label>
                                <input type="password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} className="form-control" id="inputPassword4" />
                                <h6 style={{ color: "red" }} >{err}</h6>
                            </div>
                            <button type="submit" className="site-btn login-btn" onClick={submit} disabled={load}>{load && <i className="fa fa-refresh fa-spin"></i> } Reset password</button>
                        </form>
   
                        <br/>
                                              </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default Confirmpassword;
