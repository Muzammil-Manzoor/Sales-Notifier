import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Header from './Header';

const Changepassword = () => {

    const history = useHistory();

    const [Err, setErr] = useState(false);
    const [email, setEmail] = useState("");
    const [load,setLoad]=useState(false);


        const submit = async (e) => {
            e.preventDefault();
            setLoad(true);

        
            const article = { email: email};
            const response = await  fetch('https://sales-notifierb.herokuapp.com/auth/users/reset_password/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'
                
            },
                body: JSON.stringify(article)
            }).then((res)=>
            {
                if(res.status==204){
            alert('password confirmation send check your email')
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
        <div className='container'>
            <div className='container mt-5'>
            <h4>Request Password Reset:</h4>
            <form>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit"  className="site-btn login-btn" onClick={submit} disabled={load}>{load && <i className="fa fa-refresh fa-spin"></i> } submit</button>
            </form>
        </div>
        </div>
        </>
    );
};

export default Changepassword;
