// src/App.js
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import TimezoneList from "./components/TimezoneList";
import TimezoneSlider from "./components/TimezoneSlider";
import Toolbar from "./components/Toolbar";
import { darkTheme, lightTheme } from "./themes";

const App = () => {
  const [timezones, setTimezones] = useState([
    "UTC",
    "Asia/Kolkata",
    "America/New_York",
    "America/Los_Angeles",
  ]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const updateTime = (newTime) => {
    setCurrentTime(newTime);
  };

  const addTimezone = (timezone) => {
    setTimezones([...timezones, timezone]);
  };

  const removeTimezone = (timezone) => {
    setTimezones(timezones.filter((tz) => tz !== timezone));
  };

  const reorderTimezones = (newOrder) => {
    setTimezones(newOrder);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Toolbar
          toggleDarkMode={toggleDarkMode}
          addTimezone={addTimezone}
          reorderTimezones={reorderTimezones}
          currentOrder={timezones}
        />
        <TimezoneSlider currentTime={currentTime} updateTime={updateTime} />
        <TimezoneList
          timezones={timezones}
          currentTime={currentTime}
          removeTimezone={removeTimezone}
        />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
`;

export default App;
