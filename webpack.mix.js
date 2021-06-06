const mix = require('laravel-mix');

mix.setPublicPath('./webroot')
    .js('resources/js/app.js', 'webroot/js')
    .sass('resources/sass/app.scss', 'webroot/css')
    .version();
