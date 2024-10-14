import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                lightBG: "#FCFCFC",
                darkBG: "#101010",
                lightT: "#030303",
                darkT: "#FCFCFC",
                lightP: "#4A6427",
                lightH: "#476025",
                lightA: "#465E25",
                darkP: "#5F4B30",
                darkH: "#5B482E",
                darkA: "#59462D",
                secondaryP: "#5E3B4D",
                secondaryH: "#5A394A",
                secondaryA: "#583748",
                outlineColor: "#626262",
                dark1: "#171717",
                dark2: "#1E1E1E",
                dark3: "#252525",
                light1: "#EDEDED",
                light2: "#EDEDED",
                light3: "#E6E6E6",
            },
        },
    },

    plugins: [forms],
};
