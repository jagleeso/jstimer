define([], function() {
    var klass = {};

    klass.extend = function(base, sub) {
        var temp_ctor = function() {};
        temp_ctor.prototype = base.prototype;
        sub.prototype = new temp_ctor();
        sub.prototype.constructor = sub;
    }

    return klass;
});
