import Gulp  from 'gulp';
import babel from 'gulp-babel';

Gulp.task( 'compile:javascript', () => {

    return Gulp.src( './src/js/**/*.js' )
               .pipe( babel( {

                   presets: [ 'es2015' ],

               } ) )
               .pipe( Gulp.dest( './dist/js' ) );

} );

Gulp.task( 'compile:html', () => {

    return Gulp.src( [ './src/**/*.*', '!./src/**/*.js' ] )
               .pipe( Gulp.dest( './dist/' ) );

} );

Gulp.task( 'watch', () => {

    Gulp.watch( './src/**/*.*', [ 'default' ] );

} );

Gulp.task( 'default', [ 'compile:javascript', 'compile:html' ] );
