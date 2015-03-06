var PageView = require('./base');
var templates = require('../templates');

module.exports = PageView.extend({
  pageTitle: 'Home',
  template: templates.pages.home,
  positionX: 0,
  positionY: 0,
  randX: Math.random(),
  randY: Math.random(),
  moveX: 0.25,
  moveY: 0.25,
  maxMove: 10,
  velocity: 0.35,
  minVelocity: 0.25,
  events: {
    'mouseover .circle': 'showInfo',
    'mouseout .circle': 'hideInfo'
  },
  initialize: function(){
    var self = this;
    window.setInterval(function(){
      self.movement.apply(self);
    }, 100);
  },
  movement: function(){
  	var self = this;
  	var els = self.queryAll('.circle');
  	for (var i = 0; i < els.length; ++i) {
      var item = els[i];
      self.moveX = self.positionX >= self.maxMove ? - self.randX * (self.velocity + self.minVelocity) - self.minVelocity : self.moveX;
      self.moveX = self.positionX <= -self.maxMove ? self.randX * (self.velocity - self.minVelocity) + self.minVelocity : self.moveX;
      self.moveY = self.positionY >= self.maxMove ? - self.randY * (self.velocity + self.minVelocity) - self.minVelocity : self.moveY;
      self.moveY = self.positionY <= -self.maxMove ? self.randY * (self.velocity - self.minVelocity) + self.minVelocity : self.moveY;
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
