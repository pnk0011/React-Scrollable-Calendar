import React, { Component } from "react";

import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates,
 
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';



class RightSection extends Component {

  render() {
    return (
    <div className="rightContainer">
      <InfiniteCalendar
      width={600}
  Component={withMultipleDates(Calendar)}
  interpolateSelection={defaultMultipleDateInterpolation}
  selected={this.props.eventsDataArr}  />
      </div>
    );
  }
}

export default RightSection;
