import React from "react";

function LeftSection(props) {
  console.log("left section ", props);
  const events = props.eventsData;

  return (
    <div className="leftContainer">
      {events &&
        events.map((event, index) => {
          return (
            <div key={index}>
              <div class="column">
                <div class="card">
                  <h3>
                    Destination: <span>{event.destination}</span>
                  </h3>
                  <p>
                    Start Time: <span>{event.start}</span>
                  </p>
                  <p>
                    Duration: <span>{event.duration}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default LeftSection;
