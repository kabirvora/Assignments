import React,{useState, useEffect} from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../configuration/config";
import { Table } from "react-bootstrap";



function Orders(){

    const [orders, setOrders]=useState([]);

    useEffect(() =>{
        getData();
    }, [])
async function getData(){
    try{
        const users=await getDocs(collection(db, "orders"))
        const arrOfOrders=[];
        users.forEach((doc) => {
           arrOfOrders.push(doc.data())
       });
       setOrders(arrOfOrders); 
       console.log(setOrders)
       } catch(error){
           console.log(error);
       }
   }

    return (
        <div>
    {orders.map((orders) =>{
           return (
           <Table striped bordered hover className="table-container" id="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        {orders.cartProducts.map((item)=>{
                            return( <tr>
                                <td><img src={item.url} alt="" className="product-img" /></td>
                                <td id="p-name"><h6>{item.Name}</h6></td>
                                <td><p><b> ₹{item.Price}</b></p></td>

                            </tr>);
                          })}
                        </tbody>
                    </Table> )
    })}
    </div>)
}
export default Orders