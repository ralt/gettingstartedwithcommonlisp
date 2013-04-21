all:
	browserify src/main.js | uglifyjs -mc > bundle.js

debug:
	browserify -d src/main.js > bundle.js
