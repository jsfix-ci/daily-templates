const React = require('react');

const Unsubscribe = ({href}) => (
  <div className="blurb-unsubscribe">
    <p>Don't want these emails? No worries!</p>
    <p><a href={href}>Click here to unsubscribe.</a></p>
  </div>
);

Unsubscribe.propTypes = {
  href: React.PropTypes.string.isRequired
};

module.exports = Unsubscribe;
