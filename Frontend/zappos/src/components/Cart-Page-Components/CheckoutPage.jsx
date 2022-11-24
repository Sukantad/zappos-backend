import React from 'react'
import Order_page from './Order_page'
import Shipping_address from './Shipping_address'
import "./chekout.css"

const CheckoutPage = () => {
  return (
    <>
    <div className='gridBox' >
      <div>
        <Shipping_address/>
      </div>
      <div>
        <Order_page/>
      </div>
    </div>
   
    </>
  )
}

export default CheckoutPage
