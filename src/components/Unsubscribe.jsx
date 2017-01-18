const React = require('react');

const Unsubscribe = ({ data, isEditing, updateData }) => (
  isEditing ?
  <input
    className="blurb blurb-unsubscribe-editing"
    type="text"
    value={data.href}
    onChange={(event) => updateData({ href: event.target.value })} />
  :
  <div className="blurb blurb-unsubscribe">
    <p>Don't want these emails? No worries!</p>
    <p><a href={data.href}>Click here to unsubscribe.</a></p>
  </div>
);

Unsubscribe.propTypes = {
  data: React.PropTypes.shape({
    href: React.PropTypes.string.isRequired
  }),
  isEditing: React.PropTypes.bool,
  updateData: React.PropTypes.func
};

module.exports = Unsubscribe;
