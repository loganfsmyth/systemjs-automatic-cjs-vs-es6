'use strict';

var babel = require('babel');
var hotPlugin = require('babel-plugin-react-hot');

exports.translate = function (load) {
  var babelOptions = System.babelOptions || {};
  var split = load.address.split('/');
  var filename = split.pop();
  var options = {};
  var output;

  options.filename = filename;
  options.sourceMap = 'inline';
  options.sourceFileName = filename+'!source';

  options.stage = babelOptions.stage || 0;
  options.optional = babelOptions.optional || ['runtime'];
  options.plugins = (babelOptions.plugins || []).concat(hotPlugin);
  
  try {
    output = babel.transform(load.source, options);
    load.source = output.code;
  } catch (err) {
    delete options.sourceMap;
    output = babel.transform(load.source, options);
    load.source = output.code;
  }
};
