const React = require('react');
const PropTypes = require('prop-types');
const update = require('immutability-helper');

const Header = ({ data, isEditing, updateData }) => (
  isEditing ?
  <div className="blurb blurb-header-editing">>
    <input
      className="blurb-header-editing-src"
      type="text"
      value={data.img.src}
      onChange={(event) => updateData(update(data, {
        img: {
          $set: { src: event.target.value }
        }
      }))} />
    <input
      className="blurb-header-editing-alt"
      type="text"
      value={data.img.alt}
      onChange={(event) => updateData(update(data, {
        img: {
          $set: { alt: event.target.value }
        }
      }))} />
  </div>
  :
  <div className="blurb blurb-header">
    <img src={data.img.src} alt={data.img.alt} />
  </div>
);

Header.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.shape({
      alt: PropTypes.string,
      src: PropTypes.string.isRequired
    })
  }),
  isEditing: PropTypes.bool,
  updateData: PropTypes.func
};

module.exports = Header;
