// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')
// const purgecss = require('@fullhuman/postcss-purgecss')

// const postcssPlugins=[
//   tailwind()
// ]

// if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'Gridsome',
  plugins: [],
  css: {
    loaderOptions: {
        postcss: {
            plugins: [
                tailwind
                // No longer needed as of Tailwind 1.4.0
                // ...process.env.NODE_ENV === "production" ? [purgecss] : []
            ],
        },
    },
},
}
