import React, { FC } from "react";
import "../styles.css";

const Header: FC = () => {
    console.log(__dirname);
    //I want a persistent navbar with my name
    return (
        <div id="header" className="d-flex justify-content-center">
            <div>
                <div >theme slider</div>
                <h1>Hi, I'm Santiago Alfonso</h1>
                <p>About me</p>
                <div>Social</div>
                <div>Resume</div>
            </div>
        </div>
    );
};

export default Header;
