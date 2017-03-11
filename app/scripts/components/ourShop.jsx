var React = require('react');

var HeaderComponent = require('./header.jsx');
var FooterComponent = require('./footer.jsx');


var OurShopComponent = React.createClass({
  render: function(){
    return (
      <div>
        <HeaderComponent />
        <div className="row">
          <img className="col-xs-offset-1 col-xs-5 outsideOfShopImage" src="images/outside-of-shop.jpg" />
          <img className="col-xs-5 extendedMenuImage" src="images/extended-menu.jpg" />
          <img className="col-xs-offset-1 col-xs-10 backCounterImage" src="images/back-counter.jpg" />
          <img className="col-xs-offset-1 col-xs-5 closeupOfEspressoMachingImage" src="images/closeup-of-espresso-machine.jpg" />
          <img className="col-xs-5 pouringLatteImage" src="images/pouring-latte.jpg" />
          <img className="col-xs-offset-1 col-xs-10 latteImage" src="images/latte.jpg" />
          <img className="col-xs-offset-1 col-xs-5 mapOnWallImage" src="images/map-on-wall.jpg" />
          <img className="col-xs-5 menuImage" src="images/menu.jpg" />
          <img className="col-xs-offset-1 col-xs-10 menuBoardsImage" src="images/menu-boards.jpg" />
        </div>
        <FooterComponent />
      </div>
    );
  }
});

module.exports = OurShopComponent;
