var React = require('react');

var HeaderComponent = require('./header.jsx');
var FooterComponent = require('./footer.jsx');

var HomepageComponent = React.createClass({
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
        <div className="homepageBackgroundImage"></div>
        <FooterComponent />
      </div>
    );
  }
});

module.exports = HomepageComponent;
