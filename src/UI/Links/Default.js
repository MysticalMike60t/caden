import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Default = ({
  className = "caden-ui-links-default",
  href = "#",
  filled = false,
  children,
  ...props
}) => {
  const combinedClassName = classNames(className, {
    "caden-ui-links-default-filled": filled,
  });

  return (
    <a className={combinedClassName} href={href} {...props}>
      {children}
    </a>
  );
};

Default.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  filled: PropTypes.bool,
  children: PropTypes.node,
};

export default Default;
