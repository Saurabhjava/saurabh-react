import React, { useEffect } from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Paper } from "@mui/material";

const DateDisplay = ({ day, month, year }) => {
  console.log("day  is :", day);

  return (
    <Paper className="container">
      <List>
        <ListItem>
          <ListItemText data-testid="day">Day: {day}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText data-testid="month">Month: {month}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText data-testid="year">Year: {year}</ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
};

DateDisplay.propTypes = {
  day: PropTypes.string,
  month: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  year: PropTypes.string,
};

export default DateDisplay;
