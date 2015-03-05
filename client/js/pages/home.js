var PageView = require('./base');
var templates = require('../templates');
var browsernizr = require('browsernizr');

module.exports = PageView.extend({
  pageTitle: 'Home',
  template: templates.pages.home,
  positionX: 0,
  positionY: 0,
  moveX: 0.15,
  moveY: 0.15,
  maxMove: 10,
  velocity: 0.35,
  minVelocity: 0.25,
  events: {
    'mouseover .circle': 'showInfo',
    'mouseout .circle': 'hideInfo'
  },
  initialize: function(){
    var self = this;
    if(browsernizr.touch){
      alert('Touch Screen');
    }
    else{
      alert('No Touch Screen');
    }
    window.setInterval(function(){
      self.movement.apply(self);
    }, 100);
  },
  movement: function(){
  	var self = this;
  	var els = self.queryAll('.circle');
  	for (var i = 0; i < els.length; ++i) {
      var item = els[i];
      self.moveX = self.positionX >= self.maxMove ? - Math.random() * (self.velocity + self.minVelocity) - self.minVelocity : self.moveX;
      self.moveX = self.positionX <= -self.maxMove ? Math.random() * (self.velocity - self.minVelocity) + self.minVelocity : self.moveX;
      self.moveY = self.positionY >= self.maxMove ? - Math.random() * (self.velocity + self.minVelocity) - self.minVelocity : self.moveY;
      self.moveY = self.positionY <= -self.maxMove ? Math.random() * (self.velocity - self.minVelocity) + self.minVelocity : self.moveY;
      self.positionX += self.moveX;
      self.positionY += self.moveY;
      item.style.left = self.positionX + 'px';
      item.style.top = self.positionY + 'px';
    }
  },
  showInfo: function(event){
    event.delegateTarget.parentNode.parentNode.querySelector('.circle-info').classList.remove('no-opacity');
  },
  hideInfo: function(event){
    console.log('on hide');
    event.delegateTarget.parentNode.parentNode.querySelector('.circle-info').classList.add('no-opacity');
  },
});
