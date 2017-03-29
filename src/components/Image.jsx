/*eslint-env browser*/

const React = require('react');

const base64DataForFile = (file) => {
  return new window.Promise((resolve, reject) => {
    let reader = new window.FileReader();
    reader.onload = result => {
      const data = result && result.target && result.target.result;
      data ? resolve(data) : reject();
    };
    reader.readAsDataURL(file);
  });
};

const Image = ({ data, isEditing, updateData }) => (
  isEditing ?
  <input
    accept="image/*"
    className="blurb blurb-image-editing"
    type="file"
    onChange={(event) => {
      const file = event.target.files[0]; // Only allow for single file selection
      if (file) {
        base64DataForFile(file).then(srcData => updateData({ srcData }));
      }
    }}
    onClick={(event) => event.target.value = null } />
  :
  <img
    alt={data.alt}
    className="blurb blurb-image"
    src={data.src} />
);

Image.propTypes = {
  data: React.PropTypes.shape({
    alt: React.PropTypes.string,
    src: React.PropTypes.string
  }),
  isEditing: React.PropTypes.bool,
  updateData: React.PropTypes.func
};

module.exports = Image;
