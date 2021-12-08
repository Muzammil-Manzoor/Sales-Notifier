import React, { useEffect, useState, } from 'react';
import '../index.css';
import { Link, useParams } from 'react-router-dom';
import Testing from './Testing';
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; 
import Footer from './Footer';
import Header from './Header';


const Gender = props => {




    const a = "/" + props.name + "-male_category"
    const b = "/" + props.name + "-female_category"

    const c = "/" + props.name + "-kid_category"
    const notify = () => toast("You have successfuly subscribe "+props.name+ " sale notification");
    const item = {name : localStorage.getItem('name'), user_email: localStorage.getItem('email'),brand_name:props.name,subscribe:true};

    const [subscribe,setSubscribe]=useState(false)
    const name=localStorage.getItem('name')
    const brand=props.name


    useEffect(()=>{
        async function getData(){        
            const res=await axios.get('https://sales-notifierb.herokuapp.com/subscribeapi/'+name+'-'+brand+'/')
            console.log(res.data.results)
            console.warn(res.data)
            if(res.data[0]==null)
            {
            console.warn('****************')
            console.warn(res.data[0])
            setSubscribe(false)
            }else{
                setSubscribe(true)
            }
        }
        getData();
    },[])



    function unsubscribe(e)
    {
        e.preventDefault();
        const response = fetch('https://sales-notifierb.herokuapp.com/subscribeapi/'+name+'-'+brand+'/', {method: 'DELETE'});
        console.warn('****************' + response.status)
        if (response.status == 200) {
            console.warn("************************Successful****************")
            setSubscribe(false)

        }


    }


    function sendEmail(e) {
        e.preventDefault();
        setSubscribe(true)
        const response = fetch('https://sales-notifierb.herokuapp.com/subscribeapi/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        });
        console.warn('****************' + response.status)
        if (response.status == 201) {
            console.warn("************************Successful****************")

        }






    emailjs.sendForm('service_tkoh5lq', 'template_dybqcxt', e.target, 'user_RLHPxZd4oezjA7l4DNIdh')
    
        .then((result) => {
            console.log(result.text);
            notify()
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <>
        <Header name={props.name}/>
            <div className="thirteenA">
                <h1>Brand:{props.name}</h1>
                {/*  */}
                <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="text-center">                       
                            <input type="hidden" className="form-control" placeholder="Name" name="name" value={localStorage.getItem('name')}/>                        
                            <input type="hidden" className="form-control" name="email" value={localStorage.getItem('email')}/>                            
                            <input type="hidden" className="form-control" name="brand" value={ props.name}/>
                            {
                    subscribe==false ? 
                    <input style={{backgroundColor:"#E7AB3C"}} type="submit" className="btn btn-info" value="Subscribe"></input>
                :
                <input type="button" style={{backgroundColor:"#E7AB3C", color:"red"}} onClick={unsubscribe} className="btn btn-info" value="Unsubscribe"></input>
                
                }
                            <ToastContainer/>

                    </div>
                </form>
            </div>
                {/*  */}

            </div>
            <div className="thirteen">
                <h1>Select your Category</h1>
            </div>
            <div className="banner-section spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-banner">
                                <img src="img/banner-1.jpg" alt="" />
                                <div className="inner-text">
                                    <Link to={a}> <h4>Men’s</h4></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-banner">
                                <img src="img/banner-2.jpg" alt="" />
                                <div className="inner-text">
                                    <Link to={b}> <h4>Women’s</h4></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-banner">
                                <img src="img/banner-3.jpg" alt="" />
                                <div className="inner-text">
                                    <Link to={c}> <h4>Kid’s</h4></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default Gender;