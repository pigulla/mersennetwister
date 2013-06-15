'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            source: {
                src: ['src/**/*.js'],
                options: {
                    jshintrc: 'src/.jshintrc'
                }
            },
            tests: {
                src: ['tests/**/*.js'],
                options: {
                    jshintrc: 'tests/.jshintrc'
                }
            }
        },

        jasmine: {
            test: {
                src: 'src/MersenneTwister.js',
                options: {
                    specs: 'tests/MersenneTwister.spec.js',
                    template: require('grunt-template-jasmine-requirejs')
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
};
