/*!
 * gana <https://github.com/tunnckoCore/gana>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

module.exports = function gana (template, cb) {
  if (typeof cb === 'function') {
    utils.tryCatchCore(function () {
      return utils.ganaCompile(template)
    }, cb)
    return
  }
  return utils.ganaCompile(template)
}
