# Changelog

## 0.9.0

- Add `Tagline` blurb
- Update dependencies
- Remove `isRequired` from all PropTypes

## 0.8.0

- Add markdown support for `Title` and `Paragraph` blurbs

## 0.7.1

- Add `autoFocus={true}` for inputs
- Refactor `Paragraph` to use blurb use text area component

## 0.7.0

- Add `Image` blurb type with support for uploading files

## 0.6.1

- Add Babel ES2015 preset for ulgify compatibility

## 0.6.0

- Add edit modes for blurbs

## 0.5.0

- Remove title and description from `Share`
- Add `blurb` className to all blurbs

## 0.4.1

- Refactor classNames

## 0.4.0

- Add Email component
- Refactor Share
  - prop `emailImg` to `email.img`, now optional
  - prop `emailLink` to `email.href`
  - prop `smsImg` to `sms.img`, now optional
  - prop `smsLink` to `sms.href`
- Refactor Header prop `image` to `img`
- Refactor Unsubscribe prop `link` to `href`

## 0.3.0

- Add react components
- Add babel for JSX
- Refactor linter to use plain ESLint
- Remove handlebar templates

## 0.2.0

- Add dynamic CSS file for body.mustache
- Refactor template variables to be more generic
- Rename `-default` templates

## 0.1.0

- Add basic wrapper for mustache templates
