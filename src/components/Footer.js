import React from 'react'
import "./Component.css";
import {Link} from 'react-router-dom';
export default function footer() {
  return (
    <div className="footer-basic">
    <footer>
        <div className="social">
            <Link to="/"><i className="fa fa-instagram"></i></Link>
            <Link to="/"><i className="fa fa-snapchat"></i></Link>
            <Link to="/"><i className="fa fa-twitter"></i></Link>
            <Link to="/"><i className="fa fa-facebook"></i></Link></div>
        <ul className="list-inline">
            <li className="list-inline-item"><Link to="/">Home</Link></li>
            <li className="list-inline-item"><Link to="/">Services</Link></li>
            <li className="list-inline-item"><Link to="/">About</Link></li>
            <li className="list-inline-item"><Link to="/">Terms</Link></li>
            <li className="list-inline-item"><Link to="/">Privacy Policy</Link></li>
        </ul>
        <p className='copyright'>This website Template was created by Vaibhav Mishra and with the brand name "SHOPKART.COM" used here is a dummy name.</p>
        <p className="copyright">ShopKart.com © 2022</p>
    </footer>
</div>
  )
}
