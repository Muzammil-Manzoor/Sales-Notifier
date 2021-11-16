
import React ,{useState,useEffect} from 'react';
import '../index.css';
import axios from 'axios'; 
import Card from './Card';

import ReactPaginate from "react-paginate";
import Header from './Header';

const Gender_product= props=>
{   
    
    const [users,setUsers]=useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const g=props.name

    const usersPerPage =20;
  const pagesVisited = pageNumber * usersPerPage;

    useEffect(()=>{
        async function getData(){
        
            const res=await axios.get('https://sales-notifierb.herokuapp.com/productapi/'+g+'-Kid-Kid-Kid/')
            console.log(res.data.results)
            setUsers(res.data);

        }

        getData();
    },[]);
    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
    setPageNumber(selected);
    };

    return (<>

    <Header name={props.name}/>
    <div className="thirteen">
    <h1>All Product releated to {props.name}</h1>
    </div>

    {
        users.slice(pagesVisited, pagesVisited + usersPerPage).map((val)=>{
    return  (
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

export default Gender_product;