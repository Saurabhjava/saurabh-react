import React, { Component } from "react";
import API from "./services/dateAPI";
import DateButton from "./components/DateButton";
import DateDisplay from "./components/DateDisplay";

class App extends Component {
  constructor() {
    super();
    this.state = {
      day: "",
      month: "",
      year: "",
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick = () => {
    API.getAPIResponse().then((res) => {
      // res.date = "08-31-2025"
      const [month, day, year] = res.date.split("-");
      this.setState({
        day: parseInt(day), // "31"
        month: parseInt(month, 10), // 8
        year, // "2025"
      });
    });
  };

  render() {
    return (
      <div>
        <center>
          <h1>Date API</h1>
        </center>
        <center>
          <DateButton onClickButton={this.handleButtonClick} />
        </center>
        <DateDisplay
          day={this.state.day}
          month={this.state.month}
          year={this.state.year}
        />
      </div>
    );
  }
}

export default App;
