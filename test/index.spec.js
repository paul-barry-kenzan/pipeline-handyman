/*jshint -W030 */
'use strict';

var expect = require('chai').expect;
var handyman = require('../');
var packageName = require('../package.json').name;
var sinon = require('sinon');
var util = require('gulp-util');

describe('gulp-handyman', function () {

  describe('Update configuration', function () {
    var defaultConfig, providerConfig;

    beforeEach(function () {
      sinon.spy(util, 'log');

      defaultConfig = {
        key1: 'test',
        key2: true
      };
      providerConfig = {
        key1: 'userKey'
      };
    });

    afterEach(function () {
      util.log.restore();
    });

    it('Should update the default configuration', function () {

      var updatedConf = handyman.mergeConf(defaultConfig, providerConfig);

      expect(updatedConf.key1).to.equal('userKey');
      expect(updatedConf.key2).to.be.true;
    });

    it('Should replace arrays if necessary', function () {
      defaultConfig.key3 = ['A1'];
      providerConfig.key3 = ['A2', 'A1'];

      var updatedConf = handyman.mergeConf(defaultConfig, providerConfig);

      expect(updatedConf.key1).to.equal('userKey');
      expect(updatedConf.key2).to.be.true;
      expect(updatedConf.key3).to.eql(['A2', 'A1']);
    });

  });

  describe('log', function () {

    it('Should test that log works when passed a string', function () {

      handyman.log('hello world');
      expect(util.log.calledOnce);
    });

    it('Should test that log works when place a flat object', function () {

      handyman.log({length: 4});
      expect(util.log.calledOnce);
    });

    it('Should test that log works when passed an object with two properties', function () {

      handyman.log({hello: 'value', key: 'something'});
      expect(util.log.calledOnce);
    });

  });

  describe('Get package name', function () {

    it('Should get package name from package.json', function () {

      var handyPackageName = handyman.getPackageName();
      expect(handyPackageName).to.equal(packageName);
    });

  });

});