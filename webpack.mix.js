let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
let psimport = require('postcss-partial-import');
let crip = require('postcss-crip');
let mixins = require('postcss-mixins');
let advvars = require('postcss-advanced-variables');
let short = require('postcss-short');
let presetenv = require('postcss-preset-env');
let nested = require('postcss-nested');
let ref = require('postcss-ref');
let lookup = require('postcss-property-lookup');
let utilities = require('postcss-utilities');
let rucksack = require('rucksack-css');
let extend = require('postcss-extend');
let mqpack = require('css-mqpacker');
let minmax = require('postcss-media-minmax');
let mergerrules = require('postcss-merge-rules');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean; fluent API for defining some Webpack build steps
 | for your theme. By default, we are compiling the Sass file for the theme
 | as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('dist')
   .js('src/app.js', 'scripts/')
   .extract([
      'jquery',
      'axios',
      'babel-polyfill',
      'lodash',
      'tether',
      'vue',
      'vuex',
      'vuex-localstorage'
   ])
   .postCss('src/styles/app.css', 'styles/', [
      tailwindcss('./tailwind.js'),
      psimport(),
      crip(),
      mixins(),
      advvars(),
      short(),
      presetenv({
        stage: 3,
        features: {
          'nesting-rules': false
        }
      }),
      nested(),
      ref(),
      lookup(),
      utilities(),
      rucksack(),
      extend(),
      mqpack(),
      minmax(),
      mergerrules()
   ])
   .copyDirectory('src/assets', 'dist/assets')
   .options({
      processCssUrls: false,
      uglify: true
    })
   .version();
