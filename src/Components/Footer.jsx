import React, { useEffect, useState, } from 'react';
import '../index.css';
import logo from '../images/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer=()=>
{    const notify = () => toast("You have successfuly subscribe  sale notification");
const item = {name : localStorage.getItem('name'), user_email: localStorage.getItem('email'),brand_name:"all",subscribe:true};

    const [subscribe,setSubscribe]=useState(false)
    const name=localStorage.getItem('name')
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
    }

    return(<>
    <footer className="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <a href="/home"><h3 style={{color:'White'}}>Brands Sale</h3></a>
                        </div>
                        <ul>
                            <li>Address: G-10/1 ISlamabad</li>
                            <li>Phone: +92 306 9705970</li>
                            <li>Email: brandsale14@gmail.com</li>
                        </ul>
                        <div className="footer-social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 offset-lg-1">
                    <div className="footer-widget">
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="footer-widget">
                        <h5>Information</h5>
                        <ul>
                        <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="newslatter-item">
                        <h5>Join Our Newsletter Now</h5>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form onSubmit={sendEmail} class="subscribe-form">
                    <input type="email" name="email" placeholder="Enter Your Mail"/>
                            {
                    subscribe==false ? 
                    <button type="submit">Subscribe</button>

                :
                <button onClick="unsubscribe">Subscribe</button>


                }
                            <ToastContainer/>

                    
                    </form>
               
                    </div>
                </div>
            </div>
        </div>
      
    </footer>
    
    
    
    
    </>)
}

export default Footer;