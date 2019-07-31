import React from "react";
import PropTypes from "prop-types";

const Hello = ({ name, messageObj }) => {
  return (
    <div>
      <h2>Hello {name}</h2>
      <p>{messageObj.message}</p>
      <p>{messageObj.time}</p>
    </div>
  );
};

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  messageObj: PropTypes.shape({
    message: PropTypes.string.isRequired,
    time: PropTypes.number
  }).isRequired
};

export default Hello;
