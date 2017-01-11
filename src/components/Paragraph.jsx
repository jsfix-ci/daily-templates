const React = require('react');

const Paragraph = ({ data, isEditing, updateData }) => (
  isEditing ?
  <input
    className="blurb blurb-paragraph"
    type="text"
    value={data.text}
    onChange={(event) => updateData({ text: event.target.value })} />
  :
  <p className="blurb blurb-paragraph">{data.text}</p>
);

Paragraph.propTypes = {
  data: React.PropTypes.shape({
    text: React.PropTypes.string.isRequired
  }),
  isEditing: React.PropTypes.bool,
  updateData: React.PropTypes.func
};

module.exports = Paragraph;
