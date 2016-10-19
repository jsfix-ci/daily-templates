const React = require('react');

const Header = ({image}) => (
  <div className="header">
    <img
      className="headerImg"
      width="197"
      src={image.src}
      alt={image.alt} />
  </div>
);

Header.propTypes = {
  image: React.PropTypes.object.isRequired
};

module.exports = Header;
