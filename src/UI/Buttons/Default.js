import React from "react";
import PropTypes from "prop-types";

const Default = ({
  className = "caden-ui-buttons-default",
  children,
  ...props
}) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

Default.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Default;
