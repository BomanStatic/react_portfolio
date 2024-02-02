import ProjectCard from "./ProjectCard/ProjectCard";
import tianSrc from "../../assets/Tian.webp";
import fourCardSrc from "../../assets/fourCard.webp";
import timeTrackingSrc from "../../assets/timeTracking.webp";
import ageApp from "../../assets/ageApp.webp";
import "./Projects.css";
function Projects() {
    const projects = [
        {
            imgSrc: tianSrc,
            title: "Tian Landing Page",
            text: "Tian Landing Page A sleek, responsive landing page crafted to perfection from a unique design, embodying the essence of the brand.",
            githubLink: "https://github.com/BomanStatic/Tian-landing-page",
            liveLink: "https://github.com/BomanStatic/Tian-landing-page",
        },
        {
            imgSrc: fourCardSrc,
            title: "Four Card Feature Section",
            text: "Four Card Feature Section: A Frontend Mentor challenge turned into a sleek and responsive feature section, showcasing key functionalities with style.",
            githubLink: "https://github.com/BomanStatic/Tian-landing-page",
            liveLink: "https://github.com/BomanStatic/Tian-landing-page",
        },
        {
            imgSrc: ageApp,
            title: "Age Calculator",
            text: "The Age Calculator: Input your birthdate and instantly calculate your age, simplifying age-related calculations with ease.",
            githubLink: "https://github.com/BomanStatic/Time-tracking-dashboard",
            liveLink: "https://github.com/BomanStatic/Tian-landing-page",
        },
        {
            imgSrc: timeTrackingSrc,
            title: "Time Tracking Dashboard",
            text: "Time Tracking Dashboard: Designed from a Frontend Mentor challenge, this tool simplifies time management with sleek visuals and intuitive functionality.",
            githubLink: "https://github.com/BomanStatic/Time-tracking-dashboard",
            liveLink: "https://github.com/BomanStatic/Tian-landing-page",
        },
    ];
    return (
        <section className="projects-section">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    imgSrc={project.imgSrc}
                    title={project.title}
                    text={project.text}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                />
            ))}
        </section>
    );
}

export default Projects;
