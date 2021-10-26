import React, { FC, useState } from 'react';
import developerData from '../data.json'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

interface HeaderProps {
    devData: typeof developerData
}

const Footer: FC<HeaderProps> = (props) => {

    const [date] = useState(new Date());

    // console.log(date.getFullYear());

    return (
        <div id="footer">
            <h1>
                Feel free to reach out
            </h1>

            <div className="socialDiv d-flex justify-content-evenly ">
                <a href={props.devData.socialUrls.linkedInUrl}><LinkedInIcon sx={{ fontSize: 35 }} /></a>
                <a href={props.devData.socialUrls.githubUrl}><GitHubIcon sx={{ fontSize: 35 }} /></a>
            </div>
            <div className="d-flex justify-content-evenly">
                <div>
                    <EmailIcon/> santi96151@gmail.com
                </div>
                <div>
                    <PhoneIcon/> (506) 8566-2943
                </div>
            </div>
            <div className="copy-right">
                © {date.getFullYear()} Santiago Alfonso
            </div>
        </div>
    );
}

export default Footer;