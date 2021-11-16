
import React ,{useState,useEffect} from 'react';
import '../index.css';
import axios from 'axios'; 
import Card from './Card';
import Header from './Header';
function Toprated()
{   
    const [users,setUsers]=useState([]);

    const [empty,setEmpty]=useState(false);

    const name=localStorage.getItem('name')

    useEffect(()=>{
        async function getData(){
        
            const res=await axios.get('https://sales-notifierb.herokuapp.com/product_ratingapi/')
            console.log(res.data.results)
            console.warn(res.data)
            setUsers(res.data);
            if(res.data[0]==null)
            {
            console.warn('****************')
            console.warn(res.data[0])
            setEmpty(true)
        }

        }

        getData();
    },[]);


    return (
    
    
    <>
    <Header name="toprated"/>
     {
         
            empty==true ? 
            
            
            <h2 style={{color:'#E7AB3C' ,padding: '40px', fontFamily: 'Arial',textAlign: 'center'
 }}> Sory Currently No Top rated item available....!
            
            
            </h2>
           
           

        :

    <div className="thirteen">
    <h1>Top Rated Items</h1>
    </div>
     }
    {
    users.map((val)=>{
    return  (
        <>


    <div className='card1'>                
    <Card
        key={val.id}
        imgsrc={val.image_link}
        imgsrc2={val.image_link2}

        title={val.product_name}
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
    
    
    
    
     
    </>
     )
}


export default Toprated;