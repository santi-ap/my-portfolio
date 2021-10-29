import React, { FC } from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectSlide from './ProjectSlide';
import elDorado from '../images/el-dorado.png'
import myPortfolio from '../images/my-portfolio3.png'

const Projects: FC = () => {

    return (
        <div id="projects">
            <h1>
                Projects
            </h1>
            {/* data-bs-interval="false" */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"  >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <ProjectSlide
                        name="My Portfolio"
                        description="This is my developer portfolio that I created using React with TypeScript along with other front end libraries like Bootstrap and Material UI to showcase a bit of my web developement skills."
                        imageUrl={myPortfolio}
                        githubUrl="https://github.com/santi-ap/my-portfolio"
                        isActive={true}
                        isHorizontal={true}
                    />

                    <ProjectSlide
                        name="Astronaughty"
                        description="A mobile game I designed and developed where the player is a little astronaut helmet hopping from planet to planet to reach the highest score. I developed it using Unity with C#. You can find find the download links below if you're interested in checking it out."
                        imageUrl="https://play-lh.googleusercontent.com/4rzQ3AE5CrpywrYes7FNwkMDmJSMc_R2NJWm61c88t70-WGm4qMCxtcW7gYi2zCkyYc=w2944-h2128-rw"
                        githubUrl="https://github.com/santi-ap/astronaughty"
                        gPlayUrl="https://play.google.com/store/apps/details?id=com.WhiteCanvas.Astronaughty"
                        appStoreUrl="https://apps.apple.com/cr/app/astronaughty-planet-hopper/id1548346029?l=en"
                        isHorizontal={false}

                    />

                    <ProjectSlide
                        name="El Dorado"
                        description="A multiplayer desktop game I designed and developed where you have to work as a team to survive and find your way through the map to reach the final temple. I developed it using Unity with C#. You can find find the download links below if you're interested in checking it out."
                        imageUrl={elDorado}
                        githubUrl="https://github.com/santi-ap/el-dorado"
                        windowsUrl="https://developer.cloud.unity3d.com/share/share.html?shareId=b1LNMThmtP"
                        macUrl="https://developer.cloud.unity3d.com/share/share.html?shareId=WymxepnQFw"
                        isHorizontal={true}
                    />


                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Projects;