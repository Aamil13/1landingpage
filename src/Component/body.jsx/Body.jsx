import React from 'react'
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./../Navbar/Navbar.css"


const Body = () => {
  return (
    <div className='bc p-5 pt-1 text-center'>
        <div className='mt-0 m-5'>
            <h1 className='fw-bold text-white fs-1'>Build your dream business,
            enjoy up to 97% off for 3 months</h1>
            <h3 className='mt-4 fs-6 fw-lighter text-white'>Start strong and grow with confidence. 
                For a limited time,
                 sign up for a free trial
                and save on select plans—offer ends 08/25.</h3>

        </div>


          <div class=" d-flex justify-content-center">
          <InputGroup className="mb-3 w-50   input-group-lg border-success">
        <Form.Control className=' ' variant ="outline-success"
          placeholder="Email"
          
        />

      </InputGroup>
          <button className='btn btn-success btn-lg h-25 ms-3' >Start free trial</button>
          </div>

            <p className='center-block text-white cpsize fw-lighter text-center'>14-day free trial, no credit card required. 
              Offer can be redeemed once you create your 
              store. By entering your email, you 
              agree to receive marketing emails from Shopify. 
              View terms and conditions.</p>

    </div>
  )
}

export default Body