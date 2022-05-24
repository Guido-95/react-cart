import React from 'react'
import './cartItem.css'
import {useGlobalContext} from '../context/context'
function CartItem({_id,image,name,price,qty}) {
    const {aumentaQty,diminusciQty,removeItem} = useGlobalContext();

  return (
    <article className='cart-item'>
        <div className='img-cart-item'>
            <img className='product-image' src={image} alt="" />
        </div>
        <p>{name}</p>
        <div className="qty-selector">
            <button onClick={()=>{aumentaQty(_id)}} className="btn icon-btn add">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z">
                    </path>
                </svg>
            </button>
            <span> {qty} </span>
            <button onClick={()=>{diminusciQty(_id)}} className="btn icon-btn remove">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="icon minus-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 11H19V13H5z">
                    </path>
                </svg>
            </button>
        </div>
        <div className='price'>
            <span> {price}</span>
        </div>
        <div>
            <button onClick={()=>{removeItem(_id)}} className='remove-item'>
                X
            </button>
        </div>
    </article> 
  )
}

export default CartItem

