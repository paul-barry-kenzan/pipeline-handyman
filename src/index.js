/* global require, module */
'use strict';

var _ = require('lodash');
var fs = require('fs');
var util = require('gulp-util');

module.exports = {

  mergeConf: mergeConf,
  log: log,
  getPackageName: getPackageName
};

function mergeConf(config, newConfig) {
  return _.merge({}, config, newConfig, replaceArrays);
}

function replaceArrays(a, b) {
  if (_.isArray(a)) {
    return b;
  }
}

function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        util.log(util.colors.blue(msg[item]));
      }
    }
  } else {
    util.log(util.colors.blue(msg));
  }
}

function getPackageName() {
  var packageJson = JSON.parse(fs.readFileSync('./package.json'));
  return packageJson.name;
}