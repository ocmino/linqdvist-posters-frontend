import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
export const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    
    const addToCart = (product) => {
        setCart([...cart, product]);
    };
    
    const removeFromCart = (productToRemove) => {
        setCart(cart.filter((product) => product !== productToRemove));
    };
    
    useEffect(() => {
        let items = 0;
        let price = 0;
        cart.forEach((item) => {
        items += item.qty;
        price += item.qty * item.price;
        });
        setTotal(price);
        setTotalItems(items);
    }, [cart, total, totalItems]);

    const style = {
        position: "fixed",
        right: "15px",
        bottom: "0vh",
    };
    
    return (
        <div style={style}>
        <h1>Cart</h1>
        <div>
            {cart.map((product) => (
            <div key={product.id}>
                <h4>{product.title}</h4>
                <p>{product.price}</p>
                <p>{product.qty}</p>
                <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
            ))}
        </div>
        <div>
            <h4>Total: {total}</h4>
            <h4>Total Items: {totalItems}</h4>
        </div>
        </div>
    );
    }

