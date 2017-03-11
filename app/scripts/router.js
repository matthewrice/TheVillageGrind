var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var HomepageComponent = require('./components/homepage.jsx');
var AboutUsComponent = require('./components/aboutUs.jsx');
var OurShopComponent = require('./components/ourShop.jsx');


var Router = Backbone.Router.extend({
  routes: {
    '': 'homepage',
    'homepage': 'homepage',
    'aboutus': 'aboutUs',
    'ourshop': 'ourShop'
  },
  homepage: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(HomepageComponent, {router: self}),
      document.getElementById('app')
    );
  },
  aboutUs: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(AboutUsComponent, {router: self}),
      document.getElementById('app')
    );
  },
  ourShop: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(OurShopComponent, {router: self}),
      document.getElementById('app')
    );
  }
});

var router = new Router();
module.exports = router;
