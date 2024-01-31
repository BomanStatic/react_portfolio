import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import ProjectsView from "./views/ProjectsView";
import ContactView from "./views/ContactView";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <Nav />
            <main>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/projects" element={<ProjectsView />} />
                    <Route path="/contact" element={<ContactView />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
