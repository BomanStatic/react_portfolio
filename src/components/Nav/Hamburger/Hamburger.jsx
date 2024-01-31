import React from "react";
import "./Hamburger.css";

function Hamburger({ open, setOpen }) {
    const handleOpenHamburger = () => {
        setOpen((open) => !open);
    };
    return (
        <button tabIndex="1" onClick={handleOpenHamburger} className={`hamburger ${open ? "open" : ""}`}>
            <span className="hamburger__line" data-line="1"></span>
            <span className="hamburger__line" data-line="2"></span>
            <span className="hamburger__line" data-line="3"></span>
            <span className="hamburger__line" data-line="4"></span>
        </button>
    );
}

export default Hamburger;
