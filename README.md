# [gana][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Small and powerful template engine with only sync and async compile. The mid-level between [es6-template][] and [gana-compile][].

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

You might also be interested:
- [es6-template][] - higher level than `gana` and `gana-compile`, adds `.render` and `.compile` methods. (**~1.5-2kb**)
- [gana-compile][] - lower level than `gana`, which does only synchronous compile. (**~1.1kb**)
- gana is just **~1.5kb** minified, not gzipped.

## Background

**Uses the "bad" `new Function` thing**

I don't think that's a problem, because other template engines out there also uses some kind of `eval` and it is used massively, believe. Most of them uses `eval`, most of them uses `with`, others of them uses `RegExp`s and etc. They all are with custom non-standard delimiters. They do too much to accomplish same results as `gana`. They requires too big codebase - and finally what, they still uses some of the "bad" things in JS.  
In other side, `gana-compile` (which is behind this package) uses **only** new Function and nothing more. The whole core logic thing is just 3-5 lines of code.

**Biggest names uses "bad" things, too**

Names such [verb][], [update][], [templates][], [generate][], [assemble][] in our community uses [engine][] / [engine-base][] / [engine-cache][] - `engine` uses `with`, `new Function` and `RegExp`. Not to mention some of the most famous "real" template engines with features like partials, helpers and etc. You can have partials and helpers here in `gana` too. The most awesome thing of the `engine` that is used by `verb` and `assemble` is they can have **asynchronous helpers** - that's awesome, really! But if you will use bad things anyway, the core logic can be done a lot easier, with a lot smaller codebase.

**Tricking magic**

Behind the scenes `gana` / `gana-compile` uses [ES2015 (ES6) template strings](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/template_strings) inside the bad `new Function` which seems to **work even in `node@0.10`** which don't have support for Template Strings! That's strange, but it works and give us that awesome and small codebase without any costs. You just pass normal string `'foo ${bar} and baz'` and then `{ bar: 'bar' }` in the returned function.

**Note about [standard][] (>= v8) users**

Recently in [standard][] was added rule that ban usage of `${}` in normal `''` strings. So be awere of that and add `/* eslint-disable no-template-curly-in-string */` comment before your stuff to get things working without problems.

## Install
```
npm i gana --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const gana = require('gana')
```

### [gana](index.js#L54)
> Sync and async compile, using `${}` delimiters and ES2015 Template Strings. Workin' on node@0.10 too.

**Params**

* `<template>` **{String}**: template to compile.    
* `[cb]` **{Function}**: optional, function with `cb(err, compileFn)` signature.    
* `returns` **{Function}**: if no `cb`, returns `compileFn` that accept object.  

**Example**

```js
var gana = require('gana')

var template = 'Hello, ${ucfirst(author.name)}! Welcome in our ${place}.'
var locals = {
  author: {
    name: 'charlike'
  },
  place: 'club',
  ucfirst: function ucfirst (val) {
    return val.charAt(0).toUpperCase() + val.slice(1)
  }
}

// sync
var compileFn = gana(template)
var result = compileFn(locals)
console.log(result)
// => 'Hello, Charlike! Welcome in our club.'

// asynchronous
gana(template, function callback (err, compileFn) {
  if (err) return console.error(err)

  var result = compileFn(locals)
  console.log(result)
  // => 'Hello, Charlike! Welcome in our club.'
})
```

## Related
- [async-helpers](https://www.npmjs.com/package/async-helpers): Use async helpers in templates with engines that typically only handle sync… [more](https://github.com/doowb/async-helpers) | [homepage](https://github.com/doowb/async-helpers "Use async helpers in templates with engines that typically only handle sync helpers. Handlebars and Lodash have been tested.")
- [engine-base](https://www.npmjs.com/package/engine-base): Default engine for Template. | [homepage](https://github.com/jonschlinkert/engine-base "Default engine for Template.")
- [es6-template](https://www.npmjs.com/package/es6-template): Easy and small template engine for the browser and nodejs. | [homepage](https://github.com/tunnckocore/es6-template#readme "Easy and small template engine for the browser and nodejs.")
- [gana-compile](https://www.npmjs.com/package/gana-compile): Pretty small synchronous template engine built on ES2015 Template Strings, working on… [more](https://github.com/tunnckocore/gana-compile#readme) | [homepage](https://github.com/tunnckocore/gana-compile#readme "Pretty small synchronous template engine built on ES2015 Template Strings, working on `node@0.10` too. No RegExps, support for helpers and what you want. Use [gana][] if you wanna both async and sync support.")
- [j140](https://www.npmjs.com/package/j140): Template engine in 140 bytes, by @jed Schmidt. Support helpers, partials and… [more](https://github.com/tunnckocore/j140#readme) | [homepage](https://github.com/tunnckocore/j140#readme "Template engine in 140 bytes, by @jed Schmidt. Support helpers, partials and pre-compiled templates. For nodejs and the browser. Browserify-ready.")
- [octet](https://www.npmjs.com/package/octet): 1kb template engine for the browser and nodejs. Support helpers, partials and… [more](https://github.com/tunnckocore/octet#readme) | [homepage](https://github.com/tunnckocore/octet#readme "1kb template engine for the browser and nodejs. Support helpers, partials and more. Used in AbsurdJS.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/gana/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[assemble]: https://github.com/assemble/assemble
[engine-base]: https://github.com/jonschlinkert/engine-base
[engine-cache]: https://github.com/jonschlinkert/engine-cache
[engine]: https://github.com/jonschlinkert/engine
[es6-template]: https://github.com/tunnckocore/es6-template
[gana-compile]: https://github.com/tunnckocore/gana-compile
[gana]: https://github.com/tunnckocore/gana
[generate]: https://github.com/generate/generate
[standard]: http://standardjs.com
[templates]: https://github.com/jonschlinkert/templates
[update]: https://github.com/update/update
[verb]: https://github.com/verbose/verb

[npmjs-url]: https://www.npmjs.com/package/gana
[npmjs-img]: https://img.shields.io/npm/v/gana.svg?label=gana

[license-url]: https://github.com/tunnckoCore/gana/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/gana.svg

[downloads-url]: https://www.npmjs.com/package/gana
[downloads-img]: https://img.shields.io/npm/dm/gana.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/gana
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/gana.svg

[travis-url]: https://travis-ci.org/tunnckoCore/gana
[travis-img]: https://img.shields.io/travis/tunnckoCore/gana/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/gana
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/gana.svg

[david-url]: https://david-dm.org/tunnckoCore/gana
[david-img]: https://img.shields.io/david/tunnckoCore/gana.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

