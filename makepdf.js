var spawn = require('child_process').spawn;
var url = 'http://localhost:5008';
var file = 'public/Vasyl_Priymachuk_resume.pdf';

var task = spawn('phantomjs', ['rasterize.js', url, file, 'A4']);

task.stdout.on('data', function (data) {
  console.log(data.toString());
});

task.stderr.on('data', function (data) {
  console.error(data.toString());
});
