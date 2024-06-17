import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Top, Body, Image, Role, Company, Date, Description, Span, Skills, ItemWrapper, Skill, } from './exCardStyles';

const ExperienceCard = ({ experience }: { experience: any }) => {
    return (
        <VerticalTimelineElement
            icon={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    width="100%"
                    height="100%"
                    alt={experience?.company}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                    src={experience?.img}
                />
            }
            contentStyle={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "#1d1836",
                color: "#fff",
                boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
                backgroundColor: "rgba(17, 25, 40, 0.83)",
                border: "1px solid rgba(255, 255, 255, 0.125)",
                borderRadius: "6px",
            }}
            contentArrowStyle={{
                borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
            }}
            date={experience?.date}
        >
            <Top>
                <Image src={experience?.img} alt="exp" />
                <Body>
                    <Role>{experience?.role}</Role>
                    <Company>{experience?.company}</Company>
                    <Date>{experience?.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc && <Span>{experience.desc}</Span>}
                {experience?.skills && (
                    <>
                        <br />
                        <Skills>
                            <b>Skills</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill: any, index: any) => (
                                    <Skill key={index}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                )}
            </Description>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;