var systemFetch = System.fetch;
var defaults = {
  cjs: 'module.exports = function test () {}',
  es6: 'export default function test () {}'
};

System.fetch = function (load) {
  var System = this;
  var args = arguments;

  function somethingAsync (resolve, reject) {
    setTimeout(function () {
      var templateType = System.useES6 ? 'es6' : 'cjs';

      if (load.address.match(/test\.js$/)) {
        resolve(defaults[templateType]);
      } else {
        resolve(systemFetch.apply(System, args));
      }
    }, 20);
  }

  return new Promise(somethingAsync);
}
