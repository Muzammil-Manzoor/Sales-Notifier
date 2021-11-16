import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import cosmetics from '../images/cosmetics.jpg';
import fragrance from '../images/fragrance.jpg';
import jewelery from '../images/jewelery.jpg';
import w_bag from '../images/w_bags.jpg';
import w_shoes from '../images/w_shoes.png';
import m_shoes from '../images/m_shoes.jpg';
import m_stitched from '../images/m_stitched.jpg';
import m_unstitched from '../images/m_unstitched.jfif';
import m_westren from '../images/m_westren.jpg';

import w_shawl from '../images/w_shawl.jpg';
import w_trouser from '../images/w_trouser.jpg';
import w_shirt from '../images/w_shirt.jfif';

import w_stitched from '../images/w_stitched.jfif';
import w_unstitched from '../images/w_unstitched.jpg';
import w_westren from '../images/w_westren.png';


import Footer from './Footer';
import Header from './Header';


const Category =() => {



    return (
        <>
        <Header name="category"/>
        
            <div className="thirteenA">
                <h1>Select your Category</h1>
            </div>
            <div className="banner-section spad">
                <div className="container-fluid">
                    <div className="row">
                    
                        <div className="col-lg-4">
                            <div className="category">
                            <img src={m_westren} alt=""/>
                                <div className="single-banner">
                                <div className="inner-text">
                                    <Link to='/male_westren'> <h4>Men Westren Dresses</h4></Link>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="category">
                                <img src={m_unstitched} alt="" />
                                <div className="single-banner">
                                <div className="inner-text">
                                    <Link to='/male_eastren_unstitched'> <h4>Men Unstitched Dresses</h4></Link>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="category">
                            <img src={m_stitched} alt=""/>
                                <div className="single-banner">
                                <div className="inner-text">
                                    <Link to='/male_eastren_stitched'> <h4>Men Stitched Dresses</h4></Link>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="category">
                            <img src={w_stitched} alt=""/>
                                <div className="single-banner">
                                <div className="inner-text">
                                <Link to='/female_eastren_stitched'> <h4>Women Stitched Dresses</h4></Link>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="category">
                            <img src={w_unstitched} alt=""/>
                                <div className="single-banner">
                                <div className="inner-text">
                                <Link to='/female_eastren_unstitched'> <h4>Women Unstitched Dresses</h4></Link>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="category">
                            <img src={w_westren} alt=""/>
                                <div className="single-banner">
                                <div className="inner-text">
                                <Link to='/female_westren'> <h4>Women Westren Dresses</h4></Link>
                                </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="category">
                            <img src={w_shawl} alt=""/>
                                <div className="single-banner">
                                <div className="inner-text">
                                    <Link to='/women_shawl'> <h4>Women Shawls</h4></Link>
                                </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="category">
                            <img src={w_shirt} alt=""/>
                                <div className="single-banner">
                                <div className="inner-text">
                                    <Link to='/female_shirt'> <h4>Women Shirts</h4></Link>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="category">
                                <img src={w_trouser} alt=""/>
                                <div className="single-banner">
                                <div className="inner-text">
                                    <Link to='/female_trouser'> <h4>Women Trousers</h4></Link>
                                </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="category">
                                <img src={m_shoes} alt="" />
                                <div className="single-banner">
                                <div className="inner-text">
                                    <Link to='/male_shoes'> <h4>Men Shoes</h4></Link>
                                </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="category">
                                <img src={w_shoes} alt="" />
                                <div className="single-banner">
                                <div className="inner-text">
                                    <Link to='/female_shoes'> <h4>Women Shoes</h4></Link>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="category">
                                <img src={w_bag}alt="" />
                                <div className="single-banner">
                                <div className="inner-text">
                                    <Link to='/women_bag'> <h4>Women Bags</h4></Link>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="category">
                                <img src={cosmetics} alt="" />
                                <div className="single-banner">
                                <div className="inner-text">
                                    <Link to='/cosmetics'> <h4>Cosmetics</h4></Link>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="category">
                                <img src={jewelery} alt="" />
                                <div className="single-banner">
                                <div className="inner-text">
                                    <Link to='/jewellery'> <h4>Jewellery</h4></Link>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="category">
                                <img src={fragrance} alt="" />
                                <div className="single-banner">
                                <div className="inner-text">
                                    <Link to='/fragrances'> <h4>Fragrances</h4></Link>
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

export default Category;