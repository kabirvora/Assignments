import React, {useState, useEffect} from "react";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";
// import { firestore } from "../configuration/config";
import './Product.css'
import db from '../configuration/config'
import { onAuthStateChanged } from 'firebase/auth';
import {Navigate} from 'react-router-dom'
import {Button, Alert} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";

// export const controlProducts =[];
function Products(){

    const dispatch =useDispatch();
    const { cartProducts } = useSelector(state=>state.cartReducer)
    const [products, setProducts]=useState([]);

    useEffect(() =>{
        getData();
    }, [])
    
    async function getData(){
     try{
         const users=await getDocs(collection(db, "products"))
         const arrOfProducts=[];
         users.forEach((doc) => {
             const obj = {
             id: doc.id,
             ...doc.data()
            };
            arrOfProducts.push(obj)
        });
        setProducts(arrOfProducts); 
        } catch(error){
            console.log(error);
        }
    }

    const [filterProducts, setFilterProducts]=useState('');
    useEffect(() =>{
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    })
    
    const controlProducts=(products)=>{
        dispatch({type:'addToCart', payload: products})
    }

    return(
        <>

            <div className="container" >
                <div className="row">
                    <div id="head-container">
                        <h2 id="heading">Products</h2>
                    </div>
                    <select  title="Shop By Category" onChange={(e)=>{setFilterProducts(e.target.value)}} value={filterProducts}>
                           <option value="">View All Products</option>
                           <option value="Men">Men</option>
                           <option value="Women">Women</option>
                           <option value="Electronics">Electronics</option>
                    </select ><br />
                    {products.filter((object) => object.Category.includes(filterProducts)).map((products)=>{
                        return <div className="col-md-3"><br />
                            <div className="m-1 p-1" id="card">
                                <img src={products.url} alt="" className="product-img" />
                                <h5>{products.Name}</h5>
                                {/* <h5>{products.Category.Gender}</h5> */}
                                <p><b> ₹{products.Price}</b></p>
                                {/* {isUser ? */}

                                <Button variant="warning" id="to-cart" onClick={()=>{controlProducts(products)}}>
                                        Add to Cart
                                </Button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>

    )
}
export default Products;