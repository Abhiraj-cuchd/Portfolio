import React from 'react'
import { Container, Wrapper, Title, Desc } from './workexStyles'
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from '@/constants/Bio';
import ExperienceCard from '@/components/Cards/ExperienceCard/ExperienceCard';
import { HeroBg } from '../HeroSection/heroStyles';
import StyledStarsCanvas from '@/components/canvas/Stars/Stars';

const WorkEx = () => {
    return (
        <Container id="Experience">
            <HeroBg>
                <StyledStarsCanvas />
            </HeroBg>
            <Wrapper>

                <Title>Work Experience</Title>
                <Desc>My work experience as a Software Engineer and working Companies and Projects.</Desc>
            </Wrapper>
            <VerticalTimeline>
                {experiences.map((experience: any, index: any) => (
                    <ExperienceCard
                        key={`experience-${index}`}
                        experience={experience}
                    />
                ))}
            </VerticalTimeline>
        </Container>
    )
}

export default WorkEx