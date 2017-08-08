var React = require('react');

var HeaderComponent = require('./header.jsx');
var FooterComponent = require('./footer.jsx');


var AboutUsComponent = React.createClass({
  render: function(){
    return (
      <div>
        <HeaderComponent />
        <div className="aboutUsPage">
          <div className="col-md-offset-2 col-md-8 aboutUsImage"></div>
          <div className="col-md-offset-2 col-md-8 aboutUsSection">
            <div className="blurb">
              <p>Hello friends!</p>
              <p className="blurbSpacing">We're The Village Grind! We opened our
                doors in January of 2015 on Pendleton Street in the Village of West
                Greenville. Our space is quaint and colorful and our friendly staff
                can't wait to show you around our tasty menu. We feature coffee from
                several local roasters and pastries that are baked fresh every morning!
                So whether you like a simple black coffee, a pour over, or a fun,
                flavored latte infused with one of our homemade syrups, we can't
                wait to serve you! We even have a wide selection of teas, tea lattes,
                hot chocolate and flavored steamers for all you non-coffee drinkers!</p>
              <p>Oh, and while you're in The Village -- don't forget to take a
                stroll and visit the neighboring shops and studios, featuring
                local artists and makers! You may be surprised to find so many
                hidden gems just outside of downtown Greenville!</p>
            </div>
            <div className="storeHours">
              <span className="storeHoursTitle">store hours &#58;</span>
              <div className="schedule">
                <div>
                  <span className="weekday">Monday &#45; Friday</span>
                  <i className="arrowIcon fa fa-angle-double-right" aria-hidden="true"></i>
                  <span>8am &#45; 4pm</span>
                </div>
                <div>
                  <span className="saturday">Saturday</span>
                  <i className="arrowIcon fa fa-angle-double-right" aria-hidden="true"></i>
                  <span>9am &#45; 4pm</span>
                </div>
                <div>
                  <span className="sunday">Sunday</span>
                  <i className="arrowIcon sundayArrowIcon sundayArrowIconMediaQuery991px fa fa-angle-double-right" aria-hidden="true"></i>
                  <span>10am &#45; 4pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
});

module.exports = AboutUsComponent;
