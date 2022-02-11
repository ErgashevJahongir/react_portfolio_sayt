import './menu.css';

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={`menu ${menuOpen ? 'active' : ''}`}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#" className="social">
                        jahongirergawev2@gmail.com
                    </a>
                </li>
                <li>
                    <a href="#" className="social">
                        +998 90 377 89 90
                    </a>
                </li>
            </ul>
        </div>
    );
}
