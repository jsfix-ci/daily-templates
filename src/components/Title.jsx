const React = require('react');

const Title = ({text}) => (
  <h1 className="blurb-title">{text}</h1>
);

Title.propTypes = {
  text: React.PropTypes.string.isRequired
};

module.exports = Title;
