import React from "react";

function LeftSection(props) {
  const { eventsData } = props;
  const { events } = eventsData;

  return (
    <div className="leftContainer">
      {events &&
        events.map((event, index) => {
          return (
            <div key={index}>
              <div class="column">
                <div class="card">
                  <h3>
                    Name: <span>{event.name}</span>{" "}
                  </h3>
                  <p>
                    Start Time: <span>{event.start}</span>
                  </p>
                  <p>
                    End Time: <span>{event.end}</span>
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
