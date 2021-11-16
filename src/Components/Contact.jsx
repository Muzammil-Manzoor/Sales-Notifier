import React from 'react';
import Footer from './Footer';
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
const Contact=()=>
{
    const notify = () => toast("Your message has been sent");

    function sendEmail(e) {
        e.preventDefault();
       emailjs.sendForm('service_tkoh5lq', 'template_v941tzv', e.target, 'user_RLHPxZd4oezjA7l4DNIdh')
    
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
<Header name="contact" />
        <section className="contact-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="contact-title">
                        <h4>Contacts Us</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, maki years old.</p>
                    </div>
                    <div className="contact-widget">
                        <div className="cw-item">
                            <div className="ci-icon">
                                <i className="ti-location-pin"></i>
                            </div>
                            <div className="ci-text">
                                <span>Address:</span>
                                <p>G-10/1, ISB</p>
                            </div>
                        </div>
                        <div className="cw-item">
                            <div className="ci-icon">
                                <i className="ti-mobile"></i>
                            </div>
                            <div className="ci-text">
                                <span>Phone:</span>
                                <p>+92306 9705970</p>
                            </div>
                        </div>
                        <div className="cw-item">
                            <div className="ci-icon">
                                <i className="ti-email"></i>
                            </div>
                            <div className="ci-text">
                                <span>Email:</span>
                                <p>sales.notifier1@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-6 offset-lg-1">
                    <div className="contact-form">
                        <div className="leave-comment">
                            <h4>Leave A Comment</h4>
                            <p>Our staff will call back later and answer your questions.</p>
                            <form className="comment-form" onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" name="name"  placeholder="Your name"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="email" name="user_email"  placeholder="Your email"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea name="message"  placeholder="Your message"></textarea>
                                        <button type="submit" className="site-btn">Send message</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer/>

    </section>
    <Footer/>
        </>
    )
}

export default Contact;