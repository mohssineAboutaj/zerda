const path 				= require('path'),
			webpack 		= require('webpack'),
			Store				= require('data-store'),
			dataFolder	= "data/",
			config			= new Store({
				path: "./data/config.json",
			}).data,
			navbar			= new Store({
				path: `${dataFolder}navbar.json`,
			}),
			header			= new Store({
				path: `${dataFolder}header.json`,
			}),
			footer			= new Store({
				path: `${dataFolder}footer.json`,
			}),
			about				= new Store({
				path: `${dataFolder}about.json`,
			}),
			menu				= new Store({
				path: `${dataFolder}menu.json`,
			}),
			reserv			= new Store({
				path: `${dataFolder}reservation.json`,
			}),
			services		= new Store({
				path: `${dataFolder}services.json`,
			}),
			team				= new Store({
				path: `${dataFolder}team.json`,
			}),
			follow			= new Store({
				path: `${dataFolder}follow.json`,
			}),
			data 				= {
				config,
			  head: config.head,
			  navbar: navbar.data,
			  header: header.data,
				footer: footer.data,
				about: about.data,
				menu: menu.data,
				reserv: reserv.data,
				services: services.data,
				team: team.data,
				follow: config.follow,
			};

/**
 * register webpack plugins
 * @webpackPluginsUrl https://webpack.js.org/plugins/
*/
const HtmlWebpackPlugin = require('html-webpack-plugin'),
      workboxPlugin = require('workbox-webpack-plugin');

// declar global variables
const src 				= config.src,
			dist				= config.dist,
			hbsIndex		= config.hbsIndex;

module.exports = {
	entry: `./${src}main.js`,

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, dist),
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: hbsIndex,
			templateParameters: data,
		}),
    new workboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
	],

	module: {
		rules: [
			{ 
				test: /\.hbs$/, 
				loader: "handlebars-loader"
			},
			{
        test: /\.(ttf|eot|svg|png|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader',
			},
			{
				test: /.(mjs|js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',
				options: {
					plugins: ['syntax-dynamic-import'],
					presets: [
						[
							'@babel/preset-env',
							{
								modules: false,
							},
						],
					],
				},
			},
		],
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/,
				},
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true,
		},
	},
};
