import React, { useState } from "react";
const Modal = ({ handleClose, show, addEvent }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-content">
          <h3 className="">Add Event</h3>
          <div className="">
            <label>Event Name </label>
            <br />
            <input
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            <br />
            <label>Start Date </label>
            <br />
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <br />
            <label>End Date </label>
            <br />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <br />
            <button onClick={() => addEvent(eventName, startDate, endDate)}>
              Add
            </button>
            <button onClick={handleClose}> close</button>
          </div>{" "}
        </div>
      </section>
    </div>
  );
};
export default Modal;
