// Karma configuration
// Generated on Sun Sep 20 2015 10:45:15 GMT+0300 (GTB Daylight Time)

module.exports = function(config) {
  config.set({

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
	    'scripts/jquery-2.1.4.js',
            'scripts/angular.js',
            'scripts/lib/sinon-chai/sinon-chai.js',                        
            'scripts/lib/chai-things/chai-things.js',
            { pattern: "scripts/**/@(angular|ng)-*.js " },
            { pattern: "scripts/**/*.js", included: false },
            { pattern: "app/**/*.js", included: false, },
            { pattern: "app/**/*.ts", included: false, },
            { pattern: "app/**/*.js.map", included: false },   
     	    'test-main.js'
    ],


    // list of files to exclude
    exclude: [
	     "scripts/r.js",
            "scripts/require.js",
            "scripts/text.js",
            "scripts/**/*.min.js"
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,
    plugins:
        [
            'karma-chrome-launcher',            
            'karma-mocha',
            'karma-chai-plugins',
            'karma-sinon',
            'karma-mocha-reporter',         
            'karma-requirejs'
        ],
        

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
