import { useRef, useState } from "react";
import Toast from "./Toast/Toast";
import ContactInfo from "./ContactInfo/ContactInfo";
import emailjs from "@emailjs/browser";
import "./Contact.css";
function Contact() {
    const form = useRef();
    const [toastOpen, setToastOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let allInputsFilled = true;
        for (let i = 0; i < form.current.length; i++) {
            if (form.current[i].type !== "submit" && form.current[i].value === "") {
                allInputsFilled = false;
                break;
            }
        }

        if (!allInputsFilled) {
            setToastMessage("Please fill out all fields");
            setToastType("error");
            setToastOpen(true);
            return;
        }
        emailjs.sendForm("service_bo2up2u", "template_r3fzb06", form.current, "3KOj322QMXsm8vUnP").then(
            (result) => {
                console.log(result.text);
                form.current.reset();
                setToastMessage("Mail sent successfully");
                setToastType("success");
                setToastOpen(true);
            },
            (error) => {
                console.log(error.text);
                setToastMessage("Error sending mail");
                setToastType("error");
                setToastOpen(true);
            }
        );
    };
    const closeToast = () => {
        setToastOpen(false);
    };
    return (
        <section className="contact-form">
            <ContactInfo />
            <form ref={form} onSubmit={handleSubmit} className="contact-form__form">
                <label className="contact-form__label">
                    Name
                    <input type="text" name="name" className="contact-form__input" autoComplete="asd" />
                </label>
                <label className="contact-form__label">
                    Email
                    <input type="email" name="email" className="contact-form__input" />
                </label>
                <label className="contact-form__label label__textarea">
                    Message
                    <textarea name="message" className="contact-form__textarea" />
                </label>
                <input type="submit" value="Submit" className="contact-form__submit" />
            </form>
            <Toast message={toastMessage} type={toastType} isOpen={toastOpen} closeToast={closeToast} />
        </section>
    );
}

export default Contact;
