var $ = window.jQuery = require('jquery');
var Backbone = require('backbone');
require('./router');


$(function(){
  Backbone.history.start();
});
