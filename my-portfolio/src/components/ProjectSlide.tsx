import React, { FC } from "react";
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

interface projectProps {
    name: string,
    description: string,
    imageUrl: string,
    githubUrl: string,
    gPlayUrl?: string,
    appStoreUrl?: string,
    windowsUrl?: string,
    macUrl?: string,
    isActive?: boolean,
    isHorizontal?: boolean
}

const ProjectSlide: FC<projectProps> = (props) => {

    const horizontal =
        <div className="d-block d-flex flex-column">
            <div className="d-flex justify-content-center">

                <div className="carousel-text">
                    <h2>{props.name}</h2>

                    <p>{props.description}</p>
                </div>
                <div className="d-flex flex-column">
                    <Button className="project-btn" variant="contained" href={props.githubUrl} startIcon={<GitHubIcon sx={{ fontSize: 35 }} />} >
                        Repo
                    </Button>
                    {props.gPlayUrl && <Button className="project-btn" variant="outlined" href={props.gPlayUrl} >
                        <i className="fab fa-google-play"></i>
                    </Button>}
                    {props.appStoreUrl && <Button className="project-btn" variant="outlined" href={props.appStoreUrl} >
                        <i className="fab fa-app-store-ios"></i>
                    </Button>}
                    {props.windowsUrl && <Button className="project-btn" variant="outlined" href={props.windowsUrl} >
                        <i className="fab fa-windows"></i>
                    </Button>}
                    {props.macUrl && <Button className="project-btn" variant="outlined" href={props.macUrl} >
                        <i className="fab fa-apple"></i>
                    </Button>}


                </div>
            </div>
            <div className="img-div d-flex justify-content-center">
                <img className="horizontal-img" src={props.imageUrl} alt="" />
            </div>
        </div>

    const vertical = 
    <div className="d-block d-flex justify-content-between">
        <div>

            <div className="carousel-text">
                <h2>{props.name}</h2>

                <p>{props.description}</p>
            </div>
            <div>
                <Button className="project-btn" variant="contained" href={props.githubUrl} startIcon={<GitHubIcon sx={{ fontSize: 35 }} />} >
                    Repo
                </Button>
                {props.gPlayUrl && <Button className="project-btn" variant="outlined" href={props.gPlayUrl} >
                    <i className="fab fa-google-play"></i>
                </Button>}
                {props.appStoreUrl && <Button className="project-btn" variant="outlined" href={props.appStoreUrl} >
                    <i className="fab fa-app-store-ios"></i>
                </Button>}
                {props.windowsUrl && <Button className="project-btn" variant="outlined" href={props.windowsUrl} >
                    <i className="fab fa-windows"></i>
                </Button>}
                {props.macUrl && <Button className="project-btn" variant="outlined" href={props.macUrl} >
                    <i className="fab fa-apple"></i>
                </Button>}


            </div>
        </div>
        <div>
            <img className="vertical-img" src={props.imageUrl} alt="" />
        </div>
    </div>


    return (
        <div className={props.isActive ? "carousel-item active" : "carousel-item"}>
            {props.isHorizontal ? horizontal : vertical }
        </div>
    );
}

export default ProjectSlide;