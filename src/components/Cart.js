import React from 'react'
import './cart.css'
import { useGlobalContext } from '../context/context'
import CartItem from './CartItem'
function Cart() {
    const {products,removeAllItem} = useGlobalContext();
    
    
  return (
    <section className='container-cart'>
        <div className="cart-info">
            <h4>Item</h4>
            <h4 className="prd-name">Nome</h4>
            <h4>Qty</h4>
            <h4>Prezzo</h4>
            <button onClick={removeAllItem} className="button-delete-all">
              delete all
            </button>
        </div>
      <hr />
      <section className="cart-section">
        {
          products.map((el)=>{
              return <CartItem  {...el} key={el._id}/>
          })
        } 
    
      </section>
    </section>
  )
}

export default Cart