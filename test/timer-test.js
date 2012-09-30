// Node tests
var buster = require("buster");
var timeri = require("../scripts/timer");
console.log(timeri);

buster.testCase("timer module", {
    "exists": function () {
        console.log("looks like " + timeri);
        assert(timeri);
    }
});
