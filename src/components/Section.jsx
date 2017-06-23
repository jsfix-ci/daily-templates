const React = require('react');
const PropTypes = require('prop-types');
const update = require('immutability-helper');

const types = [ "red", "orange", "yellow", "green", "blue", "purple", "gray" ];

const Section = ({ data, isEditing, updateData }) => (
  isEditing ?
  <div>
    <select
      autoFocus={false}
      className="blurb blurb-section-type-editing"
      value={data.type}
      onChange={(event) => updateData(update(data, { type: { $set: event.target.value } }))}>
        <option value="">Select</option>
        {
          types.map(type =>
            <option key={type} value={type}>
              {type}
            </option>
          )
        }
    </select>
    <input
      autoFocus={true}
      className="blurb blurb-section-text-editing"
      type="text"
      value={data.text}
      onChange={(event) => updateData(update(data, { text: { $set: event.target.value } }))} />
  </div>
  :
  <span className={`$blurb blurb-section blurb-section-${data.type}`}>{data.text}</span>
);

Section.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.number,
    text: PropTypes.string
  }),
  isEditing: PropTypes.bool,
  updateData: PropTypes.func
};

module.exports = Section;
