import AnimationBackground from "../AnimationBackground";
import Container from "../Container";
import Heading from "../Heading";
import SkillWrapper from "./skill.styled";
import SkillItem from "./SkillItem";
import reactIcon from "../../assets/images/react-logo.webp";
import nextIcon from "../../assets/images/nextjs-logo.png";
import threeIcon from "../../assets/images/threejs-logo.png";
import reactThumbail from "../../assets/images/react-thumbail.jpg";
import nextThumbail from "../../assets/images/next-thumbail.jpg";
import threeThumbail from "../../assets/images/three-thumbail.png";

const SkillSection = () => {
  return (
    <SkillWrapper className="section">
      <Container>
        <Heading title="Skill" description="My experience and skills in work" />
        <ul className="cards">
          <SkillItem
            title="React js"
            experience="1,5 year experience"
            description="Have ES6 skills, master basic knowledge about props, state, lifecycle. Knowledge of typescript, redux, redux-toolkit"
            logo={reactIcon}
            thumbail={reactThumbail}
          />
          <SkillItem
            title="Next js"
            experience="1,5 year experience"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis"
            logo={nextIcon}
            thumbail={nextThumbail}
          />
          <SkillItem
            title="Three js"
            experience="1 year experience"
            description="Having more than 1 year of experience working with webGL, building models on canvas, understanding screen, light, camera, texture,..."
            logo={threeIcon}
            thumbail={threeThumbail}
          />
        </ul>
      </Container>
    </SkillWrapper>
  );
};

export default SkillSection;
