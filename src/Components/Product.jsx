
import React ,{useState,useEffect} from 'react';
import '../index.css';
import axios from 'axios'; 
import Card from './Card';
import ReactPaginate from "react-paginate";
import { reactLocalStorage } from "reactjs-localstorage";
import Testing from './Testing';
import RangeSlider from 'react-bootstrap-range-slider';
import Header from './Header';


const Product=props=>
{  
  
  const [value, setValue] = useState(50000); 

    const [pageNumber, setPageNumber] = useState(0);

    const [users,setUsers]=useState([]);

    const [recommended,setRecommended]=useState([]);

    const [empty,setEmpty]=useState(false);
    const [rempty,setRempty]=useState(false);


    var nameArr = props.name.split('-')
    // console.warn('*******************'+nameArr)
    const brand=nameArr[0].toUpperCase();
    const type=nameArr[2].toUpperCase();
    
  const usersPerPage =10;
  const pagesVisited = pageNumber * usersPerPage;
  // console.warn(value) ;
   const b_g_c=props.name
   async function getData(){
        
    const res=await axios.get('https://sales-notifierb.herokuapp.com/productapi/'+b_g_c+'-'+value+'-avc-asc/')
    // console.warn('************test************')
    // console.warn(res)
    // console.warn(res.data[1])
    setUsers(res.data);
    const username=localStorage.getItem('name')
    
    const res1=await axios.get('https://sales-notifierb.herokuapp.com/recommended_itemsapi/'+username+'/')
    setRecommended(res1.data)
     console.warn('************test************')
    console.warn(res1.data)
    if(res1.data[0]==null)
    setRempty(true)


    if(res.data[0]==null)
    setEmpty(true)

}
    useEffect(()=>{
      

        getData();
    },[]);

    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
    setPageNumber(selected);
    };
  
  const submit =  (e) => {
  
            getData();
        }

      
    return (
    <>
    <Header/>
    {
            empty==true ? 
            
            <h3 style={{color:'#E7AB3C' ,padding: '40px', fontFamily: 'Arial',textAlign: 'center'}}>  Sory Currently No Sale Available of that Product....
            
            
            </h3>
           

        :
    <div className ='thirteenA'>
    <h1 >{brand}</h1>


  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
    <div style={{width:"600px" ,color:"#E7AB3C"  }}  className="text-center">
    
    <b>Price: </b><RangeSlider    
      value={value}
      min={700}
      max={50000}
      tooltip='auto'
      onClick={submit} 

      onChange={changeEvent => setValue(changeEvent.target.value)}
    />
    <p>{value}</p>
    
</div>
</div>
   </div>
    
    }
    {
        users.slice(pagesVisited, pagesVisited + usersPerPage).map((val)=>{
    return  (
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
       ) ;
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
    
    <section className="man-banner spad">
                <div className="container-fluid">
                    <div className="row">
                    
                       
                        <div className="thirteenC">

                        {
            rempty==true ? 
            
           <h1></h1>
           

        :
     
                            <h1>Recommended Products</h1>
                        }
                        </div>
                        
                        </div>
                </div>
            </section>

                        {
    recommended.map((val)=>{
    return  (
        <>
        <div className='card1'>
        <Card
        key={val.id}
        imgsrc={val.image_link}
        imgsrc2={val.image_link2}
        title={val.title}
        sname={val.brand_name}
        link={val.product_link}
        price={val.price} 
        sale_price={val.sale_price} 
        />
        </div>
        </>
    
       )
    }
    )}                   
     
                        
    
    </>)
}

export default Product;