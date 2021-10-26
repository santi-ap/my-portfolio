import React, { FC } from "react";

interface experienceProps{
    position:string,
    company:string,
    description:string,
    divSide:string
}

const ExperienceInfo: FC<experienceProps> = (props) => {
    const divClass = "experience-div-"+props.divSide;
    return (
        <div className={divClass}>
            <h3>
                {props.position}
            </h3>
            <h4>
                {props.company}
            </h4>
            <p>
                {props.description}
            </p>
        </div>
    )
}

export default ExperienceInfo;