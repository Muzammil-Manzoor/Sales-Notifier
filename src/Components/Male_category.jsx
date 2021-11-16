import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import Header from './Header';

import m_stitched from '../images/m_stitched.jpg';
import m_unstitched from '../images/m_unstitched.jfif';
import m_westren from '../images/m_westren.jpg';
import Footer from './Footer';





const Male_category = props => {
    //  const url1="/"+props.name+"-"+props.name+"_eastren"
    const url1 = "/" + props.name + "-" + "male_westren"
    const url2 = "/" + props.name + "-" + "male_eastren_unstitched"
    const url3 = "/" + props.name + "-" + "male_eastren_stitched"
    console.warn('*************************',url2)
    console.warn('*************************',url3)




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
                                <img src={m_westren} alt="" />
                                <div className="single-banner">
                                    <div className="inner-text">
                                        <Link to={url1}> <h4>Men Westren Dresses</h4></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="category">
                                <img src={m_unstitched} alt="" />
                                <div className="single-banner">
                                    <div className="inner-text">
                                        <Link to={url2}> <h4>Men Unstitched Dresses</h4></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="category">
                                <img src={m_stitched} alt="" />
                                <div className="single-banner">
                                    <div className="inner-text">
                                        <Link to={url3}> <h4>Men Stitched Dresses</h4></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />



        </>
    );
}

export default Male_category;