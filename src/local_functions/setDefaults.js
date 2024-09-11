const setDefaults = (target, defaults) => {
  for (const key in defaults) {
    if (typeof defaults[key] === "object" && !Array.isArray(defaults[key])) {
      target[key] = target[key] || {};
      setDefaults(target[key], defaults[key]);
    } else {
      target[key] = target[key] !== undefined ? target[key] : defaults[key];
    }
  }
};

export default setDefaults;