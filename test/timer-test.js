// Node tests
var buster = require('buster');
var requirejs = require('requirejs');
requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

define(['timer'], function (timer) {
    buster.testCase("timer module", {
        "exists": function () {
            console.log("looks like " + timer);
            assert(timer);
        }
    });
});
