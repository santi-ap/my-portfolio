import React, { FC } from "react";
import Skill from "./Skill";
import jsIcon from '../images/javascript-icon.png'
import cssIcon from '../images/css-icon.png'
import htmlIcon from '../images/html5-icon.png'
import reactIcon from '../images/react-icon.png'



const SkillsCard: FC = () => {

    return (
        <div id="skillsCard" className="">
            <div className="row">

                
                <div className="col-sm-12 col-md-6 col-lg-4  d-flex justify-content-center">
                    <div className="card">
                        <h5 className="my-card-header">Front End</h5>
                        <div className="card-body d-flex justify-content-evenly align-items-center ">
                            <Skill title="JavaScript" icon={jsIcon}/>
                            <Skill title="CSS" icon={cssIcon}/>
                            <Skill title="HTML" icon={htmlIcon}/>
                            <Skill title="React" icon={reactIcon}/>
                          
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4  d-flex justify-content-center">
                    <div className="card">
                        <h5 className="my-card-header">Back End</h5>
                        <div className="card-body d-flex justify-content-evenly align-items-center">
                            <Skill title="NodeJS" icon={htmlIcon}/>
                            <Skill title="TypeScript" icon={reactIcon}/>
                            <Skill title="Java" icon={jsIcon}/>
                            <Skill title="C#" icon={cssIcon}/>
                            
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4  d-flex justify-content-center">
                    <div className="card">
                        <h5 className="my-card-header">Database</h5>
                        <div className="card-body d-flex justify-content-evenly align-items-center">
                            <Skill title="MongoDB" icon={jsIcon}/>
                            <Skill title="MySQL" icon={cssIcon}/>
                            <Skill title="PLSQL" icon={htmlIcon}/>
                            <Skill title="PostgreSQL" icon={reactIcon}/>
                            
                        </div>
                    </div>
                </div>


                
                <div className="col-sm-12 col-md-6 col-lg-4  d-flex justify-content-center">
                    <div className="card">
                        <h5 className="my-card-header">Communication Standards</h5>
                        <div className="card-body d-flex justify-content-evenly align-items-center">
                            <Skill title="JSON" icon={jsIcon}/>
                            <Skill title="Terraform" icon={cssIcon}/>
                            <Skill title="REST API" icon={htmlIcon}/>
                            
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4  d-flex justify-content-center">
                    <div className="card">
                        <h5 className="my-card-header">Tools</h5>
                        <div className="card-body d-flex justify-content-evenly align-items-center flex-wrap">
                            <Skill title="GitHub" icon={jsIcon}/>
                            <Skill title="Azure" icon={cssIcon}/>
                            <Skill title="AWS" icon={htmlIcon}/>
                            <Skill title="Google Cloud" icon={reactIcon}/>
                            <Skill title="Taiga" icon={reactIcon}/>
                            <Skill title="Jira" icon={reactIcon}/>
                            <Skill title="Unity3D" icon={reactIcon}/>
                            <Skill title="Postman" icon={reactIcon}/>


                            
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                    <div className="card">
                        <h5 className="my-card-header">Agile Methodologies</h5>
                        <div className="card-body d-flex justify-content-evenly align-items-center">
                            <Skill title="Scrum" icon={jsIcon}/>
                            <Skill title="Kanban" icon={cssIcon}/>
                            
                        </div>
                    </div>
                </div>


            </div>

        </div>

    );
}

export default SkillsCard;
