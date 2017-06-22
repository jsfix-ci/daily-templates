const React = require('react');
const PropTypes = require('prop-types');

const Tagline = ({ data, isEditing, updateData }) => (
  isEditing ?
  <input
    autoFocus={true}
    className="blurb blurb-tagline-editing"
    type="text"
    value={data.text}
    onChange={(event) => updateData({ text: event.target.value })} />
  :
  <span className="blurb blurb-tagline">{data.text}</span>
);

Tagline.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string
  }),
  isEditing: PropTypes.bool,
  updateData: PropTypes.func
};

module.exports = Tagline;
