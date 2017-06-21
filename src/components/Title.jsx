const React = require('react');
const PropTypes = require('prop-types');
const ReactMarkdown = require('react-markdown');

const Title = ({ data, isEditing, updateData }) => (
  isEditing ?
  <input
    autoFocus={true}
    className="blurb blurb-title-editing"
    type="text"
    value={data.text}
    onChange={(event) => updateData({ text: event.target.value })} />
  :
  <ReactMarkdown
    allowedTypes={['Text', 'Link', 'Emph', 'Strong']}
    className="blurb blurb-title"
    containerTagName="h1"
    skipHtml={true}
    source={data.text}
    unwrapDisallowed={true} />
);

Title.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired
  }),
  isEditing: PropTypes.bool,
  updateData: PropTypes.func
};

module.exports = Title;
