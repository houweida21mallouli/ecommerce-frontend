import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Produits similaires</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts