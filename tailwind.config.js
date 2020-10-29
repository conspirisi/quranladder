module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        myFont: ["Crimson Text", "serif"],
      },

      boxShadow: {
        // md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        myShadow: "10px 10px 4px rgba(0, 0, 0, 0.25)",
        // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        // 10px 10px 4px rgba(0, 0, 0, 0.25)
      },

      colors: {
        myColors: {
          bkg: "#027D78",
          panel: "#229A95",
          font: "#F0EA87",
          button: "#FFC555",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#027D78",
        },
      },
      gridTemplateColumns: {
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        smBind: "80%",
        none: "none",
      },
      gridTemplateRows: {
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        mdSmBind: "30px 80px minmax(200px, auto) 35px minmax(200px, auto)", //medium and smaller because // 30px 80px minmax(200px, auto) 35px minmax(200px, auto)
        none: "none",
      },
    },
  },
  variants: {},
  plugins: [],
};
