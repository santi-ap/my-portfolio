import React, { FC } from "react";
import Skill from "./Skill";
import jsIcon from '../images/javascript-icon.png'
import cssIcon from '../images/css-icon.png'
import htmlIcon from '../images/html5-icon.png'
import reactIcon from '../images/react-icon.png'
import bootstrapIcon from '../images/bootstrap-icon.png'
import materialUiIcon from '../images/materialUi-icon.png'
import nodeIcon from '../images/node-icon.png'
import tsIcon from '../images/ts-icon.png'
import javaIcon from '../images/java-icon.png'
import csIcon from '../images/cs-icon.png'
import mongoIcon from '../images/mongo-icon.png'
import mySqlIcon from '../images/mySql-icon.png'
import plSql from '../images/plSql-icon.png'
import postgreSql from '../images/postgreSql-icon.png'
import jsonIcon from '../images/json-icon.png'
import terraformIcon from '../images/terraform-icon.png'
import restApiIcon from '../images/restApi-icon.png'
import githubIcon from '../images/github-icon.png'
import azureIcon from '../images/azure-icon.png'
import awsIcon from '../images/aws-icon.png'
import gCloudIcon from '../images/gCloud-icon.png'
import taigaIcon from '../images/taigo-icon.png'
import jiraIcon from '../images/jira-icon.png'
import unityIcon from '../images/unity-icon.png'
import postmanIcon from '../images/postman-icon.png'
import scrumIcon from '../images/scrum-icon.png'
import trelloIcon from '../images/trello-icon.svg'
import expressIcon from '../images/express-icon.png'





const SkillsCard: FC = () => {

    const cardClass: string = "col-sm-12 col-md-6 col-lg-4  d-flex justify-content-center";
    const innerCardClass: string = "card-body d-flex justify-content-evenly align-items-center flex-wrap";

    return (
        <div id="skillsCard" className="">
            <div className="row">

                
                <div className={cardClass}>
                    <div className="card">
                        <h5 className="my-card-header">Front End</h5>
                        <div className={innerCardClass}>
                            <Skill title="JavaScript" icon={jsIcon}/>
                            <Skill title="CSS" icon={cssIcon}/>
                            <Skill title="HTML" icon={htmlIcon}/>
                            <Skill title="React" icon={reactIcon}/>
                            <Skill title="Bootstrap" icon={bootstrapIcon}/>
                            <Skill title="Material UI" icon={materialUiIcon}/>
                          
                        </div>
                    </div>
                </div>

                <div className={cardClass}>
                    <div className="card">
                        <h5 className="my-card-header">Back End</h5>
                        <div className={innerCardClass}>
                            <Skill title="NodeJS" icon={nodeIcon}/>
                            <Skill title="ExpressJS" icon={expressIcon}/>
                            <Skill title="TypeScript" icon={tsIcon}/>
                            <Skill title="Java" icon={javaIcon}/>
                            <Skill title="C#" icon={csIcon}/>
                            
                        </div>
                    </div>
                </div>

                <div className={cardClass}>
                    <div className="card">
                        <h5 className="my-card-header">Database</h5>
                        <div className={innerCardClass}>
                            <Skill title="MongoDB" icon={mongoIcon}/>
                            <Skill title="MySQL" icon={mySqlIcon}/>
                            <Skill title="PLSQL" icon={plSql}/>
                            <Skill title="PostgreSQL" icon={postgreSql}/>
                            
                        </div>
                    </div>
                </div>


                
                <div className={cardClass}>
                    <div className="card">
                        <h5 className="my-card-header">Communication Standards</h5>
                        <div className={innerCardClass}>
                            <Skill title="JSON" icon={jsonIcon}/>
                            <Skill title="Terraform" icon={terraformIcon}/>
                            <Skill title="REST API" icon={restApiIcon}/>
                            
                        </div>
                    </div>
                </div>

                <div className={cardClass}>
                    <div className="card">
                        <h5 className="my-card-header">Tools & Services</h5>
                        <div className={innerCardClass}>
                            <Skill title="GitHub" icon={githubIcon}/>
                            <Skill title="Azure" icon={azureIcon}/>
                            <Skill title="AWS" icon={awsIcon}/>
                            <Skill title="Google Cloud" icon={gCloudIcon}/>
                            <Skill title="Taiga" icon={taigaIcon}/>
                            <Skill title="Jira" icon={jiraIcon}/>
                            <Skill title="Unity3D" icon={unityIcon}/>
                            <Skill title="Postman" icon={postmanIcon}/>


                            
                        </div>
                    </div>
                </div>

                <div className={cardClass}>
                    <div className="card">
                        <h5 className="my-card-header">Agile Methodologies</h5>
                        <div className={innerCardClass}>
                            <Skill title="Scrum" icon={scrumIcon}/>
                            <Skill title="Kanban" icon={trelloIcon}/>
                            
                        </div>
                    </div>
                </div>


            </div>

        </div>

    );
}

export default SkillsCard;
