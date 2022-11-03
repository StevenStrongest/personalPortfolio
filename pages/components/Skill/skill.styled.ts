import styled from "styled-components";

const SkillWrapper = styled.div`
  justify-content: flex-start;
  background: linear-gradient(132deg, #fc415a, #591bc5, #212335);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  animation-delay: 5s;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0px;

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 8rem 5vw;
    padding: 0;
    list-style-type: none;
  }

  /* Animate Background*/
  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default SkillWrapper;
