const React = require('react');
const ReactMarkdown = require('react-markdown');

const Paragraph = ({ data, isEditing, updateData }) => (
  isEditing ?
  <textarea
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
  data: React.PropTypes.shape({
    text: React.PropTypes.string.isRequired
  }),
  isEditing: React.PropTypes.bool,
  updateData: React.PropTypes.func
};

module.exports = Paragraph;
