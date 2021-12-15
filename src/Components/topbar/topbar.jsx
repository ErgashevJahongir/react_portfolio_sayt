import React from "react";
import "./topbar.css";
// import PersonIcon from "@mui/icons-material/Person";
// import MailIcon from "@mui/icons-material/Mail";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro " className="logo">
                        JOHA
                    </a>
                    <div className="itemContainer">
                        <i class="bi bi-person-fill icon"></i>
                        {/* <PersonIcon className="icon" /> */}
                        <span>+90 377 89 90</span>
                    </div>
                    <div className="itemContainer">
                        <i class="bi bi-envelope icon"></i>
                        {/* <MailIcon className="icon" /> */}
                        <span>jahongirergawev2@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div
                        className="hamburger "
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                        }}
                    >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
