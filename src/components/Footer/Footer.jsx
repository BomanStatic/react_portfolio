import "./Footer.css";
import { Link } from "react-router-dom";
import SocialLink from "./SocialLink/SocialLink";
function Footer() {
    return (
        <footer>
            <h4 className="uppercase footer-title">Pontus Boman</h4>
            <p className="footer__message">Thats it, Looks like you've hit the end of the road!</p>
            <div className="footer-list__container">
                <ul className="social__list" role="list">
                    <li className="social__list-item">
                        <SocialLink icon="linkedin" link="https://www.linkedin.com/in/pontus-boman-aa85131bb/" />
                    </li>
                    <li className="social__list-item">
                        <SocialLink icon="codepen" link="https://codepen.io/BomanStatic" />
                    </li>
                    <li className="social__list-item">
                        <SocialLink icon="github" link="https://github.com/BomanStatic" />
                    </li>
                </ul>
                <ul className="footer__list" role="list">
                    <li className="footer__list-item">
                        <Link className="footer__link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="footer__list-item">
                        <Link className="footer__link" to="/projects">
                            Project
                        </Link>
                    </li>
                    <li className="footer__list-item">
                        <Link className="footer__link" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
