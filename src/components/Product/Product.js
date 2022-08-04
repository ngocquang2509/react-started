import React, { useState } from "react";

export default function Product() {
  const [cart, setCart] = useState([]);
  const [total, setToal] = useState(0);
  return ( 
    <div>
      <div>Shopping Cart: {cart.length} total items.</div>
      <div>Total: {total}</div>
      <div className="product">
        <span role="img" aria-label="ice cream">
          🍦
        </span>
      </div>
      <button>Add</button> <button>Remove</button>
    </div>
  );
}
