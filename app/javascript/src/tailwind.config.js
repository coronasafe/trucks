const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F0EAFB",
          200: "#D3BFF3",
          300: "#B08EE6",
          400: "#976AE2",
          500: "#6025C0",
          600: "#4D1E9A",
          700: "#380D80",
          800: "#35156B",
          900: "#1F0D40"
        },
        secondary: {
          100: "#FEE6EF",
          200: "#FCB5D0",
          300: "#FF80B0",
          400: "#F95392",
          500: "#F61067",
          600: "#AC0645",
          700: "#A61149",
          800: "#7B0531",
          900: "#4A031E"
        },
        gray: {
          100: "#FBFAFC",
          200: "#F7F5FA",
          300: "#F1EDF7",
          400: "#DFDAE8",
          500: "#BFB8CC",
          600: "#9187A1",
          700: "#7D728F",
          800: "#6A5F7A",
          900: "#453C52"
        }
      },
      spacing: {
        "7": "1.75rem",
        "9": "2.25rem",
        "11": "2.75rem",
        "13": "3.25rem",
        "14": "3.5rem",
        "15": "3.75rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "21": "5.25rem",
        "22": "5.5rem",
        "23": "5.75rem",
        "25": "6.25rem",
        "26": "6.5rem",
        "27": "6.75rem",
        "28": "7rem",
        "29": "7.25rem",
        "30": "7.5rem",
        "31": "7.75rem",
        "33": "8.25rem",
        "34": "8.5rem",
        "35": "8.75rem",
        "36": "9rem",
        "37": "9.25rem",
        "38": "9.5rem",
        "39": "9.75rem",
        "41": "10.25rem",
        "42": "10.5rem",
        "43": "10.75rem",
        "44": "11rem",
        "45": "11.25rem",
        "46": "11.5rem",
        "47": "11.75rem",
        "49": "12.25rem",
        "50": "12.5rem",
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      fontSize: {
        'tiny': '.625rem',
      },
      screens: {
        '2xl': '1824px',
        // => @media (min-width: 1824px) { ... }
      }
    }
  },plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/ui'),
  ]
};
