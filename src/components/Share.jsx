const React = require('react');
const Title = require('./Title');

const Share = ({email, sms}) => (
  <div className="blurb-share">
    <div>
      <Title text="Love these emails?" />
      <p>"Share the smiles with a friend!"</p>
    </div>
    <div>
      {email && <div className="blurb-share-email">
        <a className="no-underline" href={email.href}>
          {email.img && <img src={email.img.src} alt={email.img.alt} />}
          <p>Send an email</p>
        </a>
      </div>}
      {sms && <div className="blurb-share-sms">
        <a className="no-underline" href={sms.href}>
          {sms.img && <img src={sms.img.src} alt={sms.img.alt} />}
          <p>Send a text</p>
        </a>
      </div>}
    </div>
  </div>
);

Share.propTypes = {
  email: React.PropTypes.object,
  sms: React.PropTypes.object
};

module.exports = Share;
