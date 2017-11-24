#! /bin/bash
set -e

grunt clean

# below command - transpile source javascript es6 code to es5
babel --presets es2015 -d public/js-transpiled js/

#below command will run
# browserify, uglify for more detail check gruntfile.
grunt default








