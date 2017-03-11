var React = require('react');

var HeaderComponent = require('./header.jsx');
var FooterComponent = require('./footer.jsx');


var AboutUsComponent = React.createClass({
  render: function(){
    return (
      <div>
        <HeaderComponent />
        <div className="row aboutUsPage">
          <img className="col-xs-offset-2 col-xs-8 aboutUsImage" src="images/about-us-image.jpg" />
          <div className="col-xs-offset-2 col-xs-8 aboutUsSection">
            <div className="row blurb">
              <p>Hello friends!</p>
              <p className="blurbSpacing">We're The Village Grind! We opened our doors in January of 2014 on Pendleton Street in the Village of West Greenville. Our space is quaint and colorful and our friendly staff can't wait to show you around our tasty menu. We feature coffee from several local roasters & pastries that are baked fresh every morning! So whether you like a simple black coffee or a pour over, or a fun, flavored latte, infused with one of our homemade syrups, we can't wait to serve you! We even have a wide selection of teas, tea lattes, hot chocolate & flavored steamers for all you non-coffee-drinkers!</p>
              <p>Oh, and while you're in The Village -- don't forget to take a stroll and visit the neighboring shops and studios, featuring local artists and makers! You may be surprised to find so many hidden gems, just outside of downtown Greenville!</p>
            </div>
            <div className="row storeHours">
              <span className="storeHoursTitle col-xs-12">store hours &#58;</span>
              <ul className="schedule col-xs-12">
                <li className="col-xs-2 day">Monday &#45; Friday</li>
                <li className="col-xs-10 hours">8am&nbsp;&nbsp; &#45; 4pm</li>
                <li className="col-xs-2 day">Saturday</li>
                <li className="col-xs-10 hours">9am&nbsp;&nbsp; &#45; 4pm</li>
                <li className="col-xs-2 day">Sunday</li>
                <li className="col-xs-10 hours">10am &#45; 4pm</li>
              </ul>
            </div>
            {/*}<div className="row contactInfo">
              <span className="title col-xs-12">contact info &#58;</span>
              <div className="info">
                <a className="col-xs-12 address" href="https://www.google.com/maps/place/The+Village+Grind/@34.8472404,-82.431156,17z/data=!3m1!4b1!4m5!3m4!1s0x885831ab2b260e9f:0x7c29303ecf958066!8m2!3d34.8472404!4d-82.4289673" target="_blank">1263 Pendleton St, Greenville, SC 29611</a>
                <a className="col-xs-12 phoneNumber" href="tel:864-915-8600">864.915.8600</a>
              </div>
            </div>
            <div className="row socialAccounts">
              <span>Let's get social! Follow us on </span>
              <a className="facebook" href="https://www.facebook.com/thevillagegrind/" target="_blank">Facebook</a>
              <span> and </span>
              <a className="instagram" href="https://www.instagram.com/thevillagegrind/" target="_blank">Instagram</a>
              <span>.</span>
            </div>*/}
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
});

module.exports = AboutUsComponent;
