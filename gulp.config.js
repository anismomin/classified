module.exports = function() {
	var config = {
		client: {
			root: './client/',
			allTs: './src/client/**/*.ts',
			favicon: './src/client/favicon.ico',
			typings: './typings/main/**/*.d.ts',
			srcTemplateHTML: ['./src/client/index.html', './src/client/**/*.html'],
			srcTemplateCSS: './src/client/**/*.css',	


			images: ['./src/client/assets/images/**/*.jpeg','./src/client/assets/images/**/*.jpg', './src/client/assets/images/**/*.png'],
			fonts: ['./src/client/assets/fonts/**/*', './src/client/assets/fonts/*'],
			svgImages: './src/client/assets/images/**/*.svg',
			scss: ['./src/client/assets/scss/**/*.scss', './src/client/assets/partials/*.scss'],
			
			fontsOut: './client/assets/fonts/',
			imagesOut: './client/assets/images/',
			scssOut: './client/assets/css/',
		},
		server: {
			allTs: ['./src/server/**/*.**', './src/server/bin/www'],
			toOutputhPath: './server/'
		}
	}
	return config;
}