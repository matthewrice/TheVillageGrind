var React = require('react');


var HeaderComponent = React.createClass({
  render: function(){
    return (
      <div className="headerContent">
        <div className="companyIdentifiers">
          <img className="companyLogo" src="images/companyLogo.png" />
          <img className="companyName" src="images/companyname.png" />
        </div>
        <div className="navbar">
          <a href="#homepage">Home</a>
          <a className="aboutUsNavLink" href="#aboutus">About Us</a>
          <a className="ourShopNavLink" href="#ourshop">Our Shop</a>
        </div>
      </div>
    );
  }
});

module.exports = HeaderComponent;
