const React = require('react');
const Title = require('./Title');

const Share = ({email, sms}) => (
  <div className="share">
    <div>
      <Title text="Love these emails?" />
      <p>"Share the smiles with a friend!"</p>
    </div>
    <div>
      {email && <div
        className="send-email-cell"
        width="50%">
        <a
          className="no-underline"
          href={email.href} >
          {email.img && <img
            className="emailImg"
            width="64"
            src={email.img.src}
            alt={email.img.alt} />}
          <p className="blue">Send an email</p>
        </a>
      </div>}
      {sms && <div
        className="send-text-cell"
        width="50%">
        <a
          className="no-underline"
          href={sms.href} >
          {sms.img && <img
            className="smsImg"
            width="64"
            src={sms.img.src}
            alt={sms.img.alt} />}
          <p className="green">Send a text</p>
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
