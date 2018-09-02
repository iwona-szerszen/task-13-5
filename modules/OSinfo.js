const os = require('os');
const colors = require('colors');
const timeFormat = require('./timeFormat');

function getOSinfo() {
	const release = os.release();
	const cpu = os.cpus()[0].model;
	const userInfo = os.userInfo();
	let uptime = os.uptime();
	let type = os.type();

	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	} else {
		type = 'Linux';
	}

	console.log('System:'.gray, type);
	console.log('Release:'.red, release);
	console.log('CPU model:'.blue, cpu);
	console.log('Uptime:'.green, timeFormat.convertTimeInSec(uptime));
	console.log('User name:'.yellow, userInfo.username);
	console.log('Home directory:'.white, userInfo.homedir);
}

exports.print = getOSinfo;