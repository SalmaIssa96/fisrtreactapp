// import { FontAwesomeIcon } from '@xexsfortawesome/react-fontawesome'
import React from 'react'
import './footer.css'

 const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
          <div className="container">
          <div className="row p-5">
            <div className="col-md-4">
              <div className="footer-section">
                <h3 className='m-1'>LOCATION</h3>
                <p className='p-0'>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-section">
                <h3 >AROUND THE WEB</h3>
                <div className="social-icons d-flex justify-content-center gap-4">
                  <div className='icon'>
                  <i class="fa-brands fa-facebook"></i>
                  </div>
                  <div className="icon">
                  <i class="fa-brands fa-twitter"></i>
                  </div>
                  <div className="icon">
                  <i class="fa-brands fa-instagram"></i>
                  </div>
                  <div className="icon">
                  <i class="fa-brands fa-linkedin"></i>
                  </div>                
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-section">
                <h3 className='m-1'>ABOUT FREELANCER</h3>
                <p className='p-0 text-center'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="copy">
          <p className='text-white'>Copyright © Your Website 2021</p>
        </div>
      </div>

  )
}

export default Footer;