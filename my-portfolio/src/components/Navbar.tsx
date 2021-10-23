import React, { FC } from "react";
import developerData from '../data.json';

interface NavbarProps {
    devData: typeof developerData
}


const Navbar: FC<NavbarProps> = (props) => {
    //I want a persistent navbar with my name
    return (
        <nav id="navbar" className="navbar fixed-top navbar-light bg-light">
            <div className="container-fluid ">
                <div className="navbar-brand align-items-center" >
                    <img 
                        src={props.devData.profilePic} 
                        alt="" 
                        className="d-inline-block " 
                    />
                    <span>Hi, I'm {props.devData.name}</span>
                </div>
            </div>
        </nav>)
}

export default Navbar;