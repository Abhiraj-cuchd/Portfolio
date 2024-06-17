import { useState } from "react";
import { CardContainer, Container, Desc, Divider, Title, ToggleButtonGroup, Wrapper } from './projectStyles'
import { projects } from "@/constants/Bio";
import { ToggleButton } from "@mui/material";
import ProjectCard from "@/components/Cards/ProjectCard/ProjectCard";

const Projects = () => {
    const [toggle, setToggle] = useState("all");
    return (
        <Container id="Projects">
            <Wrapper>
                {/* <HeroBg>
                    <StyledStarsCanvas />
                </HeroBg> */}
                <Title>Projects</Title>
                <Desc
                    style={{
                        marginBottom: "40px",
                    }}
                >
                    I have worked on a wide range of projects. From web apps to android
                    apps. Here are some of my projects.
                </Desc>

                <ToggleButtonGroup>
                    <ToggleButton
                        // color="primary"
                        // active={toggle === "all"}
                        value="all"
                        onClick={() => setToggle("all")}
                    >
                        <p style={{ color: "white" }}>ALL</p>
                    </ToggleButton>
                    <Divider />
                    <ToggleButton
                        // color="primary"
                        // active={toggle === "web app"}
                        value="web app"
                        onClick={() => setToggle("web app")}
                    >
                        <p style={{ color: "white" }}>UI/UX</p>
                    </ToggleButton>
                    <Divider />
                    <ToggleButton
                        // color="primary"
                        // active={toggle === "android app"}
                        value="android app"
                        onClick={() => setToggle("android app")}
                    >
                        <p style={{ color: "white" }}>FULL STACK WEB</p>
                    </ToggleButton>
                    <Divider />
                    <ToggleButton
                        // color="primary"
                        // exclusive
                        // aria-label="platform"
                        // active={toggle === "machine learning"}
                        value="machine learning"
                        onClick={() => setToggle("machine learning")}
                    >
                        <p style={{ color: "white" }}>APIS</p>
                    </ToggleButton>
                    <Divider />
                    <ToggleButton
                        // color="primary"
                        // exclusive
                        // aria-label="platform"
                        // active={toggle === "machine learning"}
                        value="machine learning"
                        onClick={() => setToggle("machine learning")}
                    >
                        <p style={{ color: "white" }}>MOBILE DEVELOPMENT</p>
                    </ToggleButton>
                </ToggleButtonGroup>

                <CardContainer>
                    {toggle === "all" &&
                        projects.map((project: any, index: any) => <ProjectCard project={project} key={index} />)}
                    {projects
                        .filter((item) => item.category === toggle)
                        .map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;