import React from 'react'
import "./page.css"; 
import {Link} from 'react-router-dom';
export default function Homedecor() {
  return (
    <>
    <img className="banner" src="images/homedecor.png" alt="image"/>

    <h2 className='heading'>Shop by categories</h2>

<div className="list-group">
  <Link to="/homedecor" className="list-group-item list-group-item-action">
   Bedroom
  </Link>
  <Link to="/homedecor" className="list-group-item list-group-item-action">Bathroom</Link>
  <Link to="/homedecor" className="list-group-item list-group-item-action">Kitchen</Link>
  <Link to="/homedecor" className="list-group-item list-group-item-action">Outdoors</Link>
  <Link to="/homedecor" className="list-group-item list-group-item-action">Office</Link>
  <Link to="/homedecor" className="list-group-item list-group-item-action">Lighting</Link>
</div>

<h2 className='heading'>Popular Products</h2>
<div className='card-division'>
    <div className="card">
  <img className='meta-image' src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2020/9/25/1c4d229c-5fd4-4b63-8dc5-4e01c9103ab61600992839880-1.jpg" alt="Denim Jeans"/>
  <h1>Stylish Plant Stand</h1>
  <p className="price">$19.99</p>
  <p>Plant Stands from a great selection at Outdoor | Pots | Indoor Plant Stand, Modern Home Decoration (Black)</p>
  <p><button>Add to Cart</button></p>
</div>


<div className="card">
  <img className='meta-image' src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2020/9/25/1c4d229c-5fd4-4b63-8dc5-4e01c9103ab61600992839880-1.jpg" alt="Denim Jeans"/>
  <h1>Stylish Plant Stand</h1>
  <p className="price">$19.99</p>
  <p>Plant Stands from a great selection at Outdoor | Pots | Indoor Plant Stand, Modern Home Decoration (Black)</p>
  <p><button>Add to Cart</button></p>
</div>

<div className="card">
  <img className='meta-image' src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2020/9/25/1c4d229c-5fd4-4b63-8dc5-4e01c9103ab61600992839880-1.jpg" alt="Denim Jeans"/>
  <h1>Stylish Plant Stand</h1>
  <p className="price">$19.99</p>
  <p>Plant Stands from a great selection at Outdoor | Pots | Indoor Plant Stand, Modern Home Decoration (Black)</p>
  <p><button>Add to Cart</button></p>
</div>

<div className="card">
  <img className='meta-image' src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2020/9/25/1c4d229c-5fd4-4b63-8dc5-4e01c9103ab61600992839880-1.jpg" alt="Denim Jeans"/>
  <h1>Stylish Plant Stand</h1>
  <p className="price">$19.99</p>
  <p>Plant Stands from a great selection at Outdoor | Pots | Indoor Plant Stand, Modern Home Decoration (Black)</p>
  <p><button>Add to Cart</button></p>
</div>
</div>


    </>
  )
}
