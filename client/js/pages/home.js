var PageView = require('./base')
var templates = require('../templates')

module.exports = PageView.extend({
  pageTitle: 'João Antunes',
  template: templates.pages.home
})
