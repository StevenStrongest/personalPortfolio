import styled from "styled-components";

const HeadingWrapper = styled.div`
  .heading h1 {
    text-align: center;
    font-size: 50px;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 1px;
    font-family: "Playfair Display", serif;
    font-weight: 400;
  }
  .heading h1 span {
    margin-top: 5px;
    font-size: 15px;
    color: #ccc;
    word-spacing: 1px;
    font-weight: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: "Raleway", sans-serif;
    font-weight: 500;

    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-template-rows: 27px 0;
    grid-gap: 20px;
    align-items: center;
  }

  .heading h1 span:after,
  .heading h1 span:before {
    content: " ";
    display: block;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    height: 5px;
  }
`;

export default HeadingWrapper;
