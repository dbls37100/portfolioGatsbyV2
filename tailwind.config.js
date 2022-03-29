module.exports = {
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            regular: ['Poppins', 'sans-serif'],
        },
        textColor: {
            primary: 'white',
            secondary: '#9A00FF',
            lightGray: '#969696',
        },
        top: {
            '10': '-30%',
        },
        // spacing: {
        //   sm: '8px',
        //   md: '16px',
        //   lg: '24px',
        //   xl: '48px',
        //  },
        extend: {
            screens: {
                portrait: {
                    raw:
                        '(orientation: portrait)',
                },
                xs: '475px',
                sm: '640px',
                md: [{ max: '668px' }],
                lg: '1100px',
                xl: '1400px',
            },
            colors: {
                site: {
                    background: '#000000',
                    secondary: '#161616',
                    violet: '#9A00FF',
                },
            },
            minHeight: {
                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '1/3': '33%',
                '3/4': '75%',
                '200': '200px',
                '450': '450px',
                full: '100%',
                about: '320px',
            },
            minWidth: {
                '0': '0',
                '1/5': '20%',
                '1/3': '33%',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                '44': '11rem',
                full: '100%',
                '110': '110%'
            },
            maxWidth: {
                stackImage: '176px',
            },
            animation: {
                'spin-slow':
                    'spin 3s linear infinite',
            },
            height: {
                fond: '700px',
                presentation_mobile: '450px',
            },
            margin: {
                sixty_five: '65%',
                thirty_five: '35%',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}
