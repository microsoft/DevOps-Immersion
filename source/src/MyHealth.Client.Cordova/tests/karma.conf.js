module.exports = function (config) {
    config.set({
        basePath: './',
        reporters: ['progress', 'junit'],
        frameworks: ['jasmine'],
        files: [
            'phantomBindPolyfill.js',
            './out/tests/**/*.spec.js'
        ],
        browsers: ['PhantomJS'],
        junitReporter: {
            outputDir: './_results'
        },
        singleRun: true,
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-junit-reporter'
        ]
    });
};