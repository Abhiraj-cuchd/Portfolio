import { Tilt } from "react-tilt";
import { Avatar, Button, Card, Date, Description, Details, Image, Members, Tags, Title } from "./projCardStyles";

const ProjectCard = ({ project }: { project: any }) => {
    return (
        <Tilt>
            <Card>
                <Image src={project.image} alt="project" />
                <Tags></Tags>
                <Details>
                    <Title>{project.title}</Title>
                    <Date>{project.date}</Date>
                    <Description>{project.description}</Description>
                </Details>
                <Members>
                    {project.member?.map((member: any, index: any) => (
                        <Avatar key={index} src={member.img} />
                    ))}
                </Members>
                <Button href={project.github} target="_blank">
                    View Code
                </Button>
            </Card>
        </Tilt>

    );
};

export default ProjectCard;