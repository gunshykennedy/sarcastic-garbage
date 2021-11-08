// src/component/CartOverview.js

import React, { useState } from 'react'

import { useShoppingCart } from 'use-shopping-cart'

const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '12px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  borderRadius: '6px',
  letterSpacing: '1.5px',
}

const Cart = () => {
  const [loading, setLoading] = useState(false)
  /* Gets the totalPrice and a method for redirecting to stripe */
  const {
    formattedTotalPrice,
    redirectToCheckout,
    cartCount,
    clearcart,
  } = useShoppingCart()

  return (
    <div>
      {/*Render Cart here*/}
      <p>Number of Items: {cartCount}</p>
      <p>Totlal: {formattedTotalPrice}</p>

      {/*Redirects the user to stripe*/}
      <button
        style={buttonStyles}
        disabled={loading}
        onClick={() => {
          setLoading(true)
          redirectToCheckout()
        }}
      >
        {loading ? 'Loading...' : 'Checkout'}
      </button>
      <button style={buttonStyles} onClick={ClearCart}>
        Clear Cart
      </button>
    </div>
  )
}

export default Cart