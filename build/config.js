const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const Components = require('../components.json');

let externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`box-ui/packages/${key}`] = `box-ui/lib/${key}`
})

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'box-ui': path.resolve(__dirname, '../')
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
