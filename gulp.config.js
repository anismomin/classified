module.exports = function() {
	var config = {
		client: {
			allTs: './src/client/**/*.ts',
			typings: './typings/main/**/*.d.ts',
			toOutputhPath: './client/js/',
			srcTemplateHTML: './src/client/**/*.html',
			srcTemplateCSS: './src/client/**/*.css',	
		},
		server: {
			allTs: ['./src/server/**/*.**', './src/server/bin/www'],
			toOutputhPath: './server/'
		}
	}
	return config;
}