var Path       = require('path');
var Hapi 		   = require('hapi');
var Handlebars = require('handlebars');

var serverOptions = {
    views: {
        engines: {
            html: Handlebars
        },
        path: Path.join(__dirname, '../views')
    }
};

var server = new Hapi.Server(3000, serverOptions);

server.route({
  method: 'GET', 
  path: '/public/{path*}', 
  config: {
    handler: {
      directory: { 
        path: './public/', 
        listing: false, 
        index: true 
      }
    }
  }
});

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: function (request, reply) {
        if(request.params.path == ''){
          reply.view('index');
        }
        else{
          reply.view('index');
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});