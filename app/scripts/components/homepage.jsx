var React = require('react');

var HeaderComponent = require('./header.jsx');
var FooterComponent = require('./footer.jsx');

var HomepageComponent = React.createClass({
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
