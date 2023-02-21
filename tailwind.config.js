module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "mobile-app-image":
          "url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)",
      }),
      colors: {
        "brand-color": "#4c3398",
        "primary-brand-color": "#5d3ebc",
        "secondary-brand-color": "#7849f7",
        "brand-yellow": "#ffd300",
        "brand-gray": "#f3f0fe",
        "brand-primary-gray": "#626262",
      },
    },
  },
  plugins: [],
};
