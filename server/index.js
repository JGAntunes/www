var Path       = require('path');
var Hapi 		   = require('hapi');
var Handlebars = require('handlebars');

var serverOptions = {
    views: {
        engines: {
            html: Handlebars
        },
        path: Path.join(__dirname, 'templates')
    }
};

var server = new Hapi.Server(3000, serverOptions);

server.start(function () {
    console.log('Server running at:', server.info.uri);
});