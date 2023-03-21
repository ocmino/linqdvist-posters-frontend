import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DUMMY_POSTERS } from "../AvailableMeals";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const [opened, { open, close }] = useDisclosure(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  const modelviewer = useRef();

  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <Input
          ref={modelviewer}
          label="Antal"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Lägg till</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </form>
      <button onClick={open}>AR</button>
      <Modal opened={opened} onClose={close} fullScreen>
        <model-viewer
          src={DUMMY_POSTERS[1].modelviewer}
          alt="A 3D model of an astronaut"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          auto-rotate
          shadow-intensity="1"
          exposure="1"
          style={{
            width: "100%",
            height: "80vh",
            left: "0",
            top: "0",
            position: "relative",
          }}
        ></model-viewer>
      </Modal>
    </>
  );
};

export default MealItemForm;
