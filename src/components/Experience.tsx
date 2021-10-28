import React, { FC } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "../styles.css"
import ExperienceInfo from './ExperienceInfo';



const Experience: FC = () => {




    return (
        <div id="experience">
            <h1>
                Work Experience
            </h1>


            <Timeline className="time-line" position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        2020 – Present
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot className="time-line">
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <ExperienceInfo
                            position="SOFTWARE SUPPORT ENGINEER"
                            company="Tek Experts"
                            description="I act as the primary technical contact while delivering advanced technical troubleshooting and problem solving solutions for corporate customers for the Azure Portal, JSON templates, REST API calls and web services. When necessary, I will collaborate with subject matter experts and escalation managers when additional support is needed. It’s always important to manage critical issues by setting customer expectations, devise and implement action plans and professionally communicate to all parties involved. Additionally, it was expected of me to build on my knowledge by seeking supplemental training to improve performance and develop specialization."
                            divSide="right"
                        />

                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        2017 – 2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <ExperienceInfo
                            position="EXECUTIVE TECH SUPPORT RELATIONS"
                            company="Amazon"
                            description="I was tasked with assisting customers who’ve escalated their tech support related concern to Amazon’s CEO, Jeff Bezos. This tends to happen when escalating is their last resort. And as such, I worked with several high level stake holders to ensure that our customer’s concerns were handled swiftly and effectively. These may also include legal and PR risks which need to be handled very delicately and professionally."
                            divSide="left"
                        />
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot >
                            <AccessTimeIcon />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
            </Timeline>



        </div>
    );
}

export default Experience;