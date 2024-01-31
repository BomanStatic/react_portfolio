import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger/Hamburger";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import "./Nav.css";
function Nav() {
    const [open, setOpen] = useState(false);
    const closeMenu = () => setOpen(false);
    return (
        <header className="nav">
            <nav className="nav__wrapper">
                <ThemeSwitcher />
                <p>
                    Currently studying at
                    <a href="https://kyh.se/utbildningar/front-end-developer/" target="_blank" rel="noopener noreferrer">
                        {" "}
                        KYH
                    </a>
                </p>
                <p className="nav__location">Sweden, Falun</p>
                <Hamburger open={open} setOpen={setOpen} />
                {open && (
                    <ul className="nav__list">
                        <div className="nav__list--wrapper">
                            <li className="nav__item">
                                <Link className="nav__link" to="/" onClick={closeMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link className="nav__link" to="/projects" onClick={closeMenu}>
                                    Projects
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link className="nav__link" to="/contact" onClick={closeMenu}>
                                    Contact
                                </Link>
                            </li>
                        </div>
                    </ul>
                )}
            </nav>
        </header>
    );
}

export default Nav;
