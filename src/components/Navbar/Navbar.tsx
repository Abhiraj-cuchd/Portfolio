import React, { useState } from "react";
import {
  ButtonContainer,
  GithubButton,
  MobileIcon,
  MobileMenu,
  Nav,
  NavbarContainer,
  NavItems,
  NavLogo,
} from "./navStyle";
import { useRouter } from "next/router";
import Link from "next/link";
import { Bio } from "@/constants/Bio";
import { MenuRounded } from "@mui/icons-material";
import { useTheme } from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const theme = useTheme();

  console.log(isOpen, "isOpen");

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo onClick={() => router.push("/")}>{`< Abhiraj.dev />`}</NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>
        <NavItems>
          <Link className="navlink" href="#About">
            About
          </Link>
          <Link className="navlink" href="#Skills">
            Skills
          </Link>
          <Link className="navlink" href="#Experience">
            Experience
          </Link>
          <Link className="navlink" href="#Projects">
            Projects
          </Link>
          <Link className="navlink" href="#Education">
            Education
          </Link>
        </NavItems>
        {isOpen && (
          // @ts-ignore
          <MobileMenu isOpen={isOpen}>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="navlink"
              href="#About"
            >
              About
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="navlink"
              href="#Skills"
            >
              Skills
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="navlink"
              href="#Experience"
            >
              Experience
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="navlink"
              href="#Projects"
            >
              Projects
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className="navlink"
              href="#Education"
            >
              Education
            </Link>
            <GithubButton
              href={Bio.github}
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
