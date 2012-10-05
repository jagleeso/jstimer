var refute = buster.assertions.refute;

define(['timer', 'jquery'], function (timer, $) {
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
        "DOM exists": function() {
            assert(document);
        },
        "HTMLTimer": {
            setUp: function() {
                /*:DOC +=
                 * <div id='time'></div>
                 */
                this.t = new timer.HTMLTimer('time');
                this.timediv = $('#time')[0];
                this.assertTime = function(timestring) { 
                    assert.match(this.timediv, { innerHTML: timestring });
                };
                this.assertTimeFormat = function(timestring) {
                    assert.match(timestring, /\d+:\d{2}:\d{2}/);
                };
            },
            "DOM is setup properly": function() {
                assert.match(this.timediv, { tagName: 'div' });
            },
            "inherits timer.Timer": function() {
                assert(this.t instanceof timer.Timer);
            },
            "is a timer.HTMLTimer": function() {
                assert(this.t instanceof timer.HTMLTimer);
            },
            "starts with 0 timestring": function () {
                this.assertTime("00:00:00");
            },
            "is non-zero timestring after" : {
                setUp: function() {
                    this.timeout = 5*1000;
                },
                "3 seconds": function (done) {
                    this.t.toggle_timer();
                    var that = this;
                    setTimeout(function() {
                        that.t.toggle_timer();
                        that.assertTimeFormat(that.timediv.innerHTML);
                        refute.match(that.timediv.innerHTML, "00:00:00");
                        done();
                    }, 3*1000);
                },
            },
        },
    });
});
