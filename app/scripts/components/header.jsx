var React = require('react');
require('bootstrap-sass');


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
        <div className="mediaQuery650vwNavBarDropdown">
          <i className="fa fa-bars dropdown-toggle fontawesome-navbars" aria-hidden="true" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></i>
          <ul className="dropdown-menu">
            <li className="menu"><a className="navLinks" href="#homepage">Home</a></li>
            <li className="menu"><a className="navLinks" href="#aboutus">About Us</a></li>
            <li className="menu"><a className="navLinks" href="#ourshop">Our Shop</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = HeaderComponent;
