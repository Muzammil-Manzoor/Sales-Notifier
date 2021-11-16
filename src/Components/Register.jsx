import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";



import axios from "axios";
import Gmail from './Gmail';
import Header from './Header';



const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        console.log('********************')
        console.log(data.email)
        localStorage.setItem('name', data.name)
        localStorage.setItem('email', data.email)
        localStorage.setItem('password', data.password)
        history.push('/selectbrand')
        reset();
    };



    const history = useHistory();

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (localStorage.getItem('token')) {
            history.push('./home')
        }
    }, [])

  


    return (
        <>
        <Header/>

            <div className="register-login-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="register-form">
                                <h2>Register</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="group-input">
                                        <label for="username">Username *</label>
                                        {/* <input type="text" minlength="5" value={username}  onChange={(e) => setName(e.target.value)} className="form-control" id="inputEmail4" required/> */}
                                        <input
                                            type="text"
                                            className={`form-control ${errors.name && "invalid"}`}
                                            {...register("name", { required: "Name is Required" })}
                                            onKeyUp={() => {
                                                trigger("name");
                                            }} />{errors.name && (
                                                <small className="text-danger">{errors.name.message}</small>
                                            )}
                                    </div>
                                    <div className="group-input">
                                        <label for="email">Email</label>
                                        {/* <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="inputEmail4" required /> */}
                                        <input
                                            type="text"
                                            className={`form-control ${errors.email && "invalid"}`}
                                            {...register("email", {
                                                required: "Email is Required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address",
                                                }
                                            })}
                                            onKeyUp={() => {
                                                trigger("email");
                                            }}
                                        />
                                        {errors.email && (
                                            <small className="text-danger">{errors.email.message}</small>
                                        )}

                                    </div>

                                    <div className="group-input">
                                        <label for="password">Password *</label>
                                        {/* <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="inputPassword4" required /> */}
                                        <input
                                            type="password"
                                            className={`form-control ${errors.password && "invalid"}`}
                                            {...register("password", {
                                                required: "password is Required",
                                                pattern: {
                                                    value: /[a-z0-9_]{8,20}/,
                                                    message: "Minimum Required password is 8 and not similar to username",
                                                }
                                            })}
                                            onKeyUp={() => {
                                                trigger("password");
                                            }}
                                        />
                                        {errors.password && (
                                            <small className="text-danger">{errors.password.message}</small>
                                        )}
                                    </div>

                                    <div className="group-input">
                                        <label for="con-pass">Confirm Password *</label>
                                        <input type="password" id="con-pass" required />
                                    </div>
                                    {/* <button type="submit" className="site-btn register-btn">REGISTER</button> */}
                                    <input
                                        type="submit"
                                        className="site-btn register-btn"
                                        value="Next"
                                    />
                                    <br/>
                                    <br/>                                </form>
                                <div className="switch-login">
                                    <a href="login" className="or-login">Or Login</a>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
        
        

      </div>


        </>
    )
}
export default Register;