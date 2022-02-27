// import { Link } from 'react-router-dom';
import './portfolio.css';

// https://burger-app-creat.netlify.app
// https://jahongir-portfolio-react.vercel.app
// https://github.com/ErgashevJahongir

// #### HTML CSS #######


export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul className="container">
                <li className="item">
                    <a href="https://joha-my-shop-market.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src="assets/Myshop.png" alt="portfolio sayt" />
                        <h3>My Shop Internet Store</h3>
                    </a>
                </li>
                <li className="item">
                    <a href="https://joha-indicrop.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/Indicorp.png" alt="portfolio sayt" />
                        <h3>My Shop Internet Store</h3>
                    </a>
                </li>
                <li className="item">
                    <a href="https://joha-storm-it-academy.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src="assets/storm-it.png" alt="portfolio sayt" />
                        <h3>My Shop Internet Store</h3>
                    </a>
                </li>
                <li className="item">
                    <a href="https://joha-restaurantly.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src="assets/restaurantly.png" alt="portfolio sayt" />
                        <h3>My Shop Internet Store</h3>
                    </a>
                </li>
                <li className="item">
                    <a href="https://joha-reading-club.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src="assets/reading-club.png" alt="portfolio sayt" />
                        <h3>My Shop Internet Store</h3>
                    </a>
                </li>
                <li className="item">
                    <a href="https://react-redux-todo-app-azure.vercel.app" target="_blank" rel="noopener noreferrer">
                        <img src="assets/redux-react.png" alt="portfolio sayt" />
                        <h3>My Shop Internet Store</h3>
                    </a>
                </li>
            </ul>
        </div>
    );
}
