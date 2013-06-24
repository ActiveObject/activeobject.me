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
    },

    connect: {
      server: {
        options: {
          port: 5008,
          base: 'public'
        }
      }
    },

    makepdf: {
      resume: {
        options: {
          from: 'http://localhost:5008',
          file: 'public/Vasyl_Priymachuk_resume.pdf'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('build', ['stylus']);
  grunt.registerTask('release', ['build', 'connect', 'makepdf']);
  grunt.registerTask('default', ['release']);

  grunt.registerMultiTask('makepdf', 'Make pdf from html page with phantomjs', function () {
    var done = this.async();
    var options = this.options();

    var task = spawn('phantomjs', ['rasterize.js', options.from, options.file, 'A4']);

    task.stdout.on('data', function (data) {
      grunt.log.writeln(data);
    });

    task.stderr.on('data', function (data) {
      grunt.log.error(data);
    });

    task.on('close', function (code) {
      grunt.log.ok("written file " + options.file);
      done();
    });
  });
};