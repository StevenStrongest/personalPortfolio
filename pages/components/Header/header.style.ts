import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  .logo {
    display: flex;
    img {
      width: 100%;
      border-radius: 50%;
    }
    p {
      margin-left: 10px;
    }
  }

  .social {
    display: flex;
    align-items: center;
    svg {
      margin: 0 10px;
      width: 50px;
      fill: #ffffff;
    }
  }
`;

export default HeaderWrapper;
