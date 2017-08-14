var React = require('react');
var ReactGA = require('react-ga');

var HeaderComponent = require('./header.jsx');
var FooterComponent = require('./footer.jsx');


var OurShopComponent = React.createClass({
  constructor(){
    ReactGA.initialize('UA-104489668-1');
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);
  };
  render: function(){
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
