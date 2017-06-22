const React = require('react');
const PropTypes = require('prop-types');

const Unsubscribe = ({ data, isEditing, updateData }) => (
  isEditing ?
  <input
    autoFocus={true}
    className="blurb blurb-unsubscribe-editing"
    type="text"
    value={data.href}
    onChange={(event) => updateData({ href: event.target.value })} />
  :
  <div className="blurb blurb-unsubscribe">
    <p>Don't want these emails? No worries!</p>
    <p><a href={data.href} data-pm-no-track>Click here to unsubscribe.</a></p>
  </div>
);

Unsubscribe.propTypes = {
  data: PropTypes.shape({
    href: PropTypes.string
  }),
  isEditing: PropTypes.bool,
  updateData: PropTypes.func
};

module.exports = Unsubscribe;
