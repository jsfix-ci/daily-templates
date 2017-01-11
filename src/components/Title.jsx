const React = require('react');

const Title = ({ data: { text }, isEditing, updateData }) => (
  isEditing ?
  <input
    className="blurb blurb-title"
    type="text"
    value={text}
    onChange={(event) => updateData({ text: event.target.value })} />
  :
  <h1 className="blurb blurb-title">{text}</h1>
);

Title.propTypes = {
  data: React.PropTypes.shape({
    text: React.PropTypes.string.isRequired
  }),
  isEditing: React.PropTypes.bool,
  updateData: React.PropTypes.func
};

module.exports = Title;
