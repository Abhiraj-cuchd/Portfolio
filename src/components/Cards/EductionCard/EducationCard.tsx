import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Body, Date, Degree, Description, Grade, Image, School, Span, Top } from "./eduStyles";
const EducationCard = ({ education }: { education: any }) => {
    return (
        <VerticalTimelineElement
            icon={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    width="100%"
                    height="100%"
                    alt={education?.school}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                    src={education?.img}
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
            date={education?.date}
        >
            <Top>
                <Image src={education?.img} alt="education" />
                <Body>
                    <School>{education?.school}</School>
                    <Degree>{education?.degree}</Degree>
                    <Date>{education?.date}</Date>
                </Body>
            </Top>
            <Grade>
                <b>Grade : </b>
                {education?.grade}
            </Grade>
            <Description>
                {education?.desc && <Span>{education.desc}</Span>}
            </Description>
        </VerticalTimelineElement>
    );
};

export default EducationCard;