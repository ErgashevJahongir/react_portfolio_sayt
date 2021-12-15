import "./app.css";
import Topbar from "./Components/topbar/topbar";
import Testimonials from "./Components/testimonials/testimonials";
import Intro from "./Components/intro/intro";
import Contact from "./Components/contact/contact";
import Portfolio from "./Components/portfolio/portfolio";
import Works from "./Components/works/works";
import { useState } from "react";
import Menu from "./Components/menu/Menu";

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="app" id="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Portfolio />
                <Works />
                <Testimonials />
                <Contact />
            </div>
        </div>
    );
}
