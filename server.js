var static = require('node-static');

var file = new(static.Server)('./public');

var port = process.env.PORT || 8080;
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    });
}).listen(port);

console.log('server started at ' + port + ' port');