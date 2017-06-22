const React = require('react');
const PropTypes = require('prop-types');
const ReactMarkdown = require('react-markdown');
const Textarea = require('react-textarea-autosize').default;

const Paragraph = ({ data, isEditing, updateData }) => (
  isEditing ?
  <Textarea
    autoFocus={true}
    className="blurb blurb-paragraph-editing"
    type="text"
    value={data.text}
    onChange={(event) => updateData({ text: event.target.value })} />
  :
  <ReactMarkdown
    allowedTypes={['Text', 'Paragraph', 'Softbreak', 'Hardbreak', 'Link', 'Emph', 'BlockQuote', 'List', 'Item', 'Strong']}
    className="blurb blurb-paragraph"
    skipHtml={true}
    source={data.text}
    unwrapDisallowed={true} />
);

Paragraph.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string
  }),
  isEditing: PropTypes.bool,
  updateData: PropTypes.func
};

module.exports = Paragraph;
