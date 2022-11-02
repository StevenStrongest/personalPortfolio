import Image from "next/image";
import avatar from "../../assets/images/avatar.jpg";
import AnimationBackground from "../AnimationBackground";
import Container from "../Container";
import Header from "../Header";
import ScrollButton from "../ScrollButton";
import AboutWrapper from "./about.styled";
const AboutSection = () => {
  return (
    <AboutWrapper className="section">
      <AnimationBackground />
      <Container>
        <Header />
        <div className="content">
          <div className="intro-self">
            <h1 className="title">
              Hello, My name is <br />
              Pham Duc Manh
            </h1>
            <h1>I'm a Web Develop</h1>
            <p>
              I'm a front-end web develop. I can provide clean code and pixel
              perfect design. I also make the website more & more interative
              with meb animations. I can provide clean code and pixel perfect
              design. I also make the website more & more interative with meb
              animations. A responsive design make your website accessible to
              all users, regardless of their device
            </p>
          </div>
          <div className="avatar">
            <Image src={avatar} alt="avatar" />
          </div>
        </div>
      </Container>
      <ScrollButton />
    </AboutWrapper>
  );
};

export default AboutSection;
