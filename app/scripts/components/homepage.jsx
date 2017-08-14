var React = require('react');
var ReactGA = require('react-ga');

var HeaderComponent = require('./header.jsx');
var FooterComponent = require('./footer.jsx');

var HomepageComponent = React.createClass({
  googleAnalytics: function(){
    ReactGA.initialize('UA-104489668-1');
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);
  },
  render: function(){
    return (
      <div>
        <HeaderComponent />
        <div className="homepageBackgroundImage"></div>
        <FooterComponent />
      </div>
    );
  }
});

module.exports = HomepageComponent;
