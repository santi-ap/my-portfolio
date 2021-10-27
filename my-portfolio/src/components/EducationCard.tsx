import React, { FC } from "react";
import Button from '@mui/material/Button';
import tecLogo from '../images/tec-logo.png'
// import '../styles.css'

interface EduCardProp {
    school: string,
    degree: string,
    date: string,
    country?: string,
    link?: string
    schoolImg: typeof tecLogo
}

const EducationCard: FC<EduCardProp> = (props) => {
    const cardClass: string = "col-sm-12 col-md-6 col-lg-4  d-flex justify-content-center";


    return (
        <div className={cardClass}>
            <div className="card education-card">
                <div>
                    <div className="education-school">

                {/* <h4 >{props.school}</h4> */}
                <img src={props.schoolImg} alt="" />
                    </div>

                </div>
                <div className="card-body ">
                    <h5 className="">{props.degree}</h5>
                    <div className="education-date">{props.date}</div>
                    {props.country && <h6>{props.country}</h6>}
                    
                    {props.link &&
                        <Button className="education-btn" variant="contained" href={props.link} >
                            View Course
                        </Button>}

                </div>
            </div>
        </div>
    );
}

export default EducationCard;