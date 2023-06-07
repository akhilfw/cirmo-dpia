var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        brandTitle:'Test Summary Report',
        jsonFile: 'e2e-cucu-test/reporter/json',
        output: 'e2e-cucu-test/reporter/cucumber_report.html',
        screenshotsDirectory:'e2e-cucu-test/reporter/screenshots',
        storeScreenshots: false,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        ignoreBadJsonFile:true,
        metadata: {
            "Test Environment": "TEST",
            "Browser": "Chrome  113",
            "Platform": "Linux",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        },
        failedSummaryReport: true,
    };

    reporter.generate(options);
    
