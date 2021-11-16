
import React, { useState, useEffect } from 'react';
import '../index.css';
import axios from 'axios';
import Card from './Card';
import { reactLocalStorage } from "reactjs-localstorage";
import ReactPaginate from "react-paginate";
import Header from './Header';


const Category_results = props => {
    const [pageNumber, setPageNumber] = useState(0);

    const [users, setUsers] = useState([]);
    const [empty, setEmpty] = useState(false);

    var nameArr = props.name.split('-')

    const usersPerPage = 20;
    const pagesVisited = pageNumber * usersPerPage;


    console.warn('*******************' + nameArr)
    const gender = nameArr[0]
    const cate = nameArr[1]
    useEffect(() => {
        async function getData() {

            const res = await axios.get('https://sales-notifierb.herokuapp.com/productapi/' + gender + '-' + cate + '-b-c-d/')

            console.log(res)
            setUsers(res.data);

            if (res.data[0] == null)
                setEmpty(true)
        
    }

        getData();
    }, []);
    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    return (
        <>
        <Header name="category"/>
            {
                empty == true ?

                    <h3 style={{ color: 'red' }}>Sory Currently No Sale Available of that Product....</h3>
                    :
                    <h1></h1>

            }
            {
                users.slice(pagesVisited, pagesVisited + usersPerPage).map((val) => {
                    return (
                        <>
                            <div className='card1'>
                                <Card
                                    key={val.id}
                                    id={val.product_id}
                                    imgsrc={val.image_link}
                                    imgsrc2={val.image_link2}
                                    title={val.title}
                                    sname={val.brand_name}
                                    link={val.product_link}
                                    price={val.price}
                                    sale_price={val.sale_price}
                                    overview={val.overview}
                                />
                            </div>
                        </>
                    )


                }

                )}

            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />



        </>)
}

export default Category_results;