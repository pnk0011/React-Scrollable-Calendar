import React from "react";

const AddEvent = ({ handleOpen }) => {
  return (
    <div className="AddButton">
      <button onClick={handleOpen}>Add Event</button>
    </div>
  );
};

export default AddEvent;
