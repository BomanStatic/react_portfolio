import { useState, useEffect } from "react";
import "./LatestRepos.css";
function LatestRepos() {
    const [latestRepos, setLatestRepos] = useState([]);
    useEffect(() => {
        //use session storage to cache the data
        const cachedData = sessionStorage.getItem("latestRepos");
        if (cachedData) {
            setLatestRepos(JSON.parse(cachedData));
        } else {
            fetch("https://api.github.com/users/BomanStatic/repos")
                .then((response) => response.json())
                .then((data) => {
                    const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                    const latest = sortedData.slice(0, 3);
                    setLatestRepos(latest);
                    sessionStorage.setItem("latestRepos", JSON.stringify(latest));
                })
                .catch((error) => console.error(error));
        }
    }, []);
    return (
        <article className="latest-repos">
            <h2 className="latest-repos__title">Latest repos</h2>
            <ul role="list" className="latest-repos__list">
                {latestRepos.map((repo) => (
                    <li key={repo.id} className="latest-repos__item">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="latest-repos__link">
                            {repo.name.replace(/[-_]/g, " ")}
                        </a>
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default LatestRepos;
