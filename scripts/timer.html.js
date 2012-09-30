// using a common config file for requirejs modules, as per:
// https://github.com/requirejs/example-multipage 
requirejs(['config'], function (config) {
    requirejs(['jquery', 'timer'], function($, timer) {
        var t = new timer.Timer('time');
        update_timer_button();

        $("#timer_button").click(function () {
            t.toggle_timer();
            update_timer_button();
        });

        function update_timer_button() {
            $("#timer_button").html(
                t.started ? 
                "Stop" : 
                "Start"
                );
        }
    })
});
