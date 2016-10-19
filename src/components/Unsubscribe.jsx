const React = require('react');

const Unsubscribe = ({link}) => (
  <div className="unsubscribe">
    <p>Don't want these emails? No worries!</p>
    <p><a href={link}>Click here to unsubscribe.</a></p>
  </div>
);

module.exports = Unsubscribe;
