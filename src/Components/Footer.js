
import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles.css'
const Footer = () => {
    return (
<div>  
  <div className="b-example-divider" />
  <div className="container-fluid custom">
    <footer className="py-5">
      <div className="row">
        <div className="col-2">
          <h5>Get In touch</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><i class="fa-solid fa-location-dot"></i>16 Deepdale Road, Preston,
            Lancashire, PR15AQ, England</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><i class="fa-solid fa-envelope"></i>info@desiposh.com</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><i class="fa-solid fa-phone"></i>+44 1772 461917</a></li>
          </ul>
        </div>
        <div className="col-2">
          <h5>Help</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About US</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Shipping</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Returns Policy</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Privacy Policy</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Search</a></li>
          </ul>
        </div>
        <div className="col-2">
          <h5>Desi Posh Guranttee</h5>
          <p>We guarantee what you see is what you get. All images are our own and you will be sent exactly what you see in the images. All original outfits are stitched exactly as shown in the pictures. Buy with confidence as thousands of customers have done with a full money back guarantee.</p>
        </div>
        <div className="col-4 offset-1">
          <form>
            <h5>Newsletter Signup</h5>
            <p>Subscribe to our newsletter and get 5% off your first purchase</p>
            <div className="d-flex w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-dark" type="button">Subscribe</button>
            </div>
            <div>
           
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex justify-content-between py-4 my-4 border-top">
        <p>© 2021 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>
</div>
    )
}

export default Footer