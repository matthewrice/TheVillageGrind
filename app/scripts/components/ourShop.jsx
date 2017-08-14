var React = require('react');

var HeaderComponent = require('./header.jsx');
var FooterComponent = require('./footer.jsx');


var OurShopComponent = React.createClass({
  render: function(){

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-104489668-1', 'auto');
    ga('send', 'pageview');

    return (
      <div>
        <HeaderComponent />
        <div className="row">
          <img className="col-xs-6 col-md-offset-1 col-md-5 outsideOfShopImage" src="images/outside-of-shop.jpg" />
          <img className="col-xs-6 col-md-5 extendedMenuImage" src="images/extended-menu.jpg" />
          <img className="col-xs-12 col-md-offset-1 col-md-10 backCounterImage" src="images/back-counter.jpg" />
          <img className="col-xs-6 col-md-offset-1 col-md-5 closeupOfEspressoMachingImage" src="images/closeup-of-espresso-machine.jpg" />
          <img className="col-xs-6 col-md-5 pouringLatteImage" src="images/pouring-latte.jpg" />
          <img className="col-xs-12 col-md-offset-1 col-md-10 latteImage" src="images/latte.jpg" />
          <img className="col-xs-6 col-md-offset-1 col-md-5 mapOnWallImage" src="images/map-on-wall.jpg" />
          <img className="col-xs-6 col-md-5 menuImage" src="images/menu.jpg" />
          <img className="col-xs-12 col-md-offset-1 col-md-10 menuBoardsImage" src="images/menu-boards.jpg" />
        </div>
        <FooterComponent />
      </div>
    );
  }
});

module.exports = OurShopComponent;
