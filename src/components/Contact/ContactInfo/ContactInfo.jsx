import "./ContactInfo.css";
function ContactInfo() {
    return (
        <article className="contact-info">
            <h3 className="contact-info__title">Get in touch</h3>
            <p className="contact-info__description">
                You can use the contact form to send me a message. And i will hit you up as soon as possible.
            </p>
            <ul role="list" className="contact-info__list">
                <li className="contact-info__item">
                    <a href="tel:+46730662088" aria-label="my phone number" className="contact-info__link">
                        <iconify-icon icon="ic:baseline-phone" className="contact-info__icon"></iconify-icon>{" "}
                    </a>
                    <a href="tel:+46730662088" className="contact-info__link">
                        073-066 20 88
                    </a>
                </li>
                <li className="contact-info__item">
                    <a href="mailto:boman.staticsites@gmail.com" aria-label="my email" className="contact-info__link">
                        <iconify-icon icon="ic:round-email"></iconify-icon>
                    </a>
                    <a href="mailto:boman.staticsites@gmail.com" className="contact-info__link">
                        boman.staticsites@gmail.com
                    </a>
                </li>
            </ul>
        </article>
    );
}

export default ContactInfo;
