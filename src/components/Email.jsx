const React = require('react');

const Email = ({children, cssHref, subject}) => (
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>{subject}</title>
      {cssHref && <link rel="stylesheet" type="text/css" href={cssHref} />}
    </head>
    <body className="email">
      <div class="email-container blurbs">
        {children}
      </div>
    </body>
  </html>
);

Email.propTypes = {
  children: React.PropTypes.node,
  cssHref: React.PropTypes.string,
  subject: React.PropTypes.string
};

module.exports = Email;
