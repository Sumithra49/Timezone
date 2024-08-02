import { Add, DarkMode, Undo } from "@mui/icons-material";
import { Button, MenuItem, TextField } from "@mui/material";
import moment from "moment-timezone"; // Import moment-timezone
import React, { useState } from "react";

const Toolbar = ({
  toggleDarkMode,
  addTimezone,
  reorderTimezones,
  currentOrder,
}) => {
  const [timezone, setTimezone] = useState("");
  const [time, setTime] = useState("");

  const handleAddTimezone = () => {
    if (timezone) {
      addTimezone(timezone);
      setTimezone("");
    }
  };

  const handleReverseOrder = () => {
    const reversedOrder = [...currentOrder].reverse();
    reorderTimezones(reversedOrder);
  };

  const handleScheduleMeeting = () => {
    const startTime = moment(time).format("YYYYMMDDTHHmmssZ");
    const endTime = moment(time).add(1, "hour").format("YYYYMMDDTHHmmssZ");

    // Replace 'Meeting Title' with the desired title for your event
    const eventDetails = `&text=Meeting%20Title&dates=${startTime}/${endTime}`;

    // URL to redirect to Google Calendar with pre-filled event details
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE${eventDetails}`;

    window.open(calendarUrl, "_blank");
  };

  return (
    <div className="toolbar-container">
      <TextField
        label="Select Base Timezone"
        select
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
        className="text-field"
      >
        {moment.tz.names().map((tz) => (
          <MenuItem key={tz} value={tz}>
            {tz}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        type="datetime-local"
        label="Select Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        className="text-field"
      />
      <Button
        variant="contained"
        className="toolbar-button"
        onClick={handleAddTimezone}
        startIcon={<Add />}
      ></Button>
      <Button
        variant="contained"
        className="toolbar-button"
        onClick={handleReverseOrder}
        startIcon={<Undo />}
      ></Button>
      <Button
        variant="contained"
        className="toolbar-button"
        onClick={handleScheduleMeeting}
      >
        Schedule a Meeting
      </Button>
      <Button
        variant="contained"
        className="toolbar-button"
        onClick={toggleDarkMode}
        startIcon={<DarkMode />}
      ></Button>
      <style jsx>{`
        .toolbar-container {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          gap: 10px; /* Add spacing between elements */
        }

        .toolbar-button {
          margin: 0; /* Remove margin for buttons */
          display: flex;
          align-items: center;
        }

        .text-field {
          flex: 1; /* Allow TextField to expand */
          min-width: 150px; /* Adjust width as needed */
        }
      `}</style>
    </div>
  );
};

export default Toolbar;
