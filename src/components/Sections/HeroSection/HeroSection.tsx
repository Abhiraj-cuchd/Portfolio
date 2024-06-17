import React from 'react'
import { HeroBg, HeroContainer, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, Img, ResumeButton, Span, SubTitle, TextLoop, Title } from './heroStyles';
import { Bio } from '@/constants/Bio';
import Typewriter from 'typewriter-effect';
import MyImage from '../../../img/prof.jpeg';
import HeroBgAnimation from '@/components/animations';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { headContainerAnimation, headContentAnimation } from '@/utils/motion';
import StyledStarCanvas from '@/components/canvas/Stars/Stars';




const HeroSection = () => {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
          <StyledStarCanvas />
          <HeroBgAnimation />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <Title>
                Hi, I am <br /> {Bio.name}
              </Title>
              <TextLoop>
                I am a
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                      delay: 20
                    }}

                  />
                </Span>
              </TextLoop>
              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>
              <ResumeButton>Check CV</ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src={MyImage.src} alt='Abhiraj Ghosh' />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  )
}

export default HeroSection