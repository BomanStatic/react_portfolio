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
            title: "Tian Landing page",
            text: "Tian Landing Page A sleek, responsive landing page crafted to perfection from a unique design, embodying the essence of the brand.",
            githubLink: "https://github.com/BomanStatic/Tian-landing-page",
            liveLink: "https://github.com/BomanStatic/Tian-landing-page",
        },
        {
            imgSrc: fourCardSrc,
            title: "Tian Landing page",
            text: "Tian Landing Page A sleek, responsive landing page crafted to perfection from a unique design, embodying the essence of the brand.",
            githubLink: "https://github.com/BomanStatic/Tian-landing-page",
            liveLink: "https://github.com/BomanStatic/Tian-landing-page",
        },
        {
            imgSrc: ageApp,
            title: "Time Tracking Dashboard",
            text: "Tian Landing Page A sleek, responsive landing page crafted to perfection from a unique design, embodying the essence of the brand.",
            githubLink: "https://github.com/BomanStatic/Time-tracking-dashboard",
            liveLink: "https://github.com/BomanStatic/Tian-landing-page",
        },
        {
            imgSrc: timeTrackingSrc,
            title: "Time Tracking Dashboard",
            text: "Tian Landing Page A sleek, responsive landing page crafted to perfection from a unique design, embodying the essence of the brand.",
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
