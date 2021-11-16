import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import w_shawl from '../images/w_shawl.jpg';
import w_trouser from '../images/w_trouser.jpg';
import w_shirt from '../images/w_shirt.jfif';

import w_stitched from '../images/w_stitched.jfif';
import w_unstitched from '../images/w_unstitched.jpg';
import w_westren from '../images/w_westren.png';
import Footer from './Footer';
import Header from './Header';


const Female_category = props => {
    const url1 = "/" + props.name + "-" + "female_westren"
    const url2 = "/" + props.name + "-" + "female_eastren_unstitched"
    const url3 = "/" + props.name + "-" + "female_eastren_stitched"
    const url4 = "/" + props.name + "-" + "female_shawl"

    const url5 = "/" + props.name + "-" + "female_trouser"

    const url6 = "/" + props.name + "-" + "female_shirt"





    return (
        <>
        <Header/>
            <div className="thirteen">
                <h1>Select Product Category</h1>
            </div>


            <div className="banner-section spad">
                <div className="container-fluid">
                    <div className="row">

                       
                        <div className="col-lg-4">
                            <div className="category">
                                <img src={w_unstitched} alt="" />
                                <div className="single-banner">
                                    <div className="inner-text">
                                        <Link to={url2}> <h4>Women Unstitched Dresses</h4></Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="category">
                            <img src={w_stitched} alt=""/>
                                <div className="single-banner">
                                <div className="inner-text">
                                <Link to={url3}> <h4>Women Stitched Dresses</h4></Link>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="category">
                                <img src={w_westren} alt="" />
                                <div className="single-banner">
                                    <div className="inner-text">
                                        <Link to={url1}> <h4>Women Westren Dresses</h4></Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="category">
                                <img src={w_shawl} alt="" />
                                <div className="single-banner">
                                    <div className="inner-text">
                                        <Link to={url4}> <h4>Women Shawls</h4></Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="category">
                                <img src={w_shirt} alt="" />
                                <div className="single-banner">
                                    <div className="inner-text">
                                        <Link to={url6}> <h4>Women Shirts</h4></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="category">
                                <img src={w_trouser} alt="" />
                                <div className="single-banner">
                                    <div className="inner-text">
                                        <Link to={url5}> <h4>Women Trousers</h4></Link>
                                    </div>
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

export default Female_category;