module.exports = function(config) {
    config.set({
      // ... other configuration settings
  
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
  
      plugins: [
        // ... other plugins
        require('karma-coverage-istanbul-reporter')
      ],
  
      coverageIstanbulReporter: {
        dir: require('path').join(__dirname, './coverage/<project-name>'),
        subdir: '.',
        reporters: [
          { type: 'html' },
          { type: 'text-summary' }
        ],
        check: {
          global: {
            statements: 80,
            branches: 80,
            functions: 80,
            lines: 80
          }
        }
      },
  
      // ... other configuration settings
    });
  };