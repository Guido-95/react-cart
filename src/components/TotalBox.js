import React from 'react'
import './totalbox.css'
import {useGlobalContext} from '../context/context'
function TotalBox() {
    const {costoTotale}= useGlobalContext();
   
  return (
    <section className='total-box-container' >
        <div className='total-box'>
            <h2>Carrello</h2>
            <hr />
            <h2>{costoTotale > 0 ? costoTotale.toFixed(2) + '\u20AC' : 'inserisci un prodotto nel carrello'}</h2>
            <hr />
            <button>checkout</button>
        </div>
        
    </section>
  )
}

export default TotalBox