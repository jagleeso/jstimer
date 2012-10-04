requirejs(['jquery', 'timer'], function($, timer) {
    var t = new timer.HTMLTimer('time');
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
});
