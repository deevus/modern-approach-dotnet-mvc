let mix = require('laravel-mix');
const webpack = require('webpack');

mix.js('src/js/app.js', 'wwwroot/js');
mix.setPublicPath('wwwroot/')

mix.webpackConfig({
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery',
        }),
    ],
});