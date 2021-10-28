import React, { FC } from "react";
import developerData from '../data.json';

interface NavbarProps {
    devData: typeof developerData
}


const Navbar: FC<NavbarProps> = (props) => {
    //I want a persistent navbar with my name
    return (
        // <nav id="navbar" className="navbar fixed-top navbar-light bg-light">
        //     <div className="container-fluid ">
        //         <div className="navbar-brand align-items-center" >
        //             <img
        //                 src={props.devData.profilePic}
        //                 alt=""
        //                 className="d-inline-block "
        //             />
        //             <span>Hi, I'm {props.devData.name}</span>
        //         </div>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <div className="navbar-nav">
        //                 <a className="nav-link active" aria-current="page" href="#">Home</a>
        //                 <a className="nav-link" href="#">Features</a>
        //                 <a className="nav-link" href="#">Pricing</a>

        //             </div>
        //         </div>
        //     </div>
        // </nav>
        <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand align-items-center" >
                    <img
                        src={props.devData.profilePic}
                        alt=""
                        className="d-inline-block "
                    />
                     <span>Hi, I'm {props.devData.name}</span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#header">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Contact me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;