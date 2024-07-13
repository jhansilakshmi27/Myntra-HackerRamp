/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          "100": "#1f1f1f",
          "200": "#1f0d0d",
          "300": "rgba(255, 255, 255, 0.8)",
          "400": "rgba(255, 255, 255, 0.3)",
        },
        white: "#fff",
        whitesmoke: {
          "100": "#f4f3f0",
          "200": "#f4f2f0",
        },
        gainsboro: "rgba(217, 217, 217, 0.82)",
        lightskyblue: "rgba(146, 216, 255, 0.67)",
        deepskyblue: "#00b3ff",
      },
      spacing: {},
      fontFamily: {
        "ibm-plex-sans": "'IBM Plex Sans'",
        "ms-reference-specialty": "'MS Reference Specialty'",
        inter: "Inter",
        "baloo-da-2": "'Baloo Da 2'",
        montserrat: "Montserrat",
        "be-vietnam": "'Be Vietnam'",
      },
      borderRadius: {
        "3xl": "22px",
        "21xl": "40px",
        mini: "15px",
        "6xl": "25px",
        "11xl": "30px",
        "31xl": "50px",
        "icon-large": "40px",
        "corner-large": "16px",
      },
    },
    fontSize: {
      xs: "0.75rem",
      "13xl": "2rem",
      "17xl": "2.25rem",
      "36xl": "3.438rem",
      "11xl": "1.875rem",
      "9xl": "1.75rem",
      "7xl": "1.625rem",
      "21xl": "2.5rem",
      "29xl": "3rem",
      xl: "1.25rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
