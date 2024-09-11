import setDefaults from "./local_functions/setDefaults";
import { updateCSSVariables } from "./local_functions/updateCSSVariables";

const defaultConfig = {
  style: {
    color: {
      primary: {
        hex: "#ae7eec",
        rgb: "rgb(174, 126, 236)",
        rgba: "rgba(174, 126, 236, 1)",
        hsl: "hsl(270, 60%, 70%)",
        hover: {
          hex: "#8b5ebf",
          rgb: "rgb(139, 94, 191)",
          rgba: "rgba(139, 94, 191, 1)",
          hsl: "hsl(270, 40%, 60%)",
        },
      },
    },
  },
};

const config = {};

setDefaults(config, defaultConfig);
updateCSSVariables(config);

export const setConfig = (newConfig) => {
  setDefaults(config, newConfig);
  updateCSSVariables(config);
};

export default config;
