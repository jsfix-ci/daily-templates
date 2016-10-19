const React = require('react');

const Paragraph = ({text}) => (
  <p className="paragraph">{text}</p>
);

Paragraph.propTypes = {
  text: React.PropTypes.string.isRequired
};

module.exports = Paragraph;
