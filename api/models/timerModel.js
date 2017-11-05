class Timer {
	constructor(mode, startAt) {
		this.mode = mode;
		this.startAt = startAt;
	}

	getDate() {
		var now = new Date();
		if (this.mode == 'upfrom') {
			return now - this.startAt;
		} else if (this.mode == 'downto') {
			return this.startAt - now;
		} else {
			return this.startAt;
		}
	}

}

exports.timerList = {0:new Timer('upfrom', Date.now()),
                    1:new Timer('downto', Date.now())};
