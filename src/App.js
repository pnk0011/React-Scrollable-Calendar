import React from "react";
import "./styles.css";
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
      API_PATH = "http://localhost:3000/data/events.json";
    } else if (process.env.NODE_ENV === "production") {
      API_PATH =
        "https://event-scrollable-calendar.herokuapp.com/data/events.json";
    }
    try {
      const response = await fetch(API_PATH);
      const data = await response.json();
      this.setState({ eventsData: data });
      const { eventsData } = this.state;
      const { events } = eventsData;
      const dateArr = [];
      let index = 0;
      for (let i = 0; i < events.length; i++) {
        dateArr[index++] = events[i].start;
        dateArr[index++] = events[i].end;
      }

      this.setState({ eventsDataArr: dateArr });
    } catch (error) {
      console.log("error", error);
    }
  }

  render() {
    const { eventsData } = this.state;
    const { eventsDataArr } = this.state;

    return (
      <div className="container">
        <LeftSection eventsData={eventsData} />
        <RightSection eventsDataArr={eventsDataArr} />
      </div>
    );
  }
}

export default App;
