import ModalCart from "../UI/ModalCart";
import styles from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";
import { useState } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} SEK`;

  const hasItems = cartCtx.items.length > 0;

  const [opened, { open, close }] = useDisclosure(false);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const styleForm = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "30px",
    background: "#77849b",
    borderRadius: "5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
  };

  const cartitems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  //this array will be used to create the order, to the endpoint
  const cartItemIds = cartCtx.items.flatMap((item) =>
    Array.from({ length: item.amount }, () => item.id)
  );
  //make cartItemsIds to integer
  const cartItemIdsInt = cartItemIds.map((x) => parseInt(x, 10));
  console.log(cartItemIdsInt);

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      customerName,
      customerEmail,
      customerAddress,
      postalCode,
      city,
      phone,
      posterIds: cartItemIdsInt,
    };
    fetch("http://localhost:8080/api/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  return (
    <>
      <ModalCart onClose={props.onClose}>
        {cartitems}
        <div className={styles.total}>
          <span>Total summa</span>
          <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onClose}>
            Stäng
          </button>
          {hasItems && (
            <button onClick={open} className={styles.button}>
              Beställ
            </button>
          )}
        </div>
      </ModalCart>

      <Modal opened={opened} onClose={close} fullScreen>
        <form onSubmit={handleSubmit} style={styleForm}>
          <label>
            Customer Name:
            <input
              type="text"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Customer Email:
            <input
              type="email"
              value={customerEmail}
              onChange={(event) => setCustomerEmail(event.target.value)}
            />
          </label>
          <br />
          <label>
            Customer Address:
            <input
              type="text"
              value={customerAddress}
              onChange={(event) => setCustomerAddress(event.target.value)}
            />
          </label>
          <br />
          <label>
            Postal Code:
            <input
              type="text"
              value={postalCode}
              onChange={(event) => setPostalCode(event.target.value)}
            />
          </label>
          <br />
          <label>
            City:
            <input
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </>
  );
};

export default Cart;
