/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0B0C15',
                primary: '#00F0FF',
                secondary: '#7000FF',
                surface: 'rgba(255, 255, 255, 0.03)',
                'surface-hover': 'rgba(255, 255, 255, 0.08)',
                text: '#A0A0A0',
                heading: '#FFFFFF',
            },
            fontFamily: {
                orbitron: ['var(--font-orbitron)'],
                exo: ['var(--font-exo)'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                float: 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
};
