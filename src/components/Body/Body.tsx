import React from 'react'
import { BodyContainer } from './bodyStyle';
import HeroSection from '../Sections/HeroSection/HeroSection';
import Skills from '../Sections/SkillSection/Skills';
import WorkEx from '../Sections/WorkExSection/WorkEx';
import Education from '../Sections/EducationSection/EducationSection';
import Projects from '../Sections/ProjectSection/Projects';
import Contact from '../Sections/ContactSection/Contact';
import Footer from '../Footer/Footer';


const Body = () => {
  return (
    <BodyContainer>
      <HeroSection />
      <Skills />
      <WorkEx />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </BodyContainer>
  )
}

export default Body