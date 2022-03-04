import './App.css';
import Home from './Home.js'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Signup from './components/Signup'
import Rule from './components/Rule'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'


function App() {
  return (
    <>
    <div className="App">
            <Header />
            {/* <Footer /> */}
      <Routes>
        <Route exact path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/cart' element={<ProtectedRoutes><Cart /></ProtectedRoutes>} />
        <Route exact path='/rule' element={<Rule />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

export const ProtectedRoutes=({children}) =>{

  if(localStorage.getItem('currentUser')){
    return children
  }
  else{
    return <Navigate to='/login' />
  }
}