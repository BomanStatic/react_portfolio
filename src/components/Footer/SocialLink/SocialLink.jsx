import "./SocialLink.css";
function SocialLink({ icon, link }) {
    return (
        <a href={link} target="_blank" aria-label={`${icon} link`} className="social__link" rel="noopener noreferrer">
            <iconify-icon icon={`simple-icons:${icon}`}></iconify-icon>
        </a>
    );
}

export default SocialLink;
