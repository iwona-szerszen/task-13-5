function convertTimeInSec(timeInSeconds) {
	if (timeInSeconds < 60) {
		return `${timeInSeconds.toFixed(0)} sec`;
	} else if (timeInSeconds >= 60 && timeInSeconds < 3600) {
		const minutes = Math.floor(timeInSeconds/60);
		const seconds = timeInSeconds%minutes;
		return `${minutes} min ${seconds.toFixed(0)} sec`;
	} else {
		const hours = Math.floor(timeInSeconds/3600);
		const minutes = Math.floor((timeInSeconds%3600)/60);
		const seconds = timeInSeconds - (hours * 3600) - (minutes * 60);
		return `${hours} h ${minutes} min ${seconds.toFixed(0)} sec`;
	}
}

exports.convertTimeInSec = convertTimeInSec;