const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["themes/**/*.html", "themes/**/*.{html,js}"],

    darkMode: "class",

    theme: {
        fontFamily: {
            sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            serif: ['Libre Baskerville', ...defaultTheme.fontFamily.serif],
        },
        extend: {
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
    },

    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};