import AnimationBackgroundWrapper from "./animationBackground.styled";

const AnimationBackground = () => {
  return (
    <AnimationBackgroundWrapper>
      <div className="container-fluid">
        <div className="background">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
        </div>
      </div>
    </AnimationBackgroundWrapper>
  );
};

export default AnimationBackground;
