import React from 'react'
import "./page.css"; 
import {Link} from 'react-router-dom';
export default function Appliances() {
  return (
    <div>
        <h2 className='heading'>Shop by categories</h2>

<div className="list-group">
  <Link to="/homedecor" className="list-group-item list-group-item-action">
   Kitchen Appliances
  </Link>
  <Link to="/homedecor" className="list-group-item list-group-item-action">Washing Machines</Link>
  <Link to="/homedecor" className="list-group-item list-group-item-action">Refrigerators</Link>
  <Link to="/homedecor" className="list-group-item list-group-item-action">Air Conditioners</Link>
  <Link to="/homedecor" className="list-group-item list-group-item-action">Geysers</Link>
  <Link to="/homedecor" className="list-group-item list-group-item-action">Hair Dryers</Link>
</div>
<div className='swipe-banner'>
<img className='banner' src="images/appliances.png"/>
<img className='banner' src="https://5.imimg.com/data5/VZ/JQ/GG/SELLER-28153839/home-appliance-repairings-500x500.jpg"/>
<img className='banner' src="https://kitchenaid-h.assetsadobe.com/is/image/content/dam/business-unit/amana/v2/masthead/kitchen-masthead-desktop.jpg?fit=constrain&fmt=jpg&utc=2019-06-03T17:12:27Z&wid=1440"/>
<img className='banner' src="https://www.lg.com/ph/images/plp-b2c/Shop-Now_Desktop.jpg"/>
</div>
<h2 className='heading'>Popular Brands</h2>
<div className='card-division'>
    <div className="card">
  <img className='meta-image' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX////sIiTrAADrBQr2sLH5x8frEhX96+vsHyHzjIzyhYb+7+/3s7PuP0HtLS/rDxL83+DuREXtJyn0k5TyfHzsGRv+9vb0l5fvYGH4vr7/+vr60dH72Nj0m5vvVVbuRkj2pqbtNzj5wsLxcXL2qKnygYHwZ2jwXl7xdnf83d5mAzi7AAADz0lEQVR4nO3a23qiMBiG0RgUM2rFTaGVatEpddr7v8GREPaKGbUy7fOuIyP0N18FEiJCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfE/hqn/eOtkzGJyndxRriz3HyY5j65JXBJxK5zy5FeK3tPF6KPlqtedKiIltyWtsZM+GFEIqqx23YmtVUtmXjK9K+Mu1+ZCeHI7t/hXuSIwsS46HliV/kZCEVt35CQlVqtJqS6h813X9+rWikrBapF6ynlAVviSh2s0T07S6etCtkwmVI3v799HobSelfyqhWmjVVt77akJfSneR82TpMnurhM5KtzeeSaRb8+xzagm9RTw0BYLVvLylnNCUfE/bMtCtaV6ynNDbr8Nyt4JV8a+4WcKJbi9NwpluPRxPKEeVGuUBsJIwLfloEo5PJ/T/NDo2yzd2kFBuakX6xbbLEspBs2ev2dF//4R+1Kjylp+LFyYMmj3Ly9w/oTm9RBBv+qZnpUPqooTukZ5tnc4Smq6KxWHObq5IIr8uXJRQLdIqYaCljX53CZ30qhckF3T/eaPNb5LQze86DiYdfofmuj6Rnt/zPa24tDcTfki9y/mEpu1+dJ4wuycdPkVSerUJSDPhavmUWJ4eD2sJH7tO6L4Xfx4Mlg+VSc2RhFXfIWF99Frvy1OsixLuTEI/4XR+lOob+YpB63lokfAhTfj6nPjz1H3CnjPdDstV1m3joXXCqm4TJvcW0aa0CvaYT0B+SsID/3CL85ydkYNs65GEL6tU+H8l/Dyd0DerfPql+fRhS8IPs3/LeHifhH3d7qe9ccOTCf1nER6I3/oNeT6hxZzmPgnNquRMM9OW6ZGEamr+dJ/MS/fp65dbJAxeUrOvSejVb/oSqnVOs4772UuzNHBdwk9zOL99TUIzk6gIi1Tl87B5Qy7862beacLZ185p1Ly5cX00YWPAP4TIvsL/OWFPvjQ2fhQbq3Oa2hH9fuUqxp0SKjUZVzaNl6WvrToeyqiYmoaTnVdsuWitzRw/2cw7ndmvbp4wmae402huLDxZ6nh9xPels1/GcbwZRdIp3z9V1kt3SbUoW4LVZaOiZHk1UX+sGZuU7kS0y0/tW67qK3Vi4bk5p1G+5ziO5/rVt4+seZ9aRi8nPLLjzddL2/2I3y3au0PCvDskLEreKWFs/6O7VXecjXhyzu/WS+bsoV3Jxo8I/8j6wYmt1UMb00AEdo93xLYld+H5FK2sH35ZWzx4o8d4q0d0Pv+pJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwHf0F6xTV3f8pVRiAAAAAElFTkSuQmCC"/>
  <h1>USHA</h1>
  <p className="price">Starting from $20</p>
</div>


<div className="card">
  <img className='meta-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_FRQ4Ch9ZhJBt9qZVDuhRCp2pKaFexDnBluCK3YybE91hQ5vMfLdUOOGSpHIknt6zt4&usqp=CAU"/>
  <h1>ORIENT</h1>
  <p className="price">Starting from $19.99</p>
</div>

<div className="card">
  <img className='meta-image' src="https://www.siasat.com/wp-content/uploads/2021/01/LG-Logo.jpg" alt="Denim Jeans"/>
  <h1>LG</h1>
  <p className="price">Starting from $29.99</p>
</div>

<div className="card">
  <img className='meta-image' src="https://images.samsung.com/is/image/samsung/assets/in/about-us/brand/logo/mo/256_144_1.png?$512_N_PNG$" alt="Denim Jeans"/>
  <h1>SAMSUNG</h1>
  <p className="price">Starting from $75.99</p>
</div>

</div>
    </div>

    
  )
}
