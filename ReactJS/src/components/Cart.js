import './Cart.css'
import React,{useState, useEffect } from 'react'
import { Button, Table, Modal, Form} from 'react-bootstrap'
import {auth} from '../configuration/config'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux'
import db from '../configuration/config'
import {collection, addDoc} from 'firebase/firestore'

function Cart(){
    const {cartProducts}=useSelector(state=>state.cartReducer)
    

    const dispatch=useDispatch();
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [address, setAddress]=useState('');
  const [phoneNumber, setPhoneNumber]=useState('');

    useEffect(() =>{
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    })
    const deleteProduct=(products)=>{
        dispatch({type:'deleteProduct', payload: products})
    }
    const [cartTotal, setCartTotal]=useState(0)
    useEffect(()=>{
        let temp=0;
        cartProducts.forEach((cartProduct) => {
            temp= temp + cartProduct.Price          
        });
        setCartTotal(temp)
    },[cartProducts])

       const buyNow= async(e)=>{
        e.preventDefault();
           const addressinfo={
               name,
               address,
               phoneNumber
           }
           console.log(addressinfo)

           const orderDetails={
               cartProducts ,
               addressinfo ,
            //    uid: JSON.parse(localStorage.getItem('currentUser')).currentUser.id
            //    userid: JSON.parse(localStorage.getItem('currentUser')).uid
           }
           console.log('hi');
           try{

                const result = await addDoc(collection(db,'orders'), orderDetails)
                console.log(orderDetails)
                handleClose();

           }
           catch(error){

           }
       } 

    return(
        <div>   
            <Table striped bordered hover className="table-container">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartProducts.map((product)=>{
                            return <tr>
                                <td><img src={product.url} alt="" className="product-img" /></td>
                                <td id="p-name"><h6>{product.Name}</h6></td>
                                <td id="p-name"><h6>{product.Category}</h6></td>
                                <td><h5>1</h5></td>
                                <td><p><b> ₹{product.Price}</b></p></td>
                                <td>
                                <Button variant="danger" id="to-cart" onClick={()=> deleteProduct(product)}>
                                      Remove
                                </Button>
                                </td>
                            </tr>
                          })}
                        </tbody>
                    </Table> 

                        <div className='d-flex justify-content-center'>
                          <h2 className='total'>Total Cart Amount<br/>₹{cartTotal}</h2>
                        </div>
                        <Button width={50} variant="primary" onClick={handleShow}>Checkout</Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add Address</Modal.Title>
                                    </Modal.Header>
                                        <Modal.Body>
                                        <Form>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Name</Form.Label>
                                                <Form.Control type="name" placeholder="Enter Name" required 
                                                    onChange={(e) => setName(e.target.value)}  value={name} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Email Address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter Email" required 
                                                    onChange={(e) => setEmail(e.target.value)}  value={email} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Address</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Address" required 
                                                    onChange={(e) => setAddress(e.target.value)}  value={address} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Mobile Number</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Mobile Number" required 
                                                    onChange={(e) => setPhoneNumber(e.target.value)}  value={phoneNumber} />
                                        </Form.Group>
                                        </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                             Close
                                </Button>
                                <Button variant="primary" onClick={buyNow}>
                                    Buy Now
                                </Button>
                            </Modal.Footer>
                        </Modal>
            </div>

    )
}

export default Cart;