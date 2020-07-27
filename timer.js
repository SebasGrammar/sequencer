import {sendHeartBeat} from "./tests.js"

// func was not working... it said undefined. why? do exports run before verything else o waht?

var HighResolutionTimer = window.HighResolutionTimer = window.HighResolutionTimer || (function () {

    var HighResolutionTimer = function (options) {
        this.timer = false;

        this.total_ticks = 0;

        this.start_time = undefined;
        this.current_time = undefined;

        this.duration = (options.duration) ? options.duration : 1000;
        this.callback = (options.callback) ? options.callback : function () { };

        this.run = function(func = sendHeartBeat) {
            this.current_time = Date.now();
            if (!this.start_time) { this.start_time = this.current_time; }

            this.callback(this);
            
            console.log(func);
            func();

            var nextTick = this.duration - (this.current_time - (this.start_time + (this.total_ticks * this.duration)));
            this.total_ticks++;

            (function (i) {
                i.timer = setTimeout(function () {
                    i.run();
                }, nextTick);
            }(this));

            return this;
        };

        this.stop = function () {
            clearTimeout(this.timer);
            return this;
        };

        return this;
    };

    return HighResolutionTimer;

}());

var _timer = new HighResolutionTimer({
    duration: 1000,
    callback: function (timer, func) {
        var hours = Math.floor((((1000 / timer.duration) * timer.total_ticks) / 60) / 24) % 24;
        var minutes = Math.floor(((1000 / timer.duration) * timer.total_ticks) / 60) % 60;
        var seconds = ((1000 / timer.duration) * timer.total_ticks) % 60;
        console.log(hours, minutes, seconds);

        //func()

    }
});

export { _timer }
