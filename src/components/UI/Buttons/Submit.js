import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../../../styles";
import css from "./Submit.style";

console.log(styles); // Add this line to log the styles object

const getButtonStyles = (type) => {
  const [hovering, setHovering] = useState(false);
  switch (type) {
    case "submit":
      console.log(
        css(
          styles.defaults.buttons.primary.background,
          styles.defaults.buttons.primary.color,
          styles.defaults.buttons.primary.border.color,
          styles.defaults.buttons.primary.hover.background,
          styles.defaults.buttons.primary.hover.color,
          styles.defaults.buttons.primary.hover.border.color
        )
      );
      return css(
        styles.defaults.buttons.primary.background,
        styles.defaults.buttons.primary.color,
        styles.defaults.buttons.primary.border.color,
        styles.defaults.buttons.primary.hover.background,
        styles.defaults.buttons.primary.hover.color,
        styles.defaults.buttons.primary.hover.border.color
      );
    case "reset":
      return css(
        styles.defaults.buttons.danger.background,
        styles.defaults.buttons.primary.color,
        styles.defaults.buttons.primary.border.color,
        styles.defaults.buttons.primary.hover.background,
        styles.defaults.buttons.primary.hover.color,
        styles.defaults.buttons.primary.hover.border.color
      );
    default:
      return css(
        styles.defaults.buttons.dark.background,
        styles.defaults.buttons.dark.color,
        styles.defaults.buttons.dark.border.color,
        styles.defaults.buttons.dark.hover.background,
        styles.defaults.buttons.dark.hover.color,
        styles.defaults.buttons.dark.hover.border.color
      );
  }
};

const Submit = ({
  className = "submit-button",
  type = "button",
  children,
  ...props
}) => {
  const style = getButtonStyles(type);

  return (
    <button
      type={type}
      className={className}
      style={hovering ? { ...style.base, ...style.hover } : style.base}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      {...props}
    >
      <span className="button-content">{children}</span>
    </button>
  );
};

Submit.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  children: PropTypes.node.isRequired,
};

export default Submit;
