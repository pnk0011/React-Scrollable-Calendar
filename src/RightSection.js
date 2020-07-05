import React from "react";

import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates,
} from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";

function RightSection(props) {
  return (
    <div className="rightContainer">
      <InfiniteCalendar
        width={600}
        Component={withMultipleDates(Calendar)}
        interpolateSelection={defaultMultipleDateInterpolation}
        selected={props.eventsDataArr}
      />
    </div>
  );
}

export default RightSection;
