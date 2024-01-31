import "./ProjectCard.css";

function ProjectCard({ imgSrc, title, text, githubLink, liveLink }) {
    return (
        <a href={githubLink} target="_blank" className="project-card">
            <img className="project-card__image" src={imgSrc} alt={title} />
            <h3 className="project-card__title">{title}</h3>
            <p className="project-card__description">{text}</p>
            {/* <a href={githubLink} target="_blank" ref={btnMouseRef}>
                <iconify-icon icon="mdi:github"></iconify-icon>
            </a>
            <a href={liveLink} target="_blank">
                <iconify-icon icon="uil:link"></iconify-icon>
            </a> */}
        </a>
    );
}

export default ProjectCard;
