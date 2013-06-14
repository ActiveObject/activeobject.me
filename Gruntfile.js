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

  grunt.registerTask('build', ['stylus']);
  grunt.registerTask('default', ['build']);

};