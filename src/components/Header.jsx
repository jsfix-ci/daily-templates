const React = require('react');

const Header = ({img}) => (
  <div className="header">
    <img
      className="headerImg"
      width="197"
      src={img.src}
      alt={img.alt} />
  </div>
);

Header.propTypes = {
  img: React.PropTypes.object.isRequired
};

module.exports = Header;
