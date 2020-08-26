// main dirs
global.appDir = './app/';
global.appDirAssets = appDir + 'assets/';
global.distDir = './dist/';
global.distDirAssets = distDir + 'assets/';
// arch your html files
global.html_arch = [
  'index'
].map(element => appDir + element + '.html')
// files name
global.mainSass = 'style.sass';
global.mainJs = 'script.js';
// config dirs
global.config = {

    // ur localhost
    localhost: 'http://localhost',

    // dirs for files ( develop )
    app: {
        php: `${appDir}*.php`,
        js: `${appDirAssets}js/**/*.js`,
        sass: `${appDirAssets}sass/` + mainSass,
        img: `${appDirAssets}img/**/*.+(jpg|jpeg|png|svg)`,
        fonts: `${appDirAssets}fonts/**/*`
    },
    // dirs for files ( deploy )
    dist: {
        js: `${distDirAssets}js/`,
        css: `${distDir}`,
        img: `${distDirAssets}img/`,
        fonts: `${distDirAssets}fonts/`
    },
    // watching files dirs
    watch: {
        html: `${appDir}*.html`,
        php: `${appDir}*.php`,
        js: `${appDirAssets}js/**/*.js`,
        sass: `${appDirAssets}sass/**/*.+(sass|scss)`,
        img: `${appDirAssets}img/**/*`,
        fonts: `${appDirAssets}fonts/**/*`
    }
};
