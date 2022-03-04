import React,{useState} from 'react'
import {Button, Container} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import './Login.css'
import {auth} from '../configuration/config'
import {Link, useNavigate} from 'react-router-dom'
import { Typography } from '@mui/material';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useDispatch } from 'react-redux'

function Login(){

    const dispatch =useDispatch();
    dispatch({ type: 'emptyCart', payload: "" })
    const navigate = useNavigate();

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    // const [errorMsg, setErrorMsg]=useState('');
    // const [successMsg, setSuccessMsg]=useState('');

    const contolLogin= async() =>{

        // console.log('Hi');
        try
            {
                const res = await auth.signInWithEmailAndPassword(email, password);
                // console.log(res.user);
                const user = {
                    id : res.user.uid,
                    displayName : res.user.displayName
                }
                localStorage.setItem('currentUser', JSON.stringify(user))
                if (res.user.email != "") {
                    navigate('/')
                }
                else{
                    alert('invalid username or password')
                }
            }
            catch(error){
                console.log(error)
            }
    }
    
    return(
        <>
        <Form className='main-box' >
            <Container id="box">
                <Typography id="login-title">
                    Log-in
                </Typography>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control id="email"type="email" placeholder="Enter email" required 
                onChange={(e) => setEmail(e.target.value)}  value={email} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control id="pass" type="password" placeholder="Password" required 
                onChange={(e) => setPassword(e.target.value)}  value={password}/>
            </Form.Group>

            <Button variant="warning" onClick={contolLogin} >
                SUBMIT
            </Button><br />
            <Form.Text color= 'red[500]' id="login-text">
                Don't Have An Account!  
            </Form.Text>
            <span>   </span>
            <Button variant="light" type="submit" id="signup" size='sm' as={Link} to={'/signup'}>
                CREATE ONE
            </Button>
            <div is="toast">
            {/* {successMsg&&<>
                <br />
                <div id="success-msg"><h5>{successMsg}</h5></div>
                </>
            }
            {errorMsg&&<>
                <br />
                <div id="error-msg"><h5>{errorMsg}</h5></div>
                </>
            } */}
            </div>
            </Container>
        </Form>
        </>
    )
}
export default Login;



