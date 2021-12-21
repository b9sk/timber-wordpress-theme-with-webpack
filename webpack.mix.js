let mix = require('laravel-mix');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

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

mix.webpackConfig({
  plugins: [
    new SVGSpritemapPlugin(
        [
            // might be multiple values
            'src/icons/**/*.svg',
        ],
        {
          output: {
            svg: {
              sizes: false,
            },
            svg4everybody: false,
            chunk: {
              keep: true,
            },
          },
          sprite: {
            gutter: 5,
            generate: {
              title: false,
              use: true,
              symbol: true,
              view: "-view",
            }
          },
          styles: {
            filename: 'src/scss/sprites.scss'
          }
        }
    )
  ]
});

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


