import ScrollButtonWrapper from "./scrollButton.styled";

const ScrollButton = () => {
  return (
    <ScrollButtonWrapper>
      <div className="container">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <span className="text">Scroll down</span>
      </div>
    </ScrollButtonWrapper>
  );
};

export default ScrollButton;