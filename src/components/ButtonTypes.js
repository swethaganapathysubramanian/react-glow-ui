import React from "react";
import "./css/tailwind.css";
import PropTypes from "prop-types";

const ButtonTypes = ({
  backgroundColor,
  onClick,
  label = "Some label",
  outlined,
}) => {
  console.log(backgroundColor);
  const BASE_BUTTON =
    "rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg";
  const CONTAINED_BUTTON = `${BASE_BUTTON} bg-${backgroundColor.toLowerCase()}-400 border border-teal-400 text-white`;
  const OUTLINED_BUTTON = `${BASE_BUTTON} border border-blue-400 text-teal-400`;

  return (
    <div>
      {" "}
      <button
        onClick={onClick}
        className={outlined ? OUTLINED_BUTTON : CONTAINED_BUTTON}
      >
        <span>{label}</span>
      </button>
    </div>
  );
};

ButtonTypes.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ButtonTypes.defaultProps = {
  backgroundColor: "teal",
  size: "medium",
  onClick: undefined,
};

export default ButtonTypes;
