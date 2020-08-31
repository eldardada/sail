// sys
const gulp = require('gulp');
// else sys
const gulpif = require('gulp-if');
const del = require('del');
// html
const rigger = require('gulp-rigger');
// css
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
// js
const concat= require('gulp-concat');
const babel = require('gulp-babel');
const uglyfly = require('gulp-uglyfly');
// browser sync
const browserSync = require('browser-sync').create();
// img
const imagemin = require('gulp-imagemin');
const imgCompress  = require('imagemin-jpeg-recompress');
const mozjpeg = require('imagemin-mozjpeg');
  // tinypng
  const tiny = 'API';
  const tingpng = require('gulp-tinypng');
// smartgrid
const smartgrid = require('smart-grid');
// my variables fo dev
const isDev = process.argv.includes('--dev');
const isProd = !isDev;

require('./conf.js')

// delete dist dir
function clean(){
    return del(distDir)
}

function styles(){

    return gulp.src(config.app.sass)

            .pipe(gulpif(isDev, sourcemaps.init()))
            .pipe(sass().on('error', sass.logError))
            .pipe(gcmq())
            .pipe(autoprefixer({
                browsers: ['> 0.1%'],
                cascade: false
            }))
            .pipe(gulpif(isProd, cleanCSS({
                level: 2
            })))
            .pipe(gulpif(isDev, sourcemaps.write()))

            .pipe(gulp.dest(config.dist.css))
            .pipe(browserSync.stream())

}

function scripts(){

    return gulp.src(config.app.js)

            // .pipe(concat('script.js'))

            // .pipe(babel({
            //   presets: ['@babel/env']
            //  }))
             
            // .pipe(gulpif(isProd,
            //   uglyfly({
            //     toplevel: true
            //   })
            // ))

            .pipe(gulp.dest(config.dist.js))
            .pipe(browserSync.stream())
}

function html(){

    return gulp.src(html_arch)

            .pipe(rigger())

            .pipe(gulp.dest(distDir))
            .pipe(browserSync.stream())
}

function php(){

    return gulp.src(config.app.php)


            .pipe(gulp.dest(distDir))
            .pipe(browserSync.stream())
}

function images(){

    return gulp.src(config.app.img)

    .pipe(gulpif(isProd,
      imagemin([
        imgCompress({
            loops: 4,
            min: 70,
            max: 80,
            quality: 'high'
        }),
        mozjpeg({
          quality: 60,
          progressive: true,
          tune: "ms-ssim",
          smooth: 2
        }),
        imagemin.gifsicle(),
        imagemin.svgo()
      ])
    ))

    .pipe(gulpif(isProd, tingpng(tiny) ))

    .pipe(gulp.dest(config.dist.img))
    .pipe(browserSync.stream())
}

function fonts(){

    return gulp.src(config.app.fonts)

           .pipe(gulp.dest(config.dist.fonts))
           .pipe(browserSync.stream())
}


function watch() {
        browserSync.init({

          server: {
            baseDir: distDir
          }
          // if u want to use sync + ur localhost
          // proxy: config.localhost
        })

      gulp.watch(config.watch.html, html)
      gulp.watch(config.watch.php, php)
      gulp.watch(config.watch.sass, styles)
      gulp.watch(config.watch.fonts, fonts)
      gulp.watch(config.watch.img, images)
      gulp.watch(config.watch.js, scripts)

}

function grid(done){
    let settings = {

        outputStyle: 'sass', /* less || scss || sass || styl */
        columns: 12, /* number of grid columns */
        offset: '0px', /* gutter width px || % || rem */
        mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
        container: {
            maxWidth: '1660px', /* max-width оn very large screen */
            fields: '30px' /* side fields */
        },
        breakPoints: {
            xxx: {
              width: "1600px"
            },
            xxl: {
              width: "1400px"
            },
            xl : {
                width: "1140px"
            },
            xm: {
              width: "1040px"
            },
            lg : {
                width: "960px"
            },  
            md : {
                width: "768px"
            },
            sm: {
                width: "540px"
            },
            xxs: {
                width: "420px"
            }
        }
      }


        smartgrid('./app/assets/sass/lib', settings)
        done()
    };

let build = gulp.series(clean, gulp.parallel(styles, php, html, scripts, images, fonts));

gulp.task('clean', clean);
gulp.task('build', build);
gulp.task('grid', grid);
gulp.task('watch', gulp.series(build, watch));
