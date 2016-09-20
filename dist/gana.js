require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],2:[function(require,module,exports){
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isArray = require('isarray');

module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && isArray(val) === false;
};

},{"isarray":1}],"gana":[function(require,module,exports){
/*!
 * gana <https://github.com/tunnckoCore/gana>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */
'use strict'

var isObject = require('isobject')

/**
 * > Compiles a `template` to a function, which
 * accepts `locals` object to populate the template.
 *
 * **Example**
 *
 * ```js
 * var gana = require('gana')
 *
 * var template = 'Welcome here, ${ucfirst(name)}! And have fun!'
 * var locals = {
 *   name: 'charlike',
 *   ucfirst: function ucfirst (val) {
 *     return val.charAt(0).toUpperCase() + val.slice(1)
 *   }
 * }
 *
 * var fn = gana(template)
 * var str = fn(locals)
 *
 * console.log(str)
 * // => 'Welcome here, Charlike! And have fun!'
 * ```
 *
 * @param  {String} `template` string to compile to a function
 * @return {Function} like `compileFn(locals)`, where `locals` must be `object`
 * @api public
 */

module.exports = function gana (template) {
  if (typeof template !== 'string') {
    throw new TypeError('gana: expect `template` to be a string')
  }

  return function compileFn (locals) {
    if (!isObject(locals)) {
      throw new TypeError('gana: expect `locals` to be an object')
    }

    var keys = []
    var vals = []

    for (var key in locals) {
      keys.push(key)
      vals.push(locals[key])
    }

    /* eslint-disable no-new-func */
    var fn = new Function(keys, 'return `' + template + '`')
    return fn.apply(locals, vals)
  }
}

},{"isobject":2}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pc29iamVjdC9pbmRleC5qcyIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvKiFcbiAqIGlzb2JqZWN0IDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pc29iamVjdD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIGlzQXJyYXkodmFsKSA9PT0gZmFsc2U7XG59O1xuIiwiLyohXG4gKiBnYW5hIDxodHRwczovL2dpdGh1Yi5jb20vdHVubmNrb0NvcmUvZ2FuYT5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgQ2hhcmxpa2UgTWlrZSBSZWFnZW50IDxAdHVubmNrb0NvcmU+IChodHRwOi8vd3d3LnR1bm5ja29jb3JlLnRrKVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG4ndXNlIHN0cmljdCdcblxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnaXNvYmplY3QnKVxuXG4vKipcbiAqID4gQ29tcGlsZXMgYSBgdGVtcGxhdGVgIHRvIGEgZnVuY3Rpb24sIHdoaWNoXG4gKiBhY2NlcHRzIGBsb2NhbHNgIG9iamVjdCB0byBwb3B1bGF0ZSB0aGUgdGVtcGxhdGUuXG4gKlxuICogKipFeGFtcGxlKipcbiAqXG4gKiBgYGBqc1xuICogdmFyIGdhbmEgPSByZXF1aXJlKCdnYW5hJylcbiAqXG4gKiB2YXIgdGVtcGxhdGUgPSAnV2VsY29tZSBoZXJlLCAke3VjZmlyc3QobmFtZSl9ISBBbmQgaGF2ZSBmdW4hJ1xuICogdmFyIGxvY2FscyA9IHtcbiAqICAgbmFtZTogJ2NoYXJsaWtlJyxcbiAqICAgdWNmaXJzdDogZnVuY3Rpb24gdWNmaXJzdCAodmFsKSB7XG4gKiAgICAgcmV0dXJuIHZhbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbC5zbGljZSgxKVxuICogICB9XG4gKiB9XG4gKlxuICogdmFyIGZuID0gZ2FuYSh0ZW1wbGF0ZSlcbiAqIHZhciBzdHIgPSBmbihsb2NhbHMpXG4gKlxuICogY29uc29sZS5sb2coc3RyKVxuICogLy8gPT4gJ1dlbGNvbWUgaGVyZSwgQ2hhcmxpa2UhIEFuZCBoYXZlIGZ1biEnXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGB0ZW1wbGF0ZWAgc3RyaW5nIHRvIGNvbXBpbGUgdG8gYSBmdW5jdGlvblxuICogQHJldHVybiB7RnVuY3Rpb259IGxpa2UgYGNvbXBpbGVGbihsb2NhbHMpYCwgd2hlcmUgYGxvY2Fsc2AgbXVzdCBiZSBgb2JqZWN0YFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdhbmEgKHRlbXBsYXRlKSB7XG4gIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZ2FuYTogZXhwZWN0IGB0ZW1wbGF0ZWAgdG8gYmUgYSBzdHJpbmcnKVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBpbGVGbiAobG9jYWxzKSB7XG4gICAgaWYgKCFpc09iamVjdChsb2NhbHMpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdnYW5hOiBleHBlY3QgYGxvY2Fsc2AgdG8gYmUgYW4gb2JqZWN0JylcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IFtdXG4gICAgdmFyIHZhbHMgPSBbXVxuXG4gICAgZm9yICh2YXIga2V5IGluIGxvY2Fscykge1xuICAgICAga2V5cy5wdXNoKGtleSlcbiAgICAgIHZhbHMucHVzaChsb2NhbHNba2V5XSlcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXctZnVuYyAqL1xuICAgIHZhciBmbiA9IG5ldyBGdW5jdGlvbihrZXlzLCAncmV0dXJuIGAnICsgdGVtcGxhdGUgKyAnYCcpXG4gICAgcmV0dXJuIGZuLmFwcGx5KGxvY2FscywgdmFscylcbiAgfVxufVxuIl19
