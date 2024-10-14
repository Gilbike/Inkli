import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
              lightP: "#4A6427",
              lightH: "#476025",
              lightC:"#465E25",
              darkP:"#5F4B30",
              darkH:"#5B482E",
              darkC:"#59462D",
              secondaryP:"#5E3B4D",
              secondaryH:"#5A394A",
              secondaryC:"#583748",
            }
        },
    },

    plugins: [forms],
};
