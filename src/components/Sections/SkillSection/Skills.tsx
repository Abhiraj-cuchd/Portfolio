import React from 'react'
import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from './skillStyles'
import { skills } from '@/constants/Bio'
import { Tilt } from 'react-tilt'
import { HeroBg } from '../HeroSection/heroStyles'
import StyledStarsCanvas from '@/components/canvas/Stars/Stars'

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        {/* <HeroBg>
          <StyledStarsCanvas />
        </HeroBg> */}
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been proficient.</Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <Tilt>
                <Skill>
                  <SkillTitle>{skill.title}</SkillTitle>
                  <SkillList>{
                    skill.skills.map((item: any, indexi: any) => (
                      <SkillItem key={indexi}>
                        <SkillImage src={item.image} />
                        {item.name}
                      </SkillItem>
                    ))
                  }</SkillList>
                </Skill>
              </Tilt>
            </React.Fragment>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills