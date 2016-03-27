var path = require('path')
var config = {
  isDev: process.env.NODE_ENV !== 'production',
  isSecure: false
}

config.hapi = {
  host: '0.0.0.0',
  port: 3000
}
config.css = {
  name: 'app.css',
  in: path.join(__dirname, 'css', 'app.styl'),
  out: path.join(__dirname, 'public')
}
config.templatesDir = path.join(__dirname, 'templates/pages')

module.exports = config
