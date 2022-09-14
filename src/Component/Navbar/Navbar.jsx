import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

const Header = () => {
  return (
    <div>
        {/* <Navbar className='bc py-5' style={{backgroundColor:"pink"}}> */}
        <Navbar className='bc py-4' >
        <Container className='d-flex justify-content-center align-items-center'>
          <Navbar.Brand className='fw-bold fs-1 text-white' href="#home">Shop</Navbar.Brand>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header