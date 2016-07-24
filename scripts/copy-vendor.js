var copy = require('copy'),
    files = [
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/zone.js/dist/**/*.+(js|js.map)',
      'node_modules/es6-shim/es6-shim.js',
      'node_modules/es6-promise/dist/es6-promise.js',
      'node_modules/reflect-metadata/**/*.+(js|js.map)',
      'node_modules/rxjs/**/*.+(js|js.map)',
      'node_modules/@angular/**/*.+(js|js.map)',
      'node_modules/angular2-universal/**/*.+(js|js.map)',
      'node_modules/angular2-universal-polyfills/**/*.+(js|js.map)'
    ],
    dest = 'dist/vendor',
    options = {
      srcBase: 'node_modules'
    };

function copyList(files) {
  var coll = files.slice(0); // clone collection
  (function insertOne() {
    var record = coll.splice(0, 1)[0]; // get the first record of coll and reduce coll by one
    copy(record, dest, options, function (err) {
      if (err) throw err;
      if (coll.length > 0) {
        insertOne();
      }
    });
  })();
}

copyList(files);
