import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './footer.css'
import { faMessage } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div style={{ overflowX: 'hidden', height: '100vh', backgroundColor: 'black' }} className='mt-4'>
      <div className="row mt-5" style={{ backgroundColor: "black" }}>
        <div className="col-sm-3">
          {/* Content for the first column */}
          <div className='text-light' style={{ padding: '20px', textAlign: 'center' }}>
            <h5>SIGN UP AND SAVE</h5>
            <p className='mt-3' style={{ textAlign: "start" }}>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <input
              style={{
                backgroundColor: 'black',
                color: 'white',

                borderBottom: '1px solid grey',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                '::placeholder': {
                  color: 'gray',  // Placeholder color
                }
              }}
              type="text"
              placeholder="Enter Your E-mail     ✉️"
            />
            <div className="d-flex justify-content-center align-items-center head text-light icon">
              <p className="me-2 mt-4 fs-5"><FontAwesomeIcon icon={faInstagram} /></p>
              <p className="me-2 mt-4 fs-5"><FontAwesomeIcon icon={faFacebook} /></p>
              <p className="me-2 mt-4 fs-5"><FontAwesomeIcon icon={faYoutube} /></p>
              <p className='me-2 mt-4 fs-5'><FontAwesomeIcon icon={faPinterest} /></p>
            </div>

          </div>
        </div>
        <div className="col-sm-3">
          {/* Content for the second column */}
          <div className='text-light' style={{ padding: '20px', textAlign: 'center', textAlign: 'start' }}>
            <h5>About Us</h5>
            <p className='mt-3'>Shipping Policy</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Return & Exchange Policy</p>
          </div>
        </div>
        <div className="col-sm-3">
          {/* Content for the second column */}
          <div className='text-light' style={{ padding: '20px', textAlign: 'center', textAlign: 'start' }}>
            <h5>Price Match</h5>
            <p className='mt-3'>Shipping Policy</p>
            <p>EMI Option</p>
            <p>Earn By Selling</p>

          </div>
        </div>
        <div className="col-sm-3">
          {/* Content for the second column */}
          <div className='text-light' style={{ padding: '20px', textAlign: 'start' }}>
            <h5>Cyclop Support</h5>
            <p className='mt-3 hover-underline'>Returns & Exchange Portal</p>
            <p className='hover-underline'>10AM - 6PM (Mon-Fri)</p>
            <p className='hover-underline'>Chat to Track orders or Report Issues</p>
            <p className='hover-underline'>Support Mail - <br /> support@cyclop.in</p>
            <p className='hover-underline'>REGISTERED ADDRESS
              Cyclop Adventures Pvt. ltd.
              944,Block C, Sushant Lok, Phase 1, Gurugram, Haryana - 122001</p>
            <p className='hover-underline'>CIN- U52399HR2022PTC102075</p>
          </div>

        </div>
      </div>
      <p className='d-flex text-align-center justify-content-center text-light'>© 2024 Cyclop</p>
      <div className="fixed-button">
        <button className="btn btn-light rounded-circle" style={{ height: '60px', width: '60px' }}><FontAwesomeIcon icon={faMessage} style={{ height: '30px', width: '30px' }} className='mt-2' /></button>
      </div>

      {/* CSS for the fixed button */}
      <style>{`
        .fixed-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          
          
        }
      `}</style>
    </div>
  )
}

export default Footer