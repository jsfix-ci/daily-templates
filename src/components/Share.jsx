const React = require('react');
const Title = require('./Title');

const Share = ({emailImg, emailLink, smsImg, smsLink}) => (
  <div className="share">
    <div>
      <Title text="Love these emails?" />
      <p>"Share the smiles with a friend!"</p>
    </div>
    <div>
      <div
        className="send-text-cell"
        width="50%">
        <a
          className="no-underline"
          href={smsLink} >
          <img
            className="smsImg"
            width="64"
            src={smsImg.src}
            alt={smsImg.alt} />
          <p className="green">Send a text</p>
        </a>
      </div>
      <div
        className="send-email-cell"
        width="50%">
        <a
          className="no-underline"
          href={emailLink} >
          <img
            className="emailImg"
            width="64"
            src={emailImg.src}
            alt={emailImg.alt} />
          <p className="blue">Send an email</p>
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
