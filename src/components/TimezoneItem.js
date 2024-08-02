import moment from "moment-timezone";
import React from "react";
import styled from "styled-components";

const TimezoneItem = React.forwardRef(
  ({ timezone, currentTime, removeTimezone, ...props }, ref) => {
    const formattedTime = moment(currentTime)
      .tz(timezone)
      .format("YYYY-MM-DD HH:mm:ss");

    return (
      <ItemContainer ref={ref} {...props}>
        <TimezoneName>{timezone}</TimezoneName>
        <TimezoneTime>{formattedTime}</TimezoneTime>
        <RemoveButton onClick={() => removeTimezone(timezone)}>×</RemoveButton>
      </ItemContainer>
    );
  }
);

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const TimezoneName = styled.div`
  flex: 1;
`;

const TimezoneTime = styled.div`
  flex: 1;
  text-align: right;
`;

const RemoveButton = styled.button`
  margin-left: 10px;
  background: transparent;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
`;

export default TimezoneItem;
