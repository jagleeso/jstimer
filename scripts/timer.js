define(['jquery', 'klass'], function($, klass) {

/*  The timer namespace/module.
 */
var timer = {};

/* A Timer takes the id of html tag, and when the timer is started it will replace the 
 * contents of that tag with a hour:minute:second timestring every 100 miliseconds.
 */
timer.Timer = function(set_time) {
    this.set_time = set_time;
    this.started = false;
    this.start_time = new Date().getTime();
    this.update_timer();
    this.update_interval = 100; // miliseconds
}

timer.Timer.prototype.toggle_timer = function() {
    if (this.started) {
        this.stop_timer();
    } else {
        this.start_timer();
    }
}

timer.Timer.prototype.update_timer = function () {
    this.end_time = new Date().getTime();
    this.set_time( this.timer_string(this.end_time - this.start_time) );
}

timer.Timer.prototype.start_timer = function() {
    this.started = true;
    this.start_time = new Date().getTime();
    var that = this;
    this.timer_interval = setInterval(function() { that.update_timer() }, this.update_interval);
}

timer.Timer.prototype.stop_timer = function() {
    this.started = false;
    clearInterval(this.timer_interval);
}

timer.Timer.prototype.timer_string = function(mili) {
    function trim(divby) {
        var num = Math.floor(mili / divby) ;
        mili = mili % divby;
        return num;
    }
    /* Taken from:
     * http://stackoverflow.com/questions/1267283/how-can-i-create-a-zerofilled-value-using-javascript
     */
    function zero_fill(number, width) {
        width -= number.toString().length;
        if ( width > 0 ) {
            return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
        }
        return number + ""; // always return a string
    }
    var hours = trim(1000*60*60); // let the hours be more than 2 digits
    var minutes = trim(1000*60) % 60; // show "00" for minutes when we hit an hour
    var seconds = trim(1000) % 60;
    return ( 
            zero_fill(hours, 2) + ":" + 
            zero_fill(minutes, 2) + ":" + 
            zero_fill(seconds, 2)
           ); 
}

timer.HTMLTimer = function(timer_id) {
    this.timer_id = timer_id;
    var that = this;
    function set_time(timer_str) {
        document.getElementById(that.timer_id).innerHTML = timer_str;
    }
    timer.Timer.call(this, set_time);
    console.log("hey mah I'ma " + timer_id);
}

klass.extend(timer.Timer, timer.HTMLTimer);

return timer;

});
