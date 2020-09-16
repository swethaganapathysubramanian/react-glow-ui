import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./input.css";

const InputTag = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.color || "palevioletred"};
  background: ${(props) => props.backgroundColor || "white"};
  border: 1px black solid;
  border-radius: 3px;
`;

const Input = ({ placeholder, size, backgroundColor, label, color }) => {
  return (
    <InputTag
      placeholder={placeholder}
      style={(backgroundColor && { backgroundColor }, color && { color })}
      className={`input-${size}`}
      value={label}
    />
  );
};

Input.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  placeholder: PropTypes.string,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What text color to use
   */
  color: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string,
};

Input.defaultProps = {
  backgroundColor: null,
  size: "medium",
  placeholder: "Hello World",
};

export default Input;
