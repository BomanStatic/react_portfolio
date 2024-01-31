import "./Hero.css";
import heroImage from "../../assets/hero.webp";
import ProjectCard from "../Projects/ProjectCard/ProjectCard";
import LatestRepos from "./Github/LatestRepos";
import ProfileStats from "./Github/ProfileStats";
import tianSrc from "../../assets/Tian.webp";
function About() {
    const highlightedProject = {
        imgSrc: tianSrc,
        title: "Tian Landing page",
        text: "Tian Landing Page A sleek, responsive landing page crafted to perfection from a unique design, embodying the essence of the brand.",
        githubLink: "https://github.com/BomanStatic/Tian-landing-page",
        liveLink: "https://github.com/BomanStatic/Tian-landing-page",
    };
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-information">
                    <span className="label-pill">Frontend-developer</span>
                    <h1 className="hero-title">Pontus Boman</h1>
                    <p className="hero-description">
                        I'm a frontend developer who loves turning creative ideas into cool websites. Right now, I'm deep into the web
                        development scene, always up for a coding challenge. If you're into tech or just want to chat, let's connect and
                        geek out a bit!
                    </p>
                </div>
                <img className="hero-img" src={heroImage} alt="Abstract" width="100%" height="100%" />
            </div>
            <div className="hero-grid">
                <ProfileStats />
                <ProjectCard
                    imgSrc={highlightedProject.imgSrc}
                    title={highlightedProject.title}
                    text={highlightedProject.text}
                    githubLink={highlightedProject.githubLink}
                    liveLink={highlightedProject.liveLink}
                />
                <LatestRepos />
            </div>
        </section>
    );
}

export default About;
