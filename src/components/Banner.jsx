import React from 'react'
import './banner.css'
import { Container, Row, Col } from 'react-bootstrap';
function Banner() {
  return (
    <div style={{ backgroundColor: 'yellow', height: '300px' }}>
      <Container className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
        <Row>
          <Col className="text-center">
            <h3 style={{letterSpacing:'3px'}}>WANT TO GET LATEST OFFERS</h3>
            <p>Join 70,000+ cyclists in the Cyclop community.</p>
   
            <div className='ms-3 d-flex align-items-center justify-content-center'>
            <div className='form'>
                <form className='mb-3' style={{ width: '200px' }} action="">
                  <input style={{ backgroundColor: "yellow", border: '1px solid black' }} className='py-1 px-2 mb-2' type="text" placeholder='Enter Your email' />
                  
                </form>
            </div>
            <div>
            <button className='btn d-flex align-items-center justify-content-center ms-2' style={{ letterSpacing: "2px",marginBottom:'20px'}}>SUBSCRIBE</button>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner