//create a very simple footer component that only says the righs reserved
//place it at the bottom of the page

import React from 'react';

const styleFooter = {
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "40px",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "0.7rem",
    fontWeight: "bold",
}

export default function Footer() {
    return (
        <div style={styleFooter}>
            <p>© 2023 All rights reserved</p>
        </div>
    )
}

// Path: src/Components/Navbar.js
