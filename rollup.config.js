import nodeResolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import uglify from 'rollup-plugin-uglify-es';

export default {
  input: "src/index.js",
  output: {
    format: "iife",
    name: "template",
    file: "template.js",
    sourcemap: true,
  },

  // d3 relies on the node-resolve plugin
  plugins: [
    svelte(),
    nodeResolve(),
	uglify(),
  ]
};
