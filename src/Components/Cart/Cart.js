import React, { useState } from "react";

function Cart({ cartItems }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!cartItems) {
    return <p></p>;
  }

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div style={{ position: "fixed", bottom: 0, right: 0 }}>
      <button onClick={toggleCart}>Cart ({cartItems.length})</button>
      {isOpen && (
        <div style={{ backgroundColor: "white", padding: "10px" }}>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item, index) => (
                <div key={index}>
                  <p>{item.name} - {item.price} SEK</p>
                </div>
              ))}
              <p>Total: {total} SEK</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
