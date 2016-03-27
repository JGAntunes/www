var Hapi = require('hapi')
var Vision = require('vision')
var Inert = require('inert')
var config = require('./config')
var server = new Hapi.Server({
  debug: {
    request: ['error']
  }
})

server.connection(config.hapi)

// Set view template engine
server.register(Vision, function (err) {
  if (err) throw err
  server.views({
    engines: { jade: require('jade') },
    encoding: 'utf8',
    path: config.templatesDir
  })
})

var publicAssets = {
  method: 'GET',
  path: '/static/{path*}',
  config: {
    handler: {
      directory: {
        path: './public/',
        listing: true,
        index: true
      }
    }
  }
}

var home = {
  method: 'GET',
  path: '/',
  config: {
    handler: function (request, reply) {
      reply.view('home', {
        cssFileName: '/static/' + config.css.name
      })
    }
  }
}

server.register(Inert, function (err) {
  if (err) throw err
  server.route(publicAssets)
})

server.route(home)

// If everything loaded correctly, start the server:
server.start(function (err) {
  if (err) throw err
  console.log('Server started on http://localhost:' + config.hapi.port)
})
