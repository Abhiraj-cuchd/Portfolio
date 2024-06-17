import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ContactButton, ContactForm, ContactInput, ContactInputMessage, ContactTitle, Container, Desc, Title, Wrapper } from "./constactStyles";
import { HeroBg } from "../HeroSection/heroStyles";
import StyledStarsCanvas from "@/components/canvas/Stars/Stars";

const Contact = () => {
    const form: any = useRef();
    const handelSubmit = (e: any) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_tox7kqs",
                "template_nv7k7mj",
                form.current,
                "SybVGsYS52j2TfLbi"
            )
            .then(
                (result) => {
                    alert("Message Sent");
                    form.current.result();
                },
                (error) => {
                    alert(error);
                }
            );
    };
    return (
        <Container id="Education">
            <Wrapper>
                {/* <HeroBg>
                    <StyledStarsCanvas />
                </HeroBg> */}
                <Title>Contact</Title>
                <Desc
                    style={{
                        marginBottom: "40px",
                    }}
                >
                    Feel free to reach out to me for any questions or opportunities!
                </Desc>
                <ContactForm onSubmit={handelSubmit}>
                    <ContactTitle>Email Me 🚀</ContactTitle>
                    <ContactInput placeholder="Your Email" name="from_email" />
                    <ContactInput placeholder="Your Name" name="from_name" />
                    <ContactInput placeholder="Subject" name="subject" />
                    <ContactInputMessage placeholder="Message" name="message" rows={4} />
                    <ContactButton type="submit" value="Send" />
                </ContactForm>
            </Wrapper>
        </Container>
    );
};

export default Contact;