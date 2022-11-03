import styled from "styled-components";

const surfaceColor = "#fff", curve= 40;

const SkillItemWrapper = styled.li`
  min-height: 320px;
  .card {
    position: relative;
    display: block;
    height: 100%;
    border-radius: calc(${curve} * 1px);
    overflow: hidden;
    text-decoration: none;
  }

  .card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    border-radius: calc(${curve} * 1px);
    background-color: ${surfaceColor};
    transform: translateY(100%);
    transition: 0.2s ease-in-out;
  }

  .card:hover .card__overlay {
    transform: translateY(0);
  }

  .card__header {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 2em;
    border-radius: calc(${curve} * 1px) 0 0 0;
    background-color: ${surfaceColor};
    transform: translateY(-100%);
    transition: 0.2s ease-in-out;
  }

  .card__arc {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 100%;
    right: 0;
    z-index: 1;
  }

  .card__arc path {
    fill: ${surfaceColor};
    d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
  }

  .card:hover .card__header {
    transform: translateY(0);
  }

  .card__thumb {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .card__title {
    font-size: 1.6em;
    margin: 0 0 0.3em;
    color: #6a515e;
  }

  .card__tagline {
    display: block;
    margin: 1.4em 0;
    font-family: "MockFlowFont";
    font-size: 0.8em;
    color: #d7bdca;
  }

  .card__status {
    font-size: 1.4em;
    color: #d7bdca;
  }

  .card__description {
    padding: 0 2em 2em;
    margin: 0;
    color: #000000;
    font-family: "MockFlowFont";
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`;

export default SkillItemWrapper;
