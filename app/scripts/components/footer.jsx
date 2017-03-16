var React = require('react');


var FooterComponent = React.createClass ({
  render: function(){
    return (
      <div className="footer">
        <div className="socialIcons">
          <a className="facebookIcon icon" href="https://www.facebook.com/thevillagegrind/" target="_blank">
            {/*<div className="facebookIcon"></div>*/}
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
          <a className="instagramIcon icon" href="https://www.instagram.com/thevillagegrind/" target="_blank">
            {/*<div className="instagramIcon"></div>*/}
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contactInfo">
          <a href="https://www.google.com/maps/place/The+Village+Grind/@34.8472404,-82.431156,17z/data=!3m1!4b1!4m5!3m4!1s0x885831ab2b260e9f:0x7c29303ecf958066!8m2!3d34.8472404!4d-82.4289673" target="_blank">1263 Pendleton St, Greenville, SC 29611</a>
          <a className="phoneNumber" href="tel:864-915-8600">864.915.8600</a>
        </div>
        <div className="contactInfoIcons">
          <a className="icon locationIcon" href="https://www.google.com/maps/place/The+Village+Grind/@34.8472404,-82.431156,17z/data=!3m1!4b1!4m5!3m4!1s0x885831ab2b260e9f:0x7c29303ecf958066!8m2!3d34.8472404!4d-82.4289673" target="_blank">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
          </a>
          <a className="icon cellPhoneIcon" href="tel:864-915-8600">
            <i className="fa fa-mobile" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
});

module.exports = FooterComponent;
