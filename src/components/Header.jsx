import React from "react";
import Menu from "./Menu";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <Menu />
            <div className="header-content">
                <h1>Cinnamon Atelier</h1>
                <p>- artisanal & healthy products -</p>
            </div>
        </header>
    );
};

export default Header;
