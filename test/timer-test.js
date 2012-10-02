define(['timer'], function (timer) {
    buster.testCase("timer module", {
        "exists": function () {
            assert(timer);
            assert(timer.Timer);
        }
    });
});
