import React from "react";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import Input from "./UI/Input";
import CartContext from "../store/CartContext";
import { useContext } from "react";

const CheckOut = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleclose() {
    userProgressCtx.hideCart();
  }
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    console.log(customerData);
     fetch("http://localhost:3000/orders", {
       method: "Post",
       headers: {
         "Content-Type": "application/json",
       },
       body:JSON.stringify({
        order:{
          items: cartCtx.items,
          customer:customerData
        }
       })
     });
  }

  return (
    <>
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleclose}
      >
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
          <Input label="Full-Name" type="text" id="name" />
          <Input label="Email" type="email" id="email" />
          <Input label="Steet" type="text" id="street" />
          <div className="control-row">
            <Input label="postal-code" type="text" id="postal-code" />
            <Input label="city" type="text" id="city" />
          </div>
          <Button type="textOnly" onClick={handleclose}>
            Close
          </Button>
          <Button>Submit</Button>
        </form>
      </Modal>
    </>
  );
};

export default CheckOut;
