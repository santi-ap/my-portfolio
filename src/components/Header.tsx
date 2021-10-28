import React, { FC } from "react";
import MUISwitch from '@mui/material/Switch';
import "../styles.css";
import developerData from '../data.json'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Button from '@mui/material/Button';

interface HeaderProps {
    devData: typeof developerData
}

const Header: FC<HeaderProps> = (props) => {
    //I want a persistent navbar with my name
    return (
        <div id="header" className="d-flex align-items-center">

            <div >
                {/* <div><MUISwitch defaultChecked /></div> */}
                <div className="d-flex justify-content-center align-items-center">
                    <img className="profilePic" src={props.devData.profilePic} alt="profile" />
                    <div className="d-flex flex-column">
                        <h2>Hi, I'm </h2>
                        <h1>{props.devData.name}</h1>
                        <h3>Full Stack Web Dev | Game Dev</h3>
                    </div>
                </div>
                <p>{props.devData.about}</p>
                <div className="socialDiv d-flex align-items-center  justify-content-start">
                    <a href={props.devData.socialUrls.linkedInUrl}><LinkedInIcon sx={{ fontSize: 35 }} /></a>
                    <a href={props.devData.socialUrls.githubUrl}><GitHubIcon sx={{ fontSize: 35 }} /></a>
                </div>
                <div className="btns-div ">
                    <div className="d-flex justify-content-start">
                        <Button className="resumeBtn my-btn" variant="contained" href="#outlined-buttons" startIcon={<DescriptionOutlinedIcon />}>
                            SEE MY RESUME
                        </Button>
                    </div>
                    <div className="d-flex justify-content-start">
                        <Button className="resumeBtn my-btn" variant="contained" href="https://github.com/santi-ap/my-portfolio" startIcon={<GitHubIcon sx={{ fontSize: 35 }} />}>
                            THIS PORTFOLIO'S REPO
                        </Button>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default Header;
