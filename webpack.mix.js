let mix = require('laravel-mix');

mix.options({
  processCssUrls: false
})

mix.setPublicPath('dist');

mix
  .ts('src/js/app.ts', 'dist/main.js')

mix
  .sass(
    'src/scss/index.scss',
    'dist/style.css'
  )

mix.webpackConfig

if (!mix.inProduction()) {
  mix
    .webpackConfig({
      devtool: 'inline-source-map',
    })
    .sourceMaps();
}

mix.browserSync({
  proxy: 'http://localhost:48000/',
  files: ['templates/**/*.twig', 'views/**/*.twig', 'src/**/*.*'],
  open: false,
});


