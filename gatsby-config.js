const path = require('path')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        siteUrl: `https://dylanbelouis.netlify.app`,
        title: `Dylan Belouis Portfolio`,
        titleTemplate: '%s · portfolio',
        keywords: [
            `dylan`,
            `belouis`,
            `portfolio`,
            `javascript`,
            `react`,
            `gatsby`,
            `graphql`,
            `node`,
            `developpeur`,
            `web`,
            `developer`,
            `fullstack`,
            `full-stack`,
            `fullstack-developer`,
            `full-stack-developer`,
            `fullstack-developer-fullstack`,
            `frontend`,
            `front-end`,
            `frontend-developer`,
            `front-end-developer`,
            `frontend-developer`,
        ],
        description:
            'Site web de dylan belouis-soyer développeur web fullstack, frontend et backend react gatsby next node express',
        url: 'https://dylanbelouis.netlify.app', // No trailing slash allowed!
        image: './assets/dylan.jpeg',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://dylanbelouis.netlify.app',
                sitemap:
                    'https://www.dylanbelouis.com/sitemap.xml',
                env: {
                    development: {
                        policy: [
                            {
                                userAgent: '*',
                                disallow: ['/'],
                            },
                        ],
                    },
                    production: {
                        policy: [
                            {
                                userAgent: '*',
                                allow: '/',
                            },
                        ],
                    },
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Poppins`,
                    `source sans pro\:300,400`,
                ],
                display: 'swap',
            },
        },
        {
            resolve:
                'gatsby-plugin-prettier-eslint',
            // this is the default configuration, override only what you need
            options: {
                cwd: process.cwd(), // path to a directory that should be considered as the current working directory
                watch: true, // format/lint on save
                initialScan: true, // if true, will format/lint the whole project on Gatsby startup
                onChangeFullScanLint: false, // if true, on file save always perform full scan lint
                onChangeFullScanFormat: false, // if true, on file save always perform full scan format
                prettierLast: false, // if true, will run Prettier after ESLint
                ignorePatterns: [
                    '**/node_modules/**/*',
                    '**/.git/**/*',
                    '**/dist/**/*',
                    '.cache/**/*',
                    'public/**/*',
                ], // string or array of paths/files/globs to ignore
                prettier: {
                    patterns: [], // string or array of paths/files/globs to include related only to Prettier
                    ignorePatterns: [], // string or array of paths/files/globs to exclude related only to Prettier
                    customOptions: {}, // see: https://prettier.io/docs/en/options.html
                },
                eslint: {
                    patterns: [], // string or array of paths/files/globs to include related only to ESLint
                    ignorePatterns: [], // string or array of paths/files/globs to exclude related only to ESLint
                    formatter: 'stylish', // set custom or third party formatter
                    maxWarnings: undefined, // number of max warnings allowed, when exceed it will fail Gatsby build
                    emitWarning: true, // if true, will emit lint warnings
                    failOnError: true, // if true, any lint error will fail the build, you may set true only in your prod config
                    failOnWarning: true, // same as failOnError but for warnings
                    plugins: [], // an array of plugins to load for ESLint
                    customOptions: {}, // see: https://eslint.org/docs/developer-guide/nodejs-api#cliengine
                },
            },
        },
        'gatsby-plugin-offline',
        `gatsby-plugin-advanced-sitemap`,
        // {
        //     resolve: `gatsby-plugin-csp`,
        //     options: {
        //         disableOnDev: true,
        //         reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        //         mergeScriptHashes: true, // you can disable scripts sha256 hashes
        //         mergeStyleHashes: true, // you can disable styles sha256 hashes
        //         mergeDefaultDirectives: true,
        //         directives: {
        //             'script-src':
        //                 "'self' www.google-analytics.com",
        //             'style-src':
        //                 "'self' 'unsafe-inline'",
        //             'img-src':
        //                 "'self' data: www.google-analytics.com",
        //             // you can add your directives or override defaults
        //         },
        //     },
        // },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Dylan Belouis | Développeur Web`,
                short_name: `Dylan Belouis | Développeur Web`,
                start_url: `/`,
                background_color: `black`,
                theme_color: `black`,
                display: `standalone`,
                icon: `src/images/Next.jpeg`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.join(
                    __dirname,
                    `src`,
                    `images`
                ),
            },
        },
        `gatsby-plugin-image`,
        // `gatsby-plugin-sharp`,
        // 'gatsby-transformer-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-postcss',
        'gatsby-plugin-smoothscroll',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId:
                    process.env
                        .GATSBY_GOOGLE_ANALYTICS_PROJECT_ID,
                head: true,
            },
        },
    ],
}
