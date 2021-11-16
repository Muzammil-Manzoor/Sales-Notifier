import Footer from './Footer';
import '../index.css';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { reactLocalStorage } from "reactjs-localstorage";
import axios from 'axios';
import f_brand from '../images/fbrand1.jpg';
import brand from '../images/brand2.jpg';

import bg1 from '../images/hero-1.jpg';
import bg2 from '../images/hero-2.jpg';
// import bg3 from './img/bg2.jpg';


import Header from './Header';



function Home() {

    const [int_brand, setint_brand] = useState([]);
    const [rec_brand, setrec_brand] = useState([]);

    const name = localStorage.getItem('name');
    const [brand1, setbrand1] = useState([]);
    const [brand2, setbrand2] = useState([]);
    const [brand3, setbrand3] = useState([]);


    const [rec_brand1, setrec_brand1] = useState([]);
    const [rec_brand2, setrec_brand2] = useState([]);
    const [rec_brand3, setrec_brand3] = useState([]);

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [empty, setEmpty] = useState(false)

    useEffect(() => {
        axios.get('https://sales-notifierb.herokuapp.com/users/' + name + '/')
            .then(res => {
                console.warn('*********************************')
                console.warn(res.data)
                console.warn(res.data.interested_brands)
                console.warn('************************' + res.data.recommended_brands + '************************************')
                setint_brand(res.data.interested_brands);
                setrec_brand(res.data.recommended_brands)
                localStorage.setItem('email', res.data.email)
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);



    useEffect(() => {
        // interested brands
        var str = "" + int_brand
        var item = str.split(',')
        // recommended brands
        var rec = "" + rec_brand
        var rec_item = rec.split(',')

        console.warn(item + '********item***********');
        console.warn(item + '********item***********' + item[1]);
        localStorage.setItem("brand1", item[0])
        localStorage.setItem("brand2", item[1])
        localStorage.setItem("brand3", item[2])

        localStorage.setItem("rec_brand1", rec_item[0])
        localStorage.setItem("rec_brand2", rec_item[1])
        localStorage.setItem("rec_brand3", rec_item[2])



    }, [loading])

    setTimeout(() => {
        setLoading(true)

    }, 4000);


    const getUsers = async () => {

        const b1 = localStorage.getItem('brand1').trim();
        const b2 = localStorage.getItem('brand2').trim();
        const b3 = localStorage.getItem('brand3').trim();

        const r1 = localStorage.getItem('rec_brand1').trim();
        const r2 = localStorage.getItem('rec_brand2').trim();
        const r3 = localStorage.getItem('rec_brand3').trim();

        console.warn('****************************************teste**********' + r2 + '****************')

        await axios.get('https://sales-notifierb.herokuapp.com/brandapi/' + b1 + '/')
            .then(res => {
                console.warn(res)
                setbrand1(res.data)
                console.warn('testing brands')
                console.warn(res.data)

            })
        axios.get('https://sales-notifierb.herokuapp.com/brandapi/' + b2 + '/')
            .then(res => {
                console.warn(res.data)
                setbrand2(res.data)

            })
        axios.get('https://sales-notifierb.herokuapp.com/brandapi/' + b3 + '/')
            .then(res => {
                console.warn(res.data)
                setbrand3(res.data)
            })


        await axios.get('https://sales-notifierb.herokuapp.com/brandapi/' + r1 + '/')
            .then(res => {
                console.warn(res)
                setrec_brand1(res.data)

            })
        await axios.get('https://sales-notifierb.herokuapp.com/brandapi/' + r2 + '/')
            .then(res => {
                console.warn(res)
                setrec_brand2(res.data)

            })
        await axios.get('https://sales-notifierb.herokuapp.com/brandapi/' + r3 + '/')
            .then(res => {
                console.warn(res)
                setrec_brand3(res.data)
                if (res.data[0] == null) {
                    setEmpty(true)
                }

            })
    }


    useEffect(() => {

        getUsers()
    }, [loading2])

    setTimeout(() => {
        setLoading2(true)
    }, 4000);

    return (
        <>
            <Header name="home" />
            <section className="hero-section">
                <div className="hero-items owl-carousel">

                    <div className="single-hero-items set-bg" key='img/hero-1.jpg' data-setbg={bg1}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <span>Dresses,Shoes</span>
                                    <h1>Summer Sale</h1>
                                    <p> Hurry up! catch sale on women unstitched & ready to wear, beauty & more. order now! Enjoy up to 50% off on exclusive range of collection featuring intricate patterns. Avail Stitching Option. Secure Payment Option. Speedy Cash on Delivery. Shipping all Pakistan</p>
                                    <Link to="/women" className="primary-btn">Shop Now</Link>
                                </div>
                            </div>
                            <div className="off-card">
                                <h2>Sale <span>50%</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="single-hero-items set-bg" key='img/hero-2.jpg' data-setbg="img/hero-2.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <span>Dresses,Bag,kids</span>
                                    <h1>Big Bag Sale</h1>
                                    <p>Ideas brings GulAhmed Great Summer Sale 2021 offering up to 70% OFF on all sale items. Enjoy the Online Sale with ✓Free Shipping ✓Easy Returns ✓Best ...

                                    </p>
                                    <Link to="/kid" className="primary-btn">Shop Now</Link>

                                </div>
                            </div>
                            <div className="off-card">
                                <h2>Sale <span>50%</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="single-hero-items set-bg" key='img/hero-1.jpg' data-setbg="img/bg2.jpg">

                    </div>
                </div>
                {/* <!-- Banner Section Begin --> */}

                <div className="banner-section spad">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-lg-4">
                                <div className="single-banner">
                                    <img src="img/banner-1.jpg" alt="" />
                                    <div className="inner-text">
                                        <Link to='/men'> <h4>Men’s  </h4></Link>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4">
                                <div className="single-banner">
                                    <img src="img/banner-2.jpg" alt="" />
                                    <div className="inner-text">
                                        <Link to='/women'> <h4>Women’s</h4></Link>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4">
                                <div className="single-banner">
                                    <img src="img/banner-3.jpg" alt="" />
                                    <div className="inner-text">
                                        <Link to='/kid'> <h4>Kid’s</h4></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- Banner Section End --> */}
            </section>




            <div className="container">
                <div className='div_r'>
                    <h2 className="text-center" style={{ fontFamily: 'Algerian',textShadow:'2px 2px #ff0000' }} >Interested Brands</h2>

                </div>

            </div>
            <section className="man-banner spad">
                <div className="container-fluid">
                    <div className="row">

                        {/* <div className="thirteenC">
                            <h1>Interested Brands</h1>
                            
                        </div> */}



                        <div className="col-lg-3">
                            <div className="product-large set-bg" data-setbg={f_brand}>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="category">
                                <img src={brand1.link} alt="" />
                                <div className="single-banner">
                                    <div className="inner-text">
                                        <Link to={'/' + brand1.name}> <h4>{brand1.name}</h4></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="category">
                                <img src={brand2.link} alt="" />
                                <div className="single-banner">
                                    <div className="inner-text">
                                        <Link to={'/' + brand2.name}> <h4>{brand2.name}</h4></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="category">
                                <img src={brand3.link} alt="" />
                                <div className="single-banner">
                                    <div className="inner-text">
                                        <Link to={'/' + brand3.name}> <h4>{brand3.name}</h4></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- faortite brands Begin --> */}

            {/* <!-- recommended Banner Section End --> */}
            {/* <div className="row">

                <div className="thirteenC">
                    <h1>Recommended Brands</h1>
                </div>
            </div> */}

            <div className="container">
                <div className='div_r'>
                    <h2 style={{ fontFamily: 'Algerian',textShadow:'2px 2px #ff0000' }} className="text-center" >Recommended Brands</h2>

                </div>

            </div>
            <section className="man-banner spad">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="category">
                                <img src={rec_brand1.link} alt="" />
                                <div className="single-banner">
                                    <div className="inner-text">
                                        <Link to={'/' + rec_brand1.name}> <h4>{rec_brand1.name}</h4></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="category">
                                <img src={rec_brand2.link} alt="" />
                                <div className="single-banner">
                                    <div className="inner-text">
                                        <Link to={'/' + rec_brand2.name}> <h4>{rec_brand2.name}</h4></Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-3  offset-lg-1 ">
                            <div className="product-large set-bg m-large" data-setbg={brand}>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- recommended Section End --> */}



            {/* <!-- Women Banner Section Begin --> */}
            <section className="women-banner spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="product-large set-bg" data-setbg="img/products/women-large.jpg">
                                <h2 >Women’s</h2>
                                <Link to="/women" className="primary-btn">Discover More</Link>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-1">
                            <div className="filter-control">
                                <ul>

                                    <Link to='/women'><li className="active">Clothings  </li> &nbsp;</Link>
                                    <Link to='/women_bag'><li >HandBag</li>&nbsp;</Link>
                                    <Link to='/female_shoes'><li >Shoes</li>&nbsp;</Link>

                                </ul>
                            </div>

                            <div className="product-slider owl-carousel">
                                <div className="product-item">
                                    <div className="pi-pic">
                                        <img src="https://www.gulahmedshop.com/media/catalog/product/2/2/221266_3__1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=420&width=280&canvas=280:420" alt="" />
                                        <div className="sale">Sale</div>

                                        <ul>
                                            <li className="quick-view"><a href="https://www.gulahmedshop.com/ladies-handbag-grey-19-41">+ Quick View</a></li>
                                        </ul>
                                    </div>
                                    <div className="pi-text">
                                        <div className="catagory-name">Bags</div>
                                        <a href="#">
                                            <h5>Ladies Handbag </h5>
                                        </a>
                                        <div className="product-price">
                                            <span>pkr 3799</span>
                                            1900
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="pi-pic">
                                        <img src="https://www.gulahmedshop.com/media/catalog/product/2/4/246434_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=420&width=280&canvas=280:420" alt="" />

                                        <ul>
                                            <li className="quick-view"><a href="https://www.gulahmedshop.com/grey-shoes-idf-20-37">+ Quick View</a></li>
                                        </ul>
                                    </div>
                                    <div className="pi-text">
                                        <div className="catagory-name">Shoes</div>
                                        <a href="#">
                                            <h5>Grey Shoes IDF-20-37</h5>
                                        </a>
                                        <div className="product-price">
                                            pkr 2100
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="pi-pic">
                                        <img src="https://pk.khaadi.com/media/catalog/product/a/2/a210502_beige_1.jpg?width=300&height=&canvas=300:&quality=80&bg-color=255,255,255&fit=bounds" alt="" />

                                        <ul>
                                            <li className="quick-view"><a href="https://pk.khaadi.com/a210502-beige-a210502-beige-pk.html">+ Quick View</a></li>
                                        </ul>
                                    </div>
                                    <div className="pi-text">
                                        <div className="catagory-name">Khaadi</div>
                                        <a href="#">
                                            <h5>Full Suit</h5>
                                        </a>
                                        <div className="product-price">
                                            2020 pkr
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="pi-pic">
                                        <img src="https://www.gulahmedshop.com/media/catalog/product/s/l/sls_21-104_1__1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=420&width=280&canvas=280:420" alt="" />

                                        <ul>
                                            <li className="quick-view"><a href="https://www.gulahmedshop.com/knot-t-shirt-sls-21-104">+ Quick View</a></li>
                                        </ul>
                                    </div>
                                    <div className="pi-text">
                                        <div className="catagory-name">Towel</div>
                                        <a href="#">
                                            <h5>Knot T-shirt SLS-21-104</h5>
                                        </a>
                                        <div className="product-price">
                                            pkr 968
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Women Banner Section End --> */}



            <section className="deal-of-week set-bg spad" data-setbg="img/time-bg.jpg">
                <div className="container">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h2>Deal Of The Week</h2>
                            <p>Stunning, unique and best quality women purse collection. Free Shipping at your door step </p>
                            <div className="product-price">
                                pkr 2760.00
                                <span>/ HanBag</span>
                            </div>
                        </div>
                        <div className="countdown-timer" id="countdown">
                            <div className="cd-item">
                                <span>7</span>
                                <p>Days</p>
                            </div>
                            <div className="cd-item">
                                <span>12</span>
                                <p>Hrs</p>
                            </div>
                            <div className="cd-item">
                                <span>40</span>
                                <p>Mins</p>
                            </div>
                            <div className="cd-item">
                                <span>52</span>
                                <p>Secs</p>
                            </div>
                        </div>
                        <Link to="/women_bag" className="primary-btn">Shop Now</Link>
                    </div>
                </div>
            </section>

            {/* 
    <!-- Man Banner Section Begin --> */}
            <section className="man-banner spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="filter-control">
                                <ul>

                                    <Link to='/men'><li className="active">Clothings  </li> &nbsp;</Link>
                                    <Link to='/women_bag'><li >HandBag</li>&nbsp;</Link>
                                    <Link to='/male_shoes'><li >Shoes</li>&nbsp;</Link>
                                </ul>
                            </div>
                            <div className="product-slider owl-carousel">
                                <div className="product-item">
                                    <div className="pi-pic">
                                        <img src="https://www.gulahmedshop.com/media/catalog/product/p/i/pink_white_formal_shirt_cm-yd-2908_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=420&width=280&canvas=280:420" alt="" />
                                        <div className="sale">Sale</div>

                                        <ul>
                                            <li className="quick-view"><a href="https://www.gulahmedshop.com/pink-white-formal-shirt-cm-yd-2908">+ Quick View</a></li>
                                        </ul>
                                    </div>
                                    <div className="pi-text">
                                        <div className="catagory-name">Westren Dress</div>
                                        <a href="#">
                                            <h5>Pink White Formal Shirt</h5>
                                        </a>
                                        <div className="product-price">
                                            pkr 2847
                                            <span>pkr 3795</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="pi-pic">
                                        <img src="//cdn.shopify.com/s/files/1/0143/1552/0054/products/851-6047-_1_1024x.jpg?v=1633501204" alt="" />

                                        <ul>
                                            <li className="quick-view"><a href="https://www.bata.com.pk/collections/men-deals/products/851-6047">+ Quick View</a></li>
                                        </ul>
                                    </div>
                                    <div className="pi-text">
                                        <div className="catagory-name">Shoes</div>
                                        <a href="#">
                                            <h5>bata - men</h5>
                                        </a>
                                        <div className="product-price">
                                            pkr 2199
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="pi-pic">
                                        <img src="https://www.gulahmedshop.com/media/catalog/product/w/h/white_fashion_kurta_ks-852_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=420&width=280&canvas=280:420" alt="" />

                                        <ul>
                                            <li className="quick-view"><a href="https://www.gulahmedshop.com/media/catalog/product/w/h/white_fashion_kurta_ks-852_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=420&width=280&canvas=280:420">+ Quick View</a></li>
                                        </ul>
                                    </div>
                                    <div className="pi-text">
                                        <div className="catagory-name">kameezshalwar Stitched</div>
                                        <a href="#">
                                            <h5>White Fashion Kurta </h5>
                                        </a>
                                        <div className="product-price">
                                            pkr 3388
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                            <div className="product-large set-bg m-large" data-setbg="img/products/man-large.jpg">
                                <h2>Men’s</h2>
                                <Link to="/men" className="primary-btn">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Man Banner Section End --> */}












            <Footer />

        </>
    )

}

export default Home;

