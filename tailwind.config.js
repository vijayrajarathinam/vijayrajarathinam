function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}),${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: withOpacity("--color-primary"),
        secondary: withOpacity("--color-primary-variant"),
        tertiary: withOpacity("--color-bg"),
      },
      backgroundColor: {
        primary: withOpacity("--color-primary"),
        secondary: withOpacity("--color-bg-variant"),
        tertiary: withOpacity("--color-bg"),
      },
      borderColor: {
        primary: withOpacity("--color-primary"),
        secondary: withOpacity("--color-primary-variant"),
        tertiary: withOpacity("--color-bg"),
      },
      ringColor: {
        tertiary: withOpacity("--color-bg"),
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto Mono", "monospace"],
      },
      boxShadow: {
        material:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
