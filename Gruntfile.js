var spawn = require('child_process').spawn;

module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      compile: {
        options: {
          compress: false,
          paths: ['./node_modules/nib/lib']
        },

        files: {
          'public/css/main.css': 'styles/*.styl'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
};