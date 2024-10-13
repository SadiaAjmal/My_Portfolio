/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                'box-bg': '#A43DEF',
                'process-bg': '#F0f1F3',
                'block-bg': '#132239',
            },
            backgroundImage: {
                'custom-bg': `linear-gradient(to bottom, #FFFFFF 0%, #FFF7E8 30%, #F4E0FB 70%, #E4FAF5 100%), linear-gradient(to right, #FFFFFF 0%, #FFF7E8 30%, #F8FDF9 100%)`,
                'contact-bg': `linear-gradient(45deg, #FFD7BE)`,
            },
            textColor: {
                'custom-textclr': '#A43DEF',
                'pText-clr': '#A3ACBB',
            },

            boxShadow: {
                'custom-shadow': "0px 0px 10px, 0px 0px 10px",
            },
        },
    },
    plugins: [],
};