define(['timer'], function (timer) {
    buster.testCase("timer module", {
        "exists": function () {
            assert(timer);
            assert(timer.Timer);
        },
        "Timer": {
            setUp: function () {
                var that = this;
                this.t = new timer.Timer(function(ts) { that.timer_str = ts; });
            },
            "can create": function() {
                assert(this.t instanceof timer.Timer);
            },
            "starts with 0 timestring": function () {
                assert.match(this.timer_str, "00:00:00");
            },
            "has correct Timer.timer_string after": {
                "1 second": function() {
                    assert.match(this.t.timer_string(1*1000), "00:00:01");
                },
                "1.8 seconds": function() {
                    assert.match(this.t.timer_string(1.8*1000), "00:00:01");
                },
                "60 seconds": function() {
                    assert.match(this.t.timer_string(60*1000), "00:01:00");
                },
                "1 hour": function() {
                    assert.match(this.t.timer_string(60*60*1000), "01:00:00");
                },
                "1 hour - 1 mili": function() {
                    assert.match(this.t.timer_string(60*60*1000 - 1), "00:59:59");
                },
                "100 hours": function() {
                    assert.match(this.t.timer_string(100*60*60*1000), "100:00:00");
                },
            },
        },
        "HTMLTimer inherits Timer": function() {
            var t = new timer.HTMLTimer('poop');
            assert(t instanceof timer.HTMLTimer);
            assert(t instanceof timer.Timer);
        },
    });
});
