import "./AboutMe.css";

function AboutMe() {
    return (
        <section className="about-section">
            <h2 className="uppercase about-title">About me</h2>
            <div className="about-me">
                <h3 className="about-me__title uppercase">Frontend Developer in the Making</h3>
                <p className="about-me__description">
                    Welcome to my journey as a frontend developer! I'm working hard to become a master of web development. Let's explore
                    HTML, CSS, and JavaScript together as we create engaging digital experiences
                </p>
            </div>
            <div className="about-me">
                <h3 className="about-me__title uppercase">Crafting the Web, One Pixel at a Time</h3>
                <p className="about-me__description">
                    Hello there! Join me as we craft the web, paying attention to every detail. Together, we'll create seamless digital
                    spaces, one pixel at a time.
                </p>
            </div>
            <div className="about-me">
                <h3 className="about-me__title uppercase">Building User-Friendly Experiences</h3>
                <p className="about-me__description">
                    Let's build easy-to-use digital experiences! I'm focused on making websites and applications that are intuitive and
                    responsive. Join me in creating practical solutions for users.
                </p>
            </div>
        </section>
    );
}

export default AboutMe;
