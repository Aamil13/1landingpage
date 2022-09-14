import React from 'react'
import "./../Navbar/Navbar.css"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Main1 = () => {
  return (
    <div>
        <div className='bc main1div1' ></div>
        <div className='main1div2 bg-warning'>
            <div className='c1 shadow'></div>
            <div className='c2 shadow'></div>
        </div>


        <div className="  bg-dark">
            <div className="container">
                <div className="row justify-content-evenly">
                    <div className="col-md-3 mb-4 mt-5 pt-3 pb-2 bg-warning"  >
                    <Card className='w-100 border-light'>
                            <Card.Body style={{height : "240px"}}>
                                <Card.Title>Card Title</Card.Title>
                                
                                <Card.Subtitle className="pt-1 text-muted mt-2 text-center">Customizable templates</Card.Subtitle>
                                <br></br>
                                <Card.Text className=' text-center'>
                                
                                Free website designs to launch your store quickly and easily.
                                </Card.Text>
                                
                            </Card.Body>
                            </Card>
                    </div>
                    <div className="col-md-3 mb-4 mt-5 pt-3 pb-2 bg-warning"  >
                    <Card className='w-100 border-light'>
                            <Card.Body style={{height : "240px"}}>
                                <Card.Title>Card Title</Card.Title>
                                
                                <Card.Subtitle className="pt-1 text-muted mt-2 text-center">Customizable templates</Card.Subtitle>
                                <br></br>
                                <Card.Text className=' text-center'>
                                
                                Free website designs to launch your store quickly and easily.
                                </Card.Text>
                                
                            </Card.Body>
                            </Card>
                    </div>
                    <div className="col-md-3 mb-4 mt-5 pt-3 pb-2 bg-warning"  >
                    <Card className='w-100 border-light'>
                            <Card.Body style={{height : "240px"}}>
                                <Card.Title>Card Title</Card.Title>
                                
                                <Card.Subtitle className="pt-1 text-muted mt-2 text-center">Customizable templates</Card.Subtitle>
                                <br></br>
                                <Card.Text className=' text-center'>
                                
                                Free website designs to launch your store quickly and easily.
                                </Card.Text>
                                
                            </Card.Body>
                            </Card>
                    </div>
                   
                   
                   
                    
                </div>
            </div>
        </div>




        <div className="main2">
            <div className="container mt-5">
                <div className="row justify-content-between">
                    <hr className='mb-5' />
                    <div className="col-md-1 col-sm-1">brand name</div>
                    <div className="col-md-1 col-sm-1">brand name</div>
                    <div className="col-md-1 col-sm-1">brand name</div>
                    <div className="col-md-1 col-sm-1">brand name</div>
                    <div className="col-md-1 col-sm-1">brand name</div>
                    <div className="col-md-1 col-sm-1">brand name</div>
                    <div className="col-md-1 col-sm-1">brand name</div>
                    <div className="col-md-1 col-sm-1">brand name</div>
                    <hr className='mt-5'/>
                </div>
            </div>
        </div>



        <div className="main3">
            <div className="d-flex flex-column text-center">
                <div className='mb-5'>logo</div>
                <h1 className='mb-5'>"Shopify is better than any other platform we've played <br/>with, 
                    and we've played with them all."</h1>

                    <h3 className='mb-5'>Jonathan Bayme, Ceo of Theory11
                        </h3>
            </div>
        </div>



        <div className="main4 d-flex bc p-5 ">
            <div className='ps-5 ms-5'>
                <h1 className='text-white w-75 h3 pb-4'>Build your store, at your own pace, enjoy up to 97% off for 3 months</h1>
                <h5 className='text-white h6 w-75'>For a limited time, start your free trial and save on select plans—offer ends 08/25.</h5>
            </div>

            <div className='pe-5 me-5'>
            <div class=" d-flex justify-content-center">
          <InputGroup className="mb-3 w-50   input-group-lg border-success">
        <Form.Control className=' ' variant ="outline-success"
          placeholder="Email"
          
        />

      </InputGroup>
          <button className='btn btn-success btn-lg h-25 ms-3' >Start free trial</button>
          </div>

            <p className='center-block text-white cpsize fw-lighter text-center'>
                14-day free trial, no credit card required. 
              Offer can be redeemed once you create your 
              store. By entering your email, you 
              agree to receive marketing emails from Shopify. 
              View terms and conditions.</p>
            </div>
        </div>


    </div>
  )
}

export default Main1