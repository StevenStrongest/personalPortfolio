import SkillItemWrapper from "./skillItem";
import Image, { StaticImageData } from "next/image";


type SkillItemProps = {
  title: string;
  experience: string;
  description: string;
  logo: StaticImageData;
  thumbail: StaticImageData;
};

const SkillItem = (props: SkillItemProps) => {
  const {
    title = "title",
    experience = "1 year experience",
    description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis`,
    logo,
    thumbail
  } = props;
  return (
    <SkillItemWrapper>
      <a href="#" className="card">
        <Image
          src={thumbail}
          className="card__image"
          alt=""
        />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>

            <Image
              className="card__thumb"
              src={logo}
              alt=""
            />

            <div className="card__header-text">
              <h3 className="card__title">{title}</h3>
              <span className="card__status">{experience}</span>
            </div>
          </div>
          <p className="card__description">{description}</p>
        </div>
      </a>
    </SkillItemWrapper>
  );
};

export default SkillItem;
