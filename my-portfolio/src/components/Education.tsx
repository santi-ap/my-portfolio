import React, { FC } from 'react';
import EducationCard from './EducationCard';
import tecLogo from '../images/tec-logo.png'
import ulatinaLogo from '../images/ulatina-logo.png'
import udemyLogo from '../images/udemy-logo.png'


const Education: FC = () => {

    const cardClass: string = "col-sm-12 col-md-6 col-lg-4  d-flex justify-content-center";


    return (
        <div id="education">
            <h1>

                Education
            </h1>

            <div className="row">
                <EducationCard
                    school="Udemy"
                    degree="Web Development"
                    date="2021"
                    link="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
                    schoolImg={udemyLogo}
                />

                <EducationCard
                    school="Ulatina"
                    degree="BACHELOR’S SOFTWARE ENGINEERING"
                    date="2018 - Present"
                    country="Costa Rica"
                    schoolImg={ulatinaLogo}
                />

                <EducationCard
                    school="TEC"
                    degree="BACHELOR’S ELECTRONICS ENGINEERING"
                    date="2014 - Incomplete"
                    country="Costa Rica"
                    schoolImg={tecLogo}
                />
                
            </div>
        </div>
    );
}

export default Education;