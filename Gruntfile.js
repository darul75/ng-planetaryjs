module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {
         //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
      }
    },
    // UGLIFY TASK
    uglify: {
      task1: {
         options: {
            preserveComments: 'some',
            report: 'min',
            banner: '/** \n* @license <%= pkg.name %> - v<%= pkg.version %>\n' + 
             '* (c) 2013 Julien VALERY https://github.com/darul75/ng-planetaryjs\n' +
             '* License: MIT \n**/\n'
         },         
         files: {
             'dist/ng-planetaryjs.min.js': ['public/javascripts/ng-planetaryjs.js']             
         }
       }
     }      
});

  // LOAD PLUGINS  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // TASK REGISTER
  grunt.registerTask('default', ['uglify:task1']);
};
