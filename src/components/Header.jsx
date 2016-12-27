const React = require('react');

const Header = ({img}) => (
  <div className="blurb blurb-header">
    <img src={img.src} alt={img.alt} />
  </div>
);

Header.propTypes = {
  img: React.PropTypes.object.isRequired
};

module.exports = Header;
