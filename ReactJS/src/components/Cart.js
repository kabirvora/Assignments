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
  const [address, setAddress]=useState('');
  const [phoneNumber, setPhoneNumber]=useState('');

  const [isUser, setIsUser] = useState({});
  onAuthStateChanged(auth,(currentUser) =>{
      setIsUser(currentUser)
  });

    useEffect(() =>{
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    })
    const deleteProduct=(products)=>{
        dispatch({type:'deleteProduct', payload: products})
    }

    const [cartTotal, setCartTotal]=useState(0)
    useEffect(()=>{
        let total=0;
        cartProducts.forEach((cartProduct) => {
            total = total + cartProduct.Price          
        });
        setCartTotal(total)
    },[cartProducts])

       const buyNow= async(e)=>{
        e.preventDefault();
        const email= isUser.email
        const userId=isUser.uid
           const addressinfo={
               name,
               address,
               phoneNumber,
               email,
               userId

           }
           console.log(addressinfo)
           const orderDetails={
               cartProducts ,
               addressinfo ,
           }
           try{

                const result = await addDoc(collection(db,'orders'), orderDetails)
                alert("Ordered Placed Successfully")
                console.log(orderDetails)
                dispatch({ type: 'emptyCart', payload: "" })
                handleClose();
                cartProducts=[];

           }
           catch(error){

           }
       } 

    return(
        <>
        <div  id='cart-total'>
        <h2 className='total'>Total Cart Amount<br/>₹{cartTotal}</h2>
      </div>
      <Button width={50} variant="primary" onClick={handleShow}>Checkout</Button>
        <div>   
            <Table striped bordered hover className="table-container" id="table">
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
                                <td><h6>1</h6></td>
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
                                        {/* <Form.Group className="mb-3" >
                                            <Form.Label>Email Address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter Email" required 
                                                    onChange={(e) => setEmail(e.target.value)}  value={email} />
                                        </Form.Group> */}
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
            </>

    )
}

export default Cart;