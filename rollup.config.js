 var nodeResolve = require("rollup-plugin-node-resolve"),
     svelte = require("rollup-plugin-svelte"),
     uglify = require("rollup-plugin-uglify");

export default {
  entry: "src/index.js",
  format: "iife",
  moduleName: "template",
  dest: "template.js",
  sourceMap: true,

  // d3 relies on the node-resolve plugin
  plugins: [
    nodeResolve({ jsnext: true }),
    svelte(),
    uglify(),
  ]
};
