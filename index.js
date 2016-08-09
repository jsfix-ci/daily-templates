const Promise = require('bluebird');
const mustache = require('mustache');
const path = require('path');
const readFile = Promise.promisify(require('fs').readFile);

module.exports = (templateName, mergeVars) => {
  const fileName = `${templateName}.mustache`;
  const pathName = path.join(__dirname, 'templates', fileName);

  return readFile(pathName, 'utf8')
  .then(template => mustache.render(template, mergeVars));
};
