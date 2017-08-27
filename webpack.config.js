module.exports = {

	entry: './assets/js/script.js',
	output: {filename: './public/js/bundle.js'}

},

module:{

	loaders:[

		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets:['es2015']   
			}
		}


	]


}