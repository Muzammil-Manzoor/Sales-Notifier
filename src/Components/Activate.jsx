import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Header from './Header';

const Activate = ({match }) => {

    const history = useHistory();

    const [Err, setErr] = useState(false);

  
        const uid = match.params.uid;
        const token = match.params.token;
        console.warn('*****************activation*****************')
        console.warn(uid)
        console.warn(token)

        const submit = async (e) => {
            e.preventDefault();
            
        
            const article = { uid: uid, token: token };
            const response = await  fetch('https://sales-notifierb.herokuapp.com/auth/users/activation/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'
                
            },
                body: JSON.stringify(article)
            }).then((res)=>
            {
                if(res.status==204){
            alert('Account activate Successfully')
                    history.push('/login')
                }
            })

          }

    return (
        <>
        <Header/>

        <div className='container'>
            <div 
                className='d-flex flex-column justify-content-center align-items-center'
                style={{ marginTop: '200px' }}
            >
                <h1>Verify your Account:</h1>
                <button type="submit" className="site-btn login-btn" onClick={submit}>Sign In</button>      
            
            </div>
        </div>
        </>
    );
};

export default Activate;
