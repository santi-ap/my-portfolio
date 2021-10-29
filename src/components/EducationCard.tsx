import React, { FC } from "react";
import Button from '@mui/material/Button';
import tecLogo from '../images/tec-logo.png'
// import '../styles.css'

interface EduCardProp {
    school: string,
    degree: string,
    date: string,
    country?: string,
    link?: string,
    schoolImg: typeof tecLogo,
    isLast?:boolean
}

const EducationCard: FC<EduCardProp> = (props) => {
    let cardClass: string = "col-sm-12 col-lg-4  d-flex justify-content-center";
    if(props.isLast){
        cardClass = cardClass + " col-md-12";
    }else{
        cardClass = cardClass + " col-md-6";
    }

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
                        <Button className="education-btn" variant="outlined" href={props.link} >
                            View Course
                        </Button>}

                </div>
            </div>
        </div>
    );
}

export default EducationCard;