const React = require('react');
const PropTypes = require('prop-types');
const update = require('immutability-helper');

const Share = ({ data, isEditing, updateData }) => (
  isEditing ?
  <div className="blurb blurb-share-editing">
    <div className="blurb-share-email-editing">
      <input
        className="blurb-share-email-editing-href"
        type="text"
        value={data.email.href}
        onChange={(event) => updateData(update(data, {
          email: {
            $set: { href: event.target.value }
          }
        }))} />
      <input
        className="blurb-share-email-editing-src"
        type="text"
        value={data.email.img.src}
        onChange={(event) => updateData(update(data, {
          email: {
            img: {
              $set: { src: event.target.value }
            }
          }
        }))} />
      <input
        className="blurb-share-email-editing-alt"
        type="text"
        value={data.email.img.alt}
        onChange={(event) => updateData(update(data, {
          email: {
            img: {
              $set: { alt: event.target.value }
            }
          }
        }))} />
    </div>
    <div className="blurb-share-sms-editing">
      <input
        className="blurb-share-sms-editing-href"
        type="text"
        value={data.sms.href}
        onChange={(event) => updateData(update(data, {
          sms: {
            $set: { href: event.target.value }
          }
        }))} />
      <input
        className="blurb-share-sms-editing-src"
        type="text"
        value={data.sms.img.src}
        onChange={(event) => updateData(update(data, {
          sms: {
            img: {
              $set: { src: event.target.value }
            }
          }
        }))} />
      <input
        className="blurb-share-sms-editing-alt"
        type="text"
        value={data.sms.img.alt}
        onChange={(event) => updateData(update(data, {
          sms: {
            img: {
              $set: { alt: event.target.value }
            }
          }
        }))} />
    </div>
  </div>
  :
  <div className="blurb blurb-share">
    {data.email && <div className="blurb-share-email">
      <a className="no-underline" href={data.email.href}>
        {data.email.img && <img src={data.email.img.src} alt={data.email.img.alt} />}
        <p>Send an email</p>
      </a>
    </div>}
    {data.sms && <div className="blurb-share-sms">
      <a className="no-underline" href={data.sms.href}>
        {data.sms.img && <img src={data.sms.img.src} alt={data.sms.img.alt} />}
        <p>Send a text</p>
      </a>
    </div>}
  </div>
);

Share.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.shape({
      href: PropTypes.string,
      img: PropTypes.shape({
        alt: PropTypes.string,
        src: PropTypes.string
      })
    }),
    sms: PropTypes.shape({
      href: PropTypes.string,
      img: PropTypes.shape({
        alt: PropTypes.string,
        src: PropTypes.string
      })
    })
  }),
  isEditing: PropTypes.bool,
  updateData: PropTypes.func
};

module.exports = Share;
