import React from "react";
import { useTheme } from "@mui/material/styles";
// @ts-ignore
import SwipeableViews from "react-swipeable-views";
// @ts-ignore
import { autoPlay } from "react-swipeable-views-utils";
import Box from "./Box";
import data from "../data/data";
// @ts-ignore
import styles from "../styles/Home.module.scss";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const SwipableSection = () => {
  return (
    <section
      style={{
        padding: "0 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      
     <SwipeableTextMobileStepper /> 
    </section>
  );
};

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <AutoPlaySwipeableViews
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {data.nft_data.map((item, index) => (
        <>
          {Math.abs(activeStep - index) <= 2 ? (

           <Box {...item} key={item.desc + index}/>
          ) : null}
        </>
      ))}
    </AutoPlaySwipeableViews>
  );
}




export default SwipableSection;
