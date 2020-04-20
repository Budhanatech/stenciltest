import { a as patchEsm, b as bootstrapLazy } from './index-d3ce77b9.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["my-component_2",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"my-first-component",{"name":[1]}]]]], options);
});

export { defineCustomElements };
