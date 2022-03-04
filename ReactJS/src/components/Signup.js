import React,{useState} from 'react'
import {Button, Container} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import './Signup.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { firebase } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import {auth} from '../configuration/config'

function Signup(){

    const navigate = useNavigate();

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

    const contolSignup=(e) =>{
        e.preventDefault();
        // console.log(name, email, password);
        createUserWithEmailAndPassword(auth, email, password).then((userCredentials) =>{
            console.log(userCredentials);
            setSuccessMsg("Successfully Signed Up");
            setName('');
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(() => {
                setSuccessMsg('');
                navigate('/login')
            }, 3000)
        }).catch(() =>{
            setErrorMsg('Signed Up Failed')
        })
    }


    return(
        <>
        <Form className='main-box' onSubmit={contolSignup}>
            <Container id="box">
                <Typography id="login-title">
                    Create Account
                </Typography>
            <Form.Group className="mb-3" id="name" >
                <Form.Label>Enter Name</Form.Label>
                <Form.Control id="name"type="text" placeholder="Enter Name" required 
                onChange={(e) => setName(e.target.value)}  value={name}/>
            </Form.Group>
            <Form.Group className="mb-3" id="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control id="email"type="email" placeholder="Enter Valid Email-ID" required 
                onChange={(e) => setEmail(e.target.value)}  value={email} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control id="pass" type="password" placeholder="Password" required 
                onChange={(e) => setPassword(e.target.value)}  value={password}/>
            </Form.Group>

            <Button variant="warning" type="submit" id="create">
                CREATE
            </Button><br />
            <div is="toast">
            {successMsg&&<>
            <br />
            <div id="success-msg"><h5>{successMsg}</h5></div>
            </>
            }
            {errorMsg&&<>
            <br />
            <div id="error-msg"><h5>{errorMsg}</h5></div>
            </>
            }
            </div>
            </Container>
        </Form>

        </>
    )
}
export default Signup;



