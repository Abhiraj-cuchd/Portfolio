import EducationCard from "@/components/Cards/EductionCard/EducationCard";
import { Container, Desc, Title, Wrapper } from "./eduSectionStyles";
import { education } from "@/constants/Bio";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EarthCanvas from "@/components/canvas/Earth/Earth";
import StyledStarsCanvas from "@/components/canvas/Stars/Stars";
import { HeroBg } from "../HeroSection/heroStyles";

const Education = () => {
    return (
        <Container id="Education">

            <Wrapper>
                <HeroBg>
                    <StyledStarsCanvas />
                </HeroBg>

                <Title>Education</Title>
                <Desc
                    style={{
                        marginBottom: "40px",
                    }}
                >
                    My education has been a journey of self-discovery and growth. My
                    educational details are as follows.
                </Desc>

                <VerticalTimeline>
                    {education.map((education: any, index: any) => (
                        <EducationCard key={`education-${index}`} education={education} />
                    ))}
                </VerticalTimeline>
                {/* <EarthCanvas /> */}
            </Wrapper>
        </Container>
    );
};

export default Education;