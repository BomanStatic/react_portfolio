import { useEffect, useState } from "react";
import "./ProfileStats.css";
function ProfileStats() {
    const [profileStats, setProfileStats] = useState([]);
    useEffect(() => {
        //use session storage to cache the data
        const cachedData = sessionStorage.getItem("profileStats");
        if (cachedData) {
            setProfileStats(JSON.parse(cachedData));
        } else {
            fetch("https://api.github.com/users/BomanStatic")
                .then((response) => response.json())
                .then((data) => {
                    setProfileStats(data);
                    sessionStorage.setItem("profileStats", JSON.stringify(latest));
                })
                .catch((error) => console.error(error));
        }
    }, []);
    return (
        <a className="github-stats" href="https://github.com/BomanStatic" rel="noopener noreferrer" target="_blank">
            <h2 className="github-title">Github Stats</h2>
            <ul role="list" className="github-stats__list">
                <li className="github-stats__item">
                    <p>Public Repositories</p>
                    <p>{profileStats.public_repos}</p>
                </li>
                <li className="github-stats__item">
                    <p>Followers</p>
                    <p>{profileStats.followers}</p>
                </li>
                <li className="github-stats__item">
                    <p>Following</p>
                    <p>{profileStats.following}</p>
                </li>
            </ul>
        </a>
    );
}

export default ProfileStats;
