const React = require('react');

const Title = ({text}) => (
  <h1 className="title">{text}</h1>
);

Title.propTypes = {
  text: React.PropTypes.string.isRequired
};

module.exports = Title;
