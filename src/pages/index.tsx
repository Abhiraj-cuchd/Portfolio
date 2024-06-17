import Body from "@/components/Body/Body"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import { darkTheme } from "@/utils/Themes"
import styled, { ThemeProvider } from "styled-components"

const EntryPoint = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Body />
      
    </ThemeProvider>
  )
}

export default EntryPoint