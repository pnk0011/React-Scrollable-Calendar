import React from "react";

import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      eventsData: [],
      eventsDataArr: [],
    };
  }

  async componentDidMount() {
    let API_PATH = "";
    if (process.env.NODE_ENV === "development") {
      API_PATH =
        "https://cors-anywhere.herokuapp.com/http://detangled.in/develop/64a6332b-3aa6-48d6-9275-ab63a72b4c3f/events";
    } else if (process.env.NODE_ENV === "production") {
      API_PATH =
        "https://cors-anywhere.herokuapp.com/http://detangled.in/develop/64a6332b-3aa6-48d6-9275-ab63a72b4c3f/events";
    }
    try {
      const response = await fetch(API_PATH);
      const data = await response.json();
      console.log(data);
      this.setState({ eventsData: data });

      const events = this.state.eventsData;

      const dateArr = [];
      let index = 0;
      for (let i = 0; i < events.length; i++) {
        dateArr[index++] = events[i].start;
        var endDateCal = new Date(
          new Date(events[i].start).getTime() + 86400000 * events[i].duration
        );

        dateArr[index++] = endDateCal;
      }

      this.setState({ eventsDataArr: dateArr });
      console.log("dateArr" + this.state.eventsDataArr);
    } catch (error) {
      console.log("error", error);
    }
  }
  addEvent = (name, start, end) => {
    const event = {
      name: name,
      start: start,
      end: end,
    };
    if (this.state.eventsData.events) {
      let newArr = this.state.eventsData;
      newArr.events.push(event);
      this.setState({ events: newArr, show: false });
      console.log(this.state);
    }
  };

  render() {
    const eventsData = this.state.eventsData;
    const eventsDataArr = this.state.eventsDataArr;
    return (
      <div className="container">
        <LeftSection eventsData={eventsData} />
        <RightSection eventsDataArr={eventsDataArr} />
      </div>
    );
  }
}

export default App;
