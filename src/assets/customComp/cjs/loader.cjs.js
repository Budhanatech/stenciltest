'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-91159be9.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["my-component_2.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"my-first-component",{"name":[1]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
