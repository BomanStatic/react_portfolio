import Hero from "../components/Hero/Hero";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
function HomeView() {
    return (
        <>
            <Hero />
            <AboutMe />
            <Projects />
            <Contact />
        </>
    );
}

export default HomeView;
