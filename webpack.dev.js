const path    	  	  = require('path'),
      webpackMerge 		= require('webpack-merge'),
      common          = require('./webpack.common'),
      Store						= require('data-store'),
      config					= new Store({
      	path: "./data/config.json",
      }).data;

module.exports = webpackMerge(common, {
	mode: 'development',
	devServer: {
    open: true,
    port: 3500,
    contentBase: path.join(__dirname, config.src),
	},
})