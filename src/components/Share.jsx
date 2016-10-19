const React = require('react');
const Title = require('./Title');

const Share = ({emailImg, emailLink, smsImg, smsLink}) => (
  <div>
    <div>
      <Title text="Love these emails?" />
      <p>"Share the smiles with a friend!"</p>
    </div>
    <div>
      <div className="email-send-text-cell" width="50%">
        <a href={smsLink} className="email-no-underline">
          <img width="64" src={smsImg.src} alt={smsImg.alt} />
          <p className="email-green">Send a text</p>
        </a>
      </div>
      <div className="email-send-email-cell" width="50%">
        <a href={emailLink} className="email-no-underline">
          <img width="64" src={emailImg.src} alt={emailImg.alt} />
          <p className="email-blue">Send an email</p>
        </a>
      </div>
    </div>
  </div>
);

Share.propTypes = {
  emailImg: React.PropTypes.object.isRequired,
  emailLink: React.PropTypes.string.isRequired,
  smsImg: React.PropTypes.object.isRequired,
  smsLink: React.PropTypes.string.isRequired
};

module.exports = Share;
