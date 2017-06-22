/*eslint-env browser*/
const React = require('react');
const PropTypes = require('prop-types');
const update = require('immutability-helper');

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
  <div>
    <input
      accept="image/*"
      className="blurb blurb-image-src-editing"
      type="file"
      onChange={(event) => {
        const file = event.target.files[0]; // Only allow for single file selection
        if (file) {
          base64DataForFile(file).then(srcData => updateData(update(data, { srcData: { $set: srcData } })));
        }
      }}
      onClick={(event) => event.target.value = null } />
    <input
      autoFocus={false}
      className="blurb blurb-image-alt-editing"
      type="text"
      placeholder="alt text"
      value={data.alt}
      onChange={(event) => updateData(update(data, { alt: { $set: event.target.value } }))} />
    <input
      autoFocus={false}
      className="blurb blurb-image-href-editing"
      type="text"
      placeholder="link"
      value={data.href}
      onChange={(event) => updateData(update(data, { href: { $set: event.target.value } }))} />
  </div>
  :
  data.href ?
    <a href={data.href}>
      <img
        alt={data.alt}
        className="blurb blurb-image"
        src={data.src} />
    </a>
    :
    <img
      alt={data.alt}
      className="blurb blurb-image"
      src={data.src} />
);

Image.propTypes = {
  data: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
    href: PropTypes.string
  }),
  isEditing: PropTypes.bool,
  updateData: PropTypes.func
};

module.exports = Image;
