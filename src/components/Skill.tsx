import React, { FC } from "react";


interface skillProps{
    title: string,
    icon?: any
}

const Skill: FC<skillProps> = (props) => {
    return (
        <div id="skill" >
            <div className="d-flex justify-content-center">
                <div className="align-items-center d-flex justify-content-center" >
                    <img src={props.icon} alt="" />
                </div>
            </div>
            <p>
                {props.title}
            </p>
        </div>

    );
}

export default Skill;