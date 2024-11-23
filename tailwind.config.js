/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Purple_100: "hsl(254, 88%, 90%)",
                c_Purple_500: "hsl(256, 67%, 59%)",
                c_Yellow_100: "hsl(31, 66%, 93%)",
                c_Yellow_500: "hsl(39, 100%, 71%)",
                c_Black: "hsl(0, 0%, 7%)"
            },
            fontFamily: {
                DM: ["DM Sans", "sans-serif"]
            },
        },
    },
    plugins: [],
}

