import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles";

const getButtonStyles = (type) => {
  switch (type) {
    case "submit":
      return {
        "--primary-background": styles.defaults.buttons.primary.background,
        "--primary-color": styles.defaults.buttons.primary.color,
        "--primary-border": styles.defaults.buttons.primary.border,
        "--primary-hover-background":
          styles.defaults.buttons.primary.hover.background,
        "--primary-hover-color": styles.defaults.buttons.primary.hover.color,
        "--primary-hover-border": styles.defaults.buttons.primary.hover.border,
      };
    case "reset":
      return {
        "--primary-background": styles.defaults.buttons.danger.background,
        "--primary-color": styles.defaults.buttons.danger.color,
        "--primary-border": styles.defaults.buttons.danger.border,
        "--primary-hover-background":
          styles.defaults.buttons.danger.hover.background,
        "--primary-hover-color": styles.defaults.buttons.danger.hover.color,
        "--primary-hover-border": styles.defaults.buttons.danger.hover.border,
      };
    default:
      return {
        "--primary-background": styles.defaults.buttons.dark.background,
        "--primary-color": styles.defaults.buttons.dark.color,
        "--primary-border": styles.defaults.buttons.dark.border,
        "--primary-hover-background":
          styles.defaults.buttons.dark.hover.background,
        "--primary-hover-color": styles.defaults.buttons.dark.hover.color,
        "--primary-hover-border": styles.defaults.buttons.dark.hover.border,
      };
  }
};

const Submit = ({
  className = "caden-ui-buttons-submit",
  type = "button",
  uniLabel,
  useInput = false,
  children,
  ...props
}) => {
  const style = getButtonStyles(type);

  return useInput ? (
    <input
      type={type}
      className={className}
      style={style}
      aria-label={uniLabel}
      title={uniLabel}
      {...props}
    />
  ) : (
    <button
      type={type}
      className={className}
      style={style}
      aria-label={uniLabel}
      title={uniLabel}
      {...props}
    >
      <span className="button-content">{children}</span>
    </button>
  );
};

Submit.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  uniLabel: PropTypes.string,
  useInput: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Submit;
