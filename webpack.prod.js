const webpackMerge  	= require('webpack-merge'),
      common          = require('./webpack.common'),
      copyPlugin 		  = require('copy-webpack-plugin'),
      imageminPlugin  = require('imagemin-webpack-plugin').default;

module.exports = webpackMerge(common, {
	mode: 'production',
  plugins: [
    new copyPlugin([
    	{
    		from: "src/img",
    		to: "img",
    	},
      {
        from: "src/favicon.ico",
        to: "./",
      },
      {
        from: "src/manifest.json",
        to: "./",
			},
			{
				from: "src/app.apk",
				to: "./",
			}
    ]),
    new imageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ],
});