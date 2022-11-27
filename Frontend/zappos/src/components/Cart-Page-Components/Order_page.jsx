import React, { useEffect, useState } from "react";
import "./shipping.css";

import { useSelector } from "react-redux";
const Order_page = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const getAmount = () => {
      let amt = cart?.reduce((acc, elem) => {
        return acc + elem.productId.price * elem.quantity;
      }, 0);
      setTotalAmount(amt ? Math.floor(amt) : 0);
    };
    getAmount();
  }, [cart]);

  return (
    <>
      <div className="container">
        <div id="right" className="right">
          <div></div>
          <div className="div2">
            <button className="payment-btn place">DETAILS</button>
            <h3 className="order-summary">
              Order Summary ({cart?.length} Items)
            </h3>
            <div className="divide subtotal">
              <h3>Subtotal:</h3>
              <h3 className="subtotalPrice">${totalAmount}</h3>
            </div>
            <div className="shipping divide">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="total divide">
              <p>Total tax</p>
              <p className="before-tax">$0.00</p>
            </div>
            <div className="estimated divide">
              <p>Cupon Discount</p>
              <p className="cupon-discount">$0.00</p>
            </div>
            <hr className="order-top" />
            <div className="divide">
              <h3>Order Total</h3>
              <h3 className="order-total">${totalAmount}</h3>
            </div>
          </div>
          <div className="div3">
            <h3>Apply Gift Card or Promo Code</h3>
            <input type="text" id="cupon-code" placeholder="Enter Code" />
            <button id="cupon-btn" className="payment-btn">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order_page;
