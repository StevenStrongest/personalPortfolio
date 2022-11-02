import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

type mainWrapperProp = {
  children: React.ReactNode;
};

export const MainWrapper = (props: mainWrapperProp) => (
  <ReactFullpage
    //fullpage options
    /* Options here */
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={500}
    sectionsColor={["#FFFFFF", "#348899", "#F2AE72"]}
    navigation={true}
    slidesNavigation={true}
    controlArrows={false}
    render={({ state, fullpageApi }) => {
      const { children } = props;
      return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
    }}
  />
);
