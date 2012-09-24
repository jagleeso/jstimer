/* A Timer takes the id of html tag, and when the timer is started it will replace the 
 * contents of that tag with a hour:minute:second timestring every 100 miliseconds.
 */
function Timer(timer_id) {
    this.timer_id = timer_id;
    this.started = false;
    this.start_time = new Date().getTime();
    this.update_timer();
    this.update_interval = 100; // miliseconds
}

Timer.prototype.toggle_timer = function() {
    if (this.started) {
        this.stop_timer();
    } else {
        this.start_timer();
    }
}

Timer.prototype.update_timer = function () {
    this.end_time = new Date().getTime();
    document.getElementById(this.timer_id).innerHTML = 
        this.timer_string(this.end_time - this.start_time); 
}

Timer.prototype.start_timer = function() {
    this.started = true;
    this.start_time = new Date().getTime();
    var that = this;
    this.timer_interval = setInterval(function() { that.update_timer() }, this.update_interval);
}

Timer.prototype.stop_timer = function() {
    this.started = false;
    clearInterval(this.timer_interval);
}

Timer.prototype.timer_string = function(mili) {
    function trim(divby) {
        var num = Math.floor(mili / divby) ;
        mili = mili % divby;
        return num;
    }
    var hours = trim(1000*60*60) % 24;
    var minutes = trim(1000*60) % 60;
    var seconds = trim(1000) % 60;
    return ( 
            zero_fill(hours, 2) + ":" + 
            zero_fill(minutes, 2) + ":" + 
            zero_fill(seconds, 2)
           ); 
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
