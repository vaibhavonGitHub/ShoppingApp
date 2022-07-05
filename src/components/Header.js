import React from 'react'
import "./Component.css";
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    <div>
    <div className='title'>Shopkart.com
    <div className="search-container"> <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i className="fa fa-search"></i></button>
    </form></div>
    </div>
    <ul className='List-a'>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/appliances">Home Appliances</Link></li>
  <li><Link to="/beauty">Beauty & Care</Link></li>
  <li><Link to="/smartphones">Smartphones</Link></li>
  <li><Link to="/mensfashion">Men's Fashion</Link></li>
  <li><Link to="/womensfashion">Women's Fashion</Link></li>
  <li><Link to="/kids">Kids</Link></li>
  <li><Link to="/books">Books</Link></li>
  <li><Link to="/homedecor">Home Decor</Link></li>
  <li><Link to="/electronics">Electronics</Link></li>
  <li><Link to="/footwears">Footwears</Link></li>
  <li><Link to="/groceries">Groceries</Link></li>
 
</ul>
    </div>
  )
}

