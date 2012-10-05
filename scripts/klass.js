define([], function() {
    var klass = {};

    klass.extend = function(base, sub) {
        var temp_ctor = function() {};
        temp_ctor.prototype = base.prototype;
        // copy the base's prototype without calling base's constructor
        sub.prototype = new temp_ctor();
        // currently sub.prototype.constructor == base.prototype.constructor (bad)
        sub.prototype.constructor = sub;
    }

    return klass;
});
