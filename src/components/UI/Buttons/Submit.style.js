const css = (
  primaryBackground,
  primaryColor,
  primaryBorder,
  primaryHoverBackground,
  primaryHoverColor,
  primaryHoverBorder
) => {
  return {
    background: primaryBackground,
    color: primaryColor,
    border: `1px solid ${primaryBorder}`,
    borderRadius: "10px",
    padding: "10px 20px",
    transition: "100ms ease all",
    ":hover": {
      background: primaryHoverBackground,
      color: primaryHoverColor,
      border: `1px solid ${primaryHoverBorder}`,
    },
  };
};

export default css;
