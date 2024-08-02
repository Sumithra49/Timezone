import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React from "react";
import styled from "styled-components";

const TimezoneSlider = ({ currentTime, updateTime }) => {
  const handleSliderChange = (value) => {
    const newTime = new Date(currentTime);
    newTime.setHours(value);
    updateTime(newTime);
  };

  return (
    <SliderContainer>
      <Slider
        min={0}
        max={23}
        value={currentTime.getHours()}
        onChange={handleSliderChange}
      />
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  margin: 20px 0;
`;

export default TimezoneSlider;
