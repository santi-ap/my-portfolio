import React, { FC, useState } from 'react';
import developerData from '../data.json'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';

interface HeaderProps {
    devData: typeof developerData
}

const Footer: FC<HeaderProps> = (props) => {

    const [date] = useState(new Date());

    // console.log(date.getFullYear());

    return (
        <div id="footer">
            <h1>
                Contact me!
            </h1>
            <div className="contact-div">

                <div className=" row">
                    <div className="col-sm-12 col-md-4">
                        <EmailIcon /> santi96151@gmail.com
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <PhoneIcon /> (506) 8566-2943
                    </div>
                    <div className="location d-flex align-items-center justify-content-center col-sm-12 col-md-4">
                        <RoomIcon/>San Jose, Costa Rica
                    </div>
                </div>

                <div className="socialDiv d-flex justify-content-center align-items-center">
                    <a href={props.devData.socialUrls.linkedInUrl}><LinkedInIcon sx={{ fontSize: 35 }} /></a>
                    <a href={props.devData.socialUrls.githubUrl}><GitHubIcon sx={{ fontSize: 35 }} /></a>
                    
                </div>
            </div>
            <div className="copy-right">
                © {date.getFullYear()} Santiago Alfonso
            </div>
        </div>
    );
}

export default Footer;