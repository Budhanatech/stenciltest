'use strict';

const index = require('./index-91159be9.js');

index.patchBrowser().then(options => {
  return index.bootstrapLazy([["my-component_2.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"my-first-component",{"name":[1]}]]]], options);
});
