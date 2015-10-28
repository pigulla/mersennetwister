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

        jsdoc: {
            dist: {
                src: ['src/**/*.js'],
                options: {
                    destination: 'doc'
                }
            }
        },

        jasmine: {
            test: {
                src: 'src/MersenneTwister.js',
                options: {
                    specs: 'tests/**/*.spec.js',
                    template: require('grunt-template-jasmine-requirejs')
                }
            }
        }
    });

    grunt.registerTask('default', ['jshint', 'jasmine']);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-jsdoc');
};
