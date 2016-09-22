/*!
 * gana <https://github.com/tunnckoCore/gana>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

/**
 * > Sync and async compile, using `${}` delimiters
 * and ES2015 Template Strings. Workin' on node@0.10 too.
 *
 * **Example**
 *
 * ```js
 * var gana = require('gana')
 *
 * var template = 'Hello, ${ucfirst(author.name)}! Welcome in our ${place}.'
 * var locals = {
 *   author: {
 *     name: 'charlike'
 *   },
 *   place: 'club',
 *   ucfirst: function ucfirst (val) {
 *     return val.charAt(0).toUpperCase() + val.slice(1)
 *   }
 * }
 *
 * // sync
 * var compileFn = gana(template)
 * var result = compileFn(locals)
 * console.log(result)
 * // => 'Hello, Charlike! Welcome in our club.'
 *
 * // asynchronous
 * gana(template, function callback (err, compileFn) {
 *   if (err) return console.error(err)
 *
 *   var result = compileFn(locals)
 *   console.log(result)
 *   // => 'Hello, Charlike! Welcome in our club.'
 * })
 * ```
 *
 * @param  {String}   `<template>` template to compile.
 * @param  {Function} `[cb]` optional, function with `cb(err, compileFn)` signature.
 * @return {Function} if no `cb`, returns `compileFn` that accept object.
 * @api public
 */

module.exports = function gana (template, cb) {
  if (typeof cb === 'function') {
    utils.tryCatchCore(function () {
      return utils.ganaCompile(template)
    }, cb)
    return
  }
  return utils.ganaCompile(template)
}
