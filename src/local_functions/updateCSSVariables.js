export const updateCSSVariables = (config) => {
  const root = document.documentElement;
  if (config.style && config.style.color && config.style.color.primary) {
    const primary = config.style.color.primary;
    root.style.setProperty("--primary-color", primary.hex);
    root.style.setProperty("--primary-color-rgb", primary.rgb);
    root.style.setProperty("--primary-color-rgba", primary.rgba);
    root.style.setProperty("--primary-color-hsl", primary.hsl);
    if (primary.hover) {
      root.style.setProperty("--primary-color-hover", primary.hover.hex);
      root.style.setProperty("--primary-color-hover-rgb", primary.hover.rgb);
      root.style.setProperty("--primary-color-hover-rgba", primary.hover.rgba);
      root.style.setProperty("--primary-color-hover-hsl", primary.hover.hsl);
    }
  }
};
