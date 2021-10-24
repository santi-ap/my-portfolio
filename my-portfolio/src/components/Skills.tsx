import React, { FC } from 'react';
import SkillsCard from './SkillsCard';


const Skills: FC = () => {

    return (
        <div id="skills">
            <h1>My Skills</h1>
            Java, JavaScript, C#, React, React Native, HTML, CSS, MySQL, MongoDB, PLSQL, PostgreSQL, NoSQL Familiar with GitHub, AWS, Azure, Google Cloud, Jira, Terraform, JSON, Rest API, Unity3D
            Familiar with UML & entity relationship modeling and with Agile Methodologies such as SCRUM & KANBAN.
            <SkillsCard/>
            
        </div>
    );
}

export default Skills;