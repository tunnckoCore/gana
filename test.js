/*!
 * gana <https://github.com/tunnckoCore/gana>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */
'use strict'

var test = require('mukla')
var gana = require('./index')

/* eslint-disable no-template-curly-in-string */

test('should throw TypeError if `template` not a string', function (done) {
  function fixture () {
    gana(123)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /gana: expect `template` to be a string/)
  done()
})

test('should throw TypeError if `locals` not an object', function (done) {
  function fixture () {
    gana('foo ${bar} baz')(5555)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /gana: expect `locals` to be an object/)
  done()
})

test('should throw TypeError if `locals` is an array', function (done) {
  function fixture () {
    gana('foo, ${0}, ${1} and qux')([
      'bar',
      'baz'
    ])
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /gana: expect `locals` to be an object/)
  done()
})

test('should throw ReferenceError if not in `locals`', function (done) {
  function fixture () {
    gana('foo ${bar} baz')({
      name: 'yeah'
    })
  }
  test.throws(fixture, ReferenceError)
  test.throws(fixture, /bar is not defined/)
  done()
})

test('should gana(template) return compileFn function', function (done) {
  var fn = gana('foo ${name} bar')
  test.strictEqual(typeof fn, 'function')
  done()
})

test('should compileFn(object) return rendered string', function (done) {
  var res = gana('welcome here, ${name}!')({ name: 'charlike' })
  test.strictEqual(typeof res, 'string')
  test.strictEqual(res, 'welcome here, charlike!')
  done()
})

test('should also work if `this` is used in template', function (done) {
  var rendered = gana('that is ${this.feel} template engine')({
    feel: 'awesome'
  })
  test.strictEqual(rendered, 'that is awesome template engine')
  done()
})
