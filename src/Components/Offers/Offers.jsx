import React from 'react'
import './Offers.css'
import model from '../Assets/model.png'
import { Link } from 'react-router-dom'


const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <Link to="/men">
              <button>Check Now</button>
            </Link>
        </div>
        
          <div className="offers-right">
            <img src={model} alt="" />
          </div>
        
    </div>
  )
}

export default Offers