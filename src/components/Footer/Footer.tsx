
import {
    FacebookRounded,
    Instagram,
    LinkedIn,
    Twitter,
} from "@mui/icons-material";
import { Copyright, FooterContainer, FooterWrapper, Logo, Nav, NavLink, SocialMediaIcon, SocialMediaIcons } from "./footerStyles";
import { Bio } from "@/constants/Bio";
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Abhiraj Ghosh</Logo>
                <Nav>
                    <NavLink href="#About">About</NavLink>
                    <NavLink href="#Skills">Skills</NavLink>
                    <NavLink href="#Experience">Experience</NavLink>
                    <NavLink href="#Projects">Projects</NavLink>
                    <NavLink href="#Education">Education</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.facebook} target="display">
                        <FacebookRounded />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.twitter} target="display">
                        <Twitter />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.linkedin} target="display">
                        <LinkedIn />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.insta} target="display">
                        <Instagram />
                    </SocialMediaIcon>
                </SocialMediaIcons>
                <Copyright>&copy; 2024 Abhiraj Ghosh. All rights reserved.</Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;