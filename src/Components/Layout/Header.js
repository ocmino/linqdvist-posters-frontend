import React from "react";
import classes from "./Header.module.css";
import { Fragment } from "react";
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
