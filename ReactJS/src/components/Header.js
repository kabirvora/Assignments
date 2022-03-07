import React,{useState} from 'react'
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { IconButton } from '@mui/material';
import './Header.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { createRoutesFromChildren, Link, useNavigate } from 'react-router-dom'
import {auth} from '../configuration/config'
import { onAuthStateChanged } from 'firebase/auth';


function Header(){

    const navigate = useNavigate();
    // const {user} = JSON.parse
    const [isUser, setIsUser] = useState({});
    onAuthStateChanged(auth,(currentUser) =>{
        setIsUser(currentUser)
    });

    const controlLogout=() =>{
        auth.signOut().then(() =>{
            setTimeout(() => {
                navigate('/');
            }, 2000)
            
        })
    }
    return(
        <>
        <Navbar collapseOnSelect expand="lg"  id="Navbar">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>STORE.ly</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" >

                    </Nav>
                    <Nav>
                        {isUser ?
                            <IconButton aria-label="cart" component="span" href="#cart" id="icon" as={Link} to={'/cart'}>
                                <LocalMallOutlinedIcon sx={{ fontSize: 30, color: "black"}} />
                            </IconButton>

                            :
                            <IconButton  aria-label="login" component="span"  id="icon" as={Link} to={'/login'} >
                                <PersonOutlineIcon fontSize="large" sx={{ color: "black" }}/>
                            </IconButton>
                        }
                        {isUser ?
                            <IconButton aria-label="logout" component="span"  id="icon" onClick={controlLogout}>
                                <LogoutIcon sx={{ fontSize: 30, color: "black"}} />
                            </IconButton>
                            :
                            <IconButton aria-label="cart" component="span" id="icon" >
                                <LocalMallOutlinedIcon sx={{ fontSize: 30, color: "disabled"}} />
                            </IconButton>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        </>
    )
}

export default Header;