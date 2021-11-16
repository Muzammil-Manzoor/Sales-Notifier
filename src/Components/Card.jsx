import React, { useState, useEffect } from 'react';
import '../index.css';
import ReactStars from 'react-stars'
import Heart from "react-animated-heart";
import HoverImage from "react-hover-image";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';



function Card(props) {

        const [isClick, setClick] = useState(false);


        const notify = () => toast("This item is already present in your favourites");

        async function getData() {
                console.warn(props.id)
                const res = await axios.get('https://sales-notifierb.herokuapp.com/bookmarkapi/' + props.id + '-2/')
                console.log(res.data.results)
                console.warn(res.data)
                if (res.data[0] == null) {
                        setClick(!isClick)
                        const item = {
                                product_id: props.id, brand_name: props.sname, product_name: props.title, image_link: props.imgsrc, image_link2: props.imgsrc2, product_link: props.link, price: props.price,
                                sale_price: props.sale_price,
                                username: localStorage.getItem('name')
                        }

                        const response = fetch('https://sales-notifierb.herokuapp.com/bookmarkapi/', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(item)
                        });
                } else {
                        notify();

                }

        }


        function save() {

                // check item is already present or not

                getData();

        }


        const ratingChanged = (newRating) => {


                const item1 = {
                        product_id: props.id, brand_name: props.sname, product_name: props.title, rating: newRating, overview: props.overview, user_name: localStorage.getItem('name'), product_link: props.link,
                        image_link: props.imgsrc,
                        image_link2: props.imgsrc2,
                        price: props.price,
                        sale_price: props.sale_price,
                }

                const response1 = fetch('https://sales-notifierb.herokuapp.com/product_ratingapi/', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(item1)
                });


                console.warn(newRating)
                console.warn(props.id)

                const item2 = { product_id: props.id, brand_name: props.sname, title: props.title, rating: newRating, overview: props.overview, user_name: localStorage.getItem('name'), gender_category: "", category_name: "", price: props.price, sale_price: props.sale_price, product_link: props.product_link, image_link: props.imgsrc, image_link2: props.imgsrc2, product_link: props.link, rating: 5, status: "", datee: "", detail: "", brand: 1, gender: 1, category: 2 }
                if (newRating >= 3) {
                        const response = fetch('https://sales-notifierb.herokuapp.com/recommended_itemsapi/', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(item2)
                        });
                }
                else {
                        console.warn("not like")
                }

        }
        return (
                <>
                        <ToastContainer />
                        <div class="row">
                                <div class="col-sm-6">
                                        <div className=".col-md- container12">

                                                <div className="polaroid">
                                                        <a href={props.link} target='_blank'>

                                                                <HoverImage src={props.imgsrc} key={props.imgsrc} hoverSrc={props.imgsrc2} alt="Norway" style={{ width: '100%' }}>
                                                                        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />


                                                                </HoverImage>

                                                                <div className="container123">

                                                                        <h4 style={{ color: 'orange' }}>Brand :{props.sname}</h4>
                                                                        <h5>Title: {props.title}</h5>

                                                                        <div className="product-price1">
                                                                               Pkr {props.sale_price}
                                                                                <span>&nbsp;&nbsp; {props.price}</span>
                                                                        </div>


                                                                </div>
                                                        </a>
                                                        <div className="rating">
                                                                <ReactStars
                                                                        count={5}
                                                                        half={false}
                                                                        onChange={ratingChanged}
                                                                        size={40}
                                                                        color2={'#ffd700'} />
                                                                <Heart styles={{ marginTop: "-40px" }} isClick={isClick} onClick={save} />


                                                        </div>



                                                </div>




                                        </div>
                                </div>

                        </div>

                </>)
}

export default Card;

