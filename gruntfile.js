module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    let path = require('path');

    let publicJSPath = 'public/js-transpiled/';
    let buildJSPath = 'public/build/';

    grunt.initConfig({
        clean: {
            yourTarget: {
                src: [
                    path.join(__dirname, publicJSPath, '/**/*.js')
                ]
            }
        },
        browserify: {
            dist: {
                files: {
                    'public/build/bundle.js': [path.join(__dirname, publicJSPath, '/*.js')]
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'public/build/bundle.min.js': [path.join(__dirname, buildJSPath, '/bundle.js')],
                }
            }
        }
    });

    grunt.registerTask('build:js', ['browserify', 'uglify']);

    grunt.registerTask('default', ['build:js']);
};